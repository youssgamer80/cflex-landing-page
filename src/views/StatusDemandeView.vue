<template>
  <div class="StatutDemandeView">
    <NavBarComponent />


    <StatusDemande />


    <FooterComponent />
  </div>
</template>

<script>
import StatusDemande from "@/components/StatusDemande.vue"
import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'StatusDemandeView',
  props: {
    msg: String
  },
  components: {
    StatusDemande,
    FooterComponent,
    NavBarComponent,
  }
}
</script>