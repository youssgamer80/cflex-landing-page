<template>
  <div class="NavBarComponent">
   <NavBarComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarComponent from '@/components/NavBarComponent.vue'

export default {
  name: 'NavbarComponentView',
  components: {
   NavBarComponent,
  }
}
</script>