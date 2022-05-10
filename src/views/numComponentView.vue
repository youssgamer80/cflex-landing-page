<template>
  <div class="numComponentView">
   <NumComponentVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import NumComponentVue from '@/components/NumComponent.vue'

export default {
  name: 'numComponentView',
  components: {
   NumComponentVue,
  }
}
</script>