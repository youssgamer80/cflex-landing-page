<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="max-w-screen-xl px-4 lg:px-12 mx-auto bg-white dark:bg-gray-800 p-20 ">
      <section class="md:flex">
        <CardItem
          iconvalue="calendar-days"
          title="Set a better deadline tasks"
          subtitle="You can make you duty deadline better and more orderly"
        />
        <CardItem
          iconvalue="layer-group"
          title="Manage the task so easiluy"
          subtitle="You can make you duty deadline better and more orderly"
        />
        <CardItem
          iconvalue="bell"
          title="Wouldn't miss notifications"
          subtitle="Of course you will always get the task and schedule notifications"
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