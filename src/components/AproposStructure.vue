<template>
  <div>

    

   <FooterComponent/>
  </div>
</template>

<script>
// import HeroSection from '@/components/HeroSection.vue'
// import FeaturesSection from '@/components/FeaturesSection.vue'
// import AdvantageSection from '@/components/AdvantageSection.vue'
// import UserPaging from '@/components/UserPaging.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'AproposStructure',
  props: {
    msg: String
  },
   components: {
   
    FooterComponent,
  }
}
</script>
