<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="max-w-screen-xl px-4 lg:px-12 mx-auto bg-white dark:bg-gray-800 p-20 ">
      <section class="md:flex">
        <CardItem
          iconvalue="calendar-days"
          title="rapide et efficace"
          subtitle="vous ne perdez pas le temps dans vos activités"
        />
        <CardItem
          iconvalue="layer-group"
          title="peu couteux"
          subtitle="economisez rapidement sur vos deplacement"
        />
        <CardItem
          iconvalue="bell"
          title="informez-vous sur la disponibilité des places disponibles "
          subtitle="vous recevrez toujours les notifications de tâche et de planification"
        />
      </section>

   
  </div>
</template>
<script>

import CardItem from "./CardItem.vue";
export default {
  name: "FeaturesSection",
  components: {
    CardItem,
  },
};
</script>