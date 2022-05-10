<template>
  <div class="ConnexionDemande">
    <ConnexionDemande/>
  </div>
</template>
<script>
import ConnexionDemande from "@/components/ConnexionDemande.vue"
export default {
  name: 'connexionDemande',
  props: {
    msg: String
  },
   components: {
    ConnexionDemande,
  }
}
</script>