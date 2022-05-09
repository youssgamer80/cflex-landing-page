<template>
  <div class="py-8 bg-white dark:bg-gray-900 lg:py-24">
    <StatusDemande/>
  </div>
</template>
<script>
import StatusDemande from "@/components/StatusDemande.vue"
export default {
  name: 'StatusDemandeView',
  props: {
    msg: String
  },
   components: {
    StatusDemande
  }
}
</script>