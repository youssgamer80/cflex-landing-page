<template>
  <div class="newDemande">
    <AccueilDemandeVue/>
  </div>
</template>
<script>
import AccueilDemandeVue from "@/components/AccueilDemande.vue"
export default {
  name: 'DemandeView',
  props: {
    msg: String
  },
   components: {
    AccueilDemandeVue
  }
}
</script>