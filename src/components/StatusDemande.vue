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
          class="grid grid-cols-1 lg:grid-cols-1 gap-6 xl:gap-8 items-center"
        >
          <div class="mb-5 lg:mb-0">
           

          
            
                        <div class="card grid lg:grid-cols-2">
                            <div class="card-body text-left">
                                <p class="text-lg px-6 py-3">Immatriculation vehicule:<span class="font-weight-normal ml-2"> {{demande.immatriculation}}</span></p>
                                <p class="text-lg px-6 py-3">Marque :<span class="font-weight-normal ml-2"> {{demande.marque}}</span></p>
                                <p class="text-lg px-6 py-3">Model :<span class="font-weight-normal ml-2"> {{demande.model}}</span></p>
                                <p class="text-lg px-6 py-3">Nombre de place:<span class="font-weight-normal ml-2"> {{ demande.nbPlace }}</span></p>
                                <p class="text-lg px-6 py-3">Type de transport :<span class="font-weight-normal ml-2">{{demande.idTypeTransportFk.libelleTypeTransport}}</span></p>
                                <p class="text-lg px-6 py-3">Zone de transport :<span class="font-weight-normal ml-2"> {{ demande.idZoneFk.libelle }}</span></p>
                                <p class="text-lg px-6 py-3"><span class="font-weight-normal ml-2"></span></p>
                            </div>
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
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  
                </div>
                <div class="ml-3">
                  <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Statut
                  </h3>
                  <p class="mt-2 text-base leading-6 text-orange-500 dark:text-gray-400">
                   <span v-if="demande.statut" class="text-green-700">accepter</span>
                  <span class="text-gray-700" v-else >en attente</span>
                  </p>
                </div>
              </div>
              <p class="font-normal text-gray-700 dark:text-gray-400">
               
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
  props:['demande'],

  //props: ['demandes']


  // components: {
  //   FooterComponent,
  //   NavBarComponent,
  // },
  data() {
    return {};
  },
};
</script>
