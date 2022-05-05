<template>
  <div>
   <HeroSection/>
   <FeaturesSection/>
   <AdvantageSection/>
   <UserPaging/>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import AdvantageSection from '@/components/AdvantageSection.vue'
import UserPaging from '@/components/UserPaging.vue'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
   components: {
    HeroSection,
    FeaturesSection,
    AdvantageSection,
    UserPaging
  }
}
</script>
