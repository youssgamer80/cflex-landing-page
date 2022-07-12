<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <div class="bg-white dark:bg-white-900">
      <section class="py-10 lg:pt-0 pb-36 bg-white dark:bg-gray-900" id="figma">

        <div class="max-w-screen-xl px-4 lg:px-12 mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center">
            <div class="mb-5 lg:mb-0">
              <h1
                class="mb-4 text-4xl font-bold text-gray-900 lg:font-extrabold lg:text-7xl lg:leading-tight dark:text-white lg:text-center 2xl:px-30 lg:mb-8">
                Déplacer vous avec
                <span class="text-orange-500">Flex</span>ibilité
              </h1>

              <p class="text-gray-500 dark:text-gray-400 font-normal text-lg lg:text-xl mb-6 lg:mb-8">
                Avec C'Flex ,vous avez les différentes gares des taxis communaux,
                les horaires de chargement et les points d’arrêt, les
                itinéraires possibles, les moyens de transport possibles (Taxi,
                Bus, Gbaka...) entre entres votre position et votre destination
                ainsi que les coûts respectifs.
              </p>
              <div class="items-center flex  h-full mx-auto lg:flex ">

                <button type="button" @click="showModal"
                  class="text-white bg-gradient-to-br from-orange-400 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  data-modal-toggle="popup-modal">
                  Faire une demande

                </button>
                <ModalComponent v-show="isModalVisible" @close="closeModal" />


                <!-- <router-link to="/modale"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" 
                >
                  <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 text-white rounded-md group-hover:bg-opacity-0 hover:text-white-400" data-modal-toggle="popup-modal"
                  >
                    Faire une demande
                  </span>
                </router-link> -->


                <router-link to="/connexionDemande"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 text-white rounded-md group-hover:bg-opacity-0 hover:text-white-400">
                    voir mes demandes
                  </span>
                </router-link>
              </div>
            </div>
            <div>
              <img class="w-full dark:hidden" src="assets/HeroImage.svg" alt="Data app" />
              <img class="w-full hidden dark:block" src="assets/HeroImage.svg" alt="Dta app dark" />
            </div>
          </div>
        </div>

      </section>
    </div>
    
  </div>

</template>


<script>
import ModalComponent from "./ModalComponent.vue";

export default {

  name: "HeroSection",
  components: {
    ModalComponent,
  },
  data() {
    return {


      isModalVisible: false,
      stoggleModal: false,

    };



  },
  methods: {

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }, toggleModal() {

      this.showModal = !this.showModal;
      console.log(this.showModal)
    }


  },


};
</script>
