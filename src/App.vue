<template>
  <div></div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      country: null, // Holds the fetched country name
    };
  },
  methods: {
    async fetchCountry() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.country = data.country_name; // Update the country
        this.sendEmail(data); // Send email with location details
      } catch (error) {
        console.error("Error fetching location:", error);
        this.country = "Unable to fetch country";
      }
    },
    sendEmail(locationData) {
      const publicKey = "QOsA8Czkmwrsi1Wp5"; // Replace with your EmailJS public key
      const templateId = "template_bhvcp0l"; // Replace with your EmailJS template ID
      const serviceId = "service_9pb4q3d"; // Replace with your EmailJS service ID

      const templateParams = {
        country: locationData.country_name || "Unknown",
        region: locationData.region || "Unknown",
        city: locationData.city || "Unknown",
        ip: locationData.ip || "Unknown",
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
    },
  },
  mounted() {
    this.fetchCountry(); // Fetch the user's country on component mount
  },
};
</script>

<style scoped>
div {
  background-image: url(./assets/b.png);
  height: 100vw;
}
</style>
