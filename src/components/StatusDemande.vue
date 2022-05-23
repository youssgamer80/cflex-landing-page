<template>

<div>
   
  <section>
  
    <div>
      <div
        class="
          code-preview
          rounded-xl
          px-4
          mx-auto
          max-w-screen-xl
          lg:px-12
          bg-gradient-to-r bg-white
          dark:bg-gray-900
          border border-gray-200
          dark:border-gray-700
          p-2
          sm:p-20
          lg:py-24
        "
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center"
        >
          <div class="mb-5 lg:mb-0">
            <!-- <h1
                class="font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug text-gray-900 dark:text-white mb-4">
                Déplacer vous  avec Flexibilité </h1> -->

            <div
              class="
                p-4
                max-w-sm
                bg-white
                rounded-lg
                border-gray-200
                shadow-md
                sm:p-6
                lg:p-8
                dark:bg-gray-800 dark:border-gray-700
              "
            >
              <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                  Suivre ma demande
                </h5>
                <div>
                  <label
                    for="password"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Saisissez votre votre numero matricule</label
                  >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-600
                      dark:border-gray-500
                      dark:placeholder-gray-400
                      dark:text-white
                    "
                    required=""
                  />
                </div>
                <button
                  type="button"
                  class="
                    text-white
                    bg-blue-700
                    hover:bg-blue-800
                    focus:outline-none focus:ring-4 focus:ring-blue-300
                    font-medium
                    rounded-full
                    text-sm
                    px-5
                    py-2.5
                    text-center
                    mr-2
                    mb-2
                    dark:bg-blue-600
                    dark:hover:bg-blue-700
                    dark:focus:ring-blue-800 
                  "
                >
                  envoyer
                </button>
                <div class="flex items-start">
                  <div class="flex items-start">
                    <div class="flex items-center h-5"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <a
              href="#"
              class="
                block
                p-6
                max-w-xl
                bg-white
                rounded-lg
                border border-gray-200
                shadow-md
                hover:bg-gray-100
                dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
              "
            >
              <h5
                class="
                  mb-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                Demande du véhicules matricule 01F56
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Mr Mamdou Drissa Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio eligendi animi dolore error?
                Accusamus quidem aliquid ducimus distinctio aperiam!
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <FooterComponent/> -->
  </div>
</template>



<script>
// import NavBarComponent from "@/components/NavBarComponent.vue";
// import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "StatusDemande",
  // components: {
  //   FooterComponent,
  //   NavBarComponent,
  // },
  data() {
    return {};
  },
};
</script>
