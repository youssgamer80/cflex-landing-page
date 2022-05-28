<template>
  <div id="app">
    

    
    <router-view />

    
  </div>
</template>


<style>

nav a.router-link-exact-active {
  color: #fb5a00;
}
</style>
<script>
// import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  open: false,
  
  
  components: {
    // FooterComponent
  }
}
</script>
