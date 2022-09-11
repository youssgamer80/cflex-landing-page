<script setup>
  
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> -->
  <router-view></router-view>
  <router-view name="NavBar"></router-view>
  <router-view name="Hero"></router-view>
  <router-view name="HomeContent"></router-view>
  <router-view name="NotFoundPage"></router-view>
  <router-view name="Demande"></router-view>
  <router-view name="DemandeForm"></router-view>
  <router-view name="Footer"></router-view>
  
</template>


