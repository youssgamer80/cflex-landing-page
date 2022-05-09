<template>
  <div class="bg-white dark:bg-gray-900">
   <HeroSection/>
   <FeaturesSection/>
   <AdvantageSection/>
   <!-- <FooterComponent/> -->
   <!-- <UserPaging/> -->
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import AdvantageSection from '@/components/AdvantageSection.vue'
// import FooterComponent from './FooterComponent.vue'
// import UserPaging from '@/components/UserPaging.vue'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
   components: {
    HeroSection,
    FeaturesSection,
    AdvantageSection,
    // FooterComponent
  }
}
</script>
