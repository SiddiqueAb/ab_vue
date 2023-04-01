<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Carousel from "./components/homepage/Carousel.vue";
import Footer from "./components/Footer.vue";
// import Education from "./components/Education.vue";
</script>

<template>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/about">about</router-link> -->
  <Header></Header>
  
  <router-view>
   
  </router-view>
 
  <Footer></Footer>
</template>

<style scoped></style>
