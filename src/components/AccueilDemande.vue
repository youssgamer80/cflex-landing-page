<template>
  <div class="bg-white dark:bg-gray-900">
    <section class="py-8 bg-white dark:bg-gray-900 lg:py-24">
      <div class="px-4 mx-auto max-w-screen-xl lg:px-12 lg:text-center">
        <a href="0?node-id=4422%3A86874" class="
            inline-flex
            justify-between
            items-center
            py-1
            px-1
            pr-4
            mb-4
            text-sm text-gray-700
            bg-gray-100
            rounded-full
            dark:bg-gray-800 dark:text-white
            hover:bg-gray-200
          " role="alert"><span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">GCC</span>
          <span class="text-sm font-medium">En vous inscrivant vous accepter notre politique de confidentialité</span>
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
        <h1 class="
            mb-4
            text-4xl
            font-bold
            text-gray-900
            lg:font-extrabold lg:text-6xl lg:leading-tight
            dark:text-white
            lg:text-center
            2xl:px-30
            lg:mb-8
          ">
          Inscrivez-vous et faites vos demandes d'enregistrement pour vos véhicules
        </h1>
        <p class="
            mb-10
            text-lg
            font-normal
            text-gray-500
            dark:text-gray-400
            lg:text-center lg:text-2xl
            xl:px-32
          ">

        </p>

      </div>
      <FormComponnentVue />
    </section>

  </div>
</template>

<script>
import FormComponnentVue from "./FormComponnent.vue"
export default {
  name: 'AccueilDemande',
  props: {
    msg: String
  },
  components: {
    FormComponnentVue,

  }
}
</script>


