<template>
  <div class="ContactView">
    <h1>page des contacts</h1>

<!-- importation du footer -->
     <div>
    <FooterComponent/>
    
    </div>
  </div>


  
</template>



<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'AboutView',
  components: {
    FooterComponent
  }
}
</script>
