<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <!-- This example requires Tailwind CSS v2.0+ -->
<div>
    <div class="bg-white dark:bg-gray-800">
    
      <section class="py-16 lg:pt-0 pb-36 lg:pb-28 bg-white dark:bg-gray-900" id="figma">
        <div class="max-w-screen-xl px-4 lg:px-12 mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center">
            <div class="mb-5 lg:mb-0">
           <h1 class="mb-4 text-4xl font-bold text-gray-900 lg:font-extrabold lg:text-7xl lg:leading-tight dark:text-white lg:text-center 2xl:px-30 lg:mb-8">Déplacer vous  avec <span class="text-orange-500">Flex</span>ibilité</h1>
              <!-- <h1
                class="font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug text-gray-900 dark:text-white mb-4">
Déplacer vous  avec Flexibilité </h1> -->
              <p class="text-gray-500 dark:text-gray-400 font-normal text-lg lg:text-xl mb-6 lg:mb-8">
                Avec C'Flex vous avez les différentes gares des taxis communaux, les horaires de chargement et les points d’arrêt,  les itinéraires possibles, les moyens de transport possibles (Taxi, Bus, Gbaka...) entre entres votre position et votre destination ainsi que les coûts respectifs.</p>
              <div class="items-center lg:flex">
                <button type="button" class="text-white bg-gradient-to-br from-orange-400 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink to Orange</button>

                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Pink to orange
  </span>
</button></div>
            </div>
            <div>
              <img class="w-full dark:hidden" src="assets/HeroImage.svg" alt="Data app">
              <img class="w-full hidden dark:block" src="assets/HeroImage.svg" alt="Dta app dark">
            </div>
          </div>
        </div>
      </section>
    
     <section class="mx-auto  flex justify-center  px-6 pt-8 m-8 ">
        <CardItem iconvalue="calendar-days" title="Set a better deadline tasks" subtitle="You can make you duty deadline better and more orderly" />
        <CardItem  iconvalue="calendar-days" title="Manage the task so easiluy" subtitle="You can make you duty deadline better and more orderly" />
        <CardItem  iconvalue="bell" title="Wouldn't miss notifications" subtitle="Of course you will always get the task and schedule notifications" />
     </section>

      <!-- le footer 
      <footer class="py-16 bg-white lg:py-24 dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl lg:px-12">
          <div class="grid gap-12 lg:grid-cols-6 lg:gap-24">
            <div class="col-span-2">
              <a href="https://maitrica.com" class="flex mb-6">
                <img src="assets/logo.svg" class="mr-4 h-10" alt="Maitrica Logo">
                <span class="self-center text-lg font-semibold text-gray-900 dark:text-white">Maitrica</span>
              </a>
              <p class="text-gray-600 dark:text-gray-400">Maitrica est une societe de conception et developpement
                d'intelligence artificielles et d'outils RPA. <br>Faites de la science des données votre avantage
                concurrentiel.</p>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources
              </h3>
              <ul>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">IA &amp;
                    ML</a>
                </li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Web &amp;
                    Mobile</a></li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Blog</a>
                </li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Programme
                    d'affiliation</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Aide &amp;
                Support</h3>
              <ul>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Nous
                    contacter</a></li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Domaine
                    de connaissances</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Suivez nous </h3>
              <ul>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Twitter</a>
                </li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Facebook</a>
                </li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h3>
              <ul>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Politique
                    de confidentialité</a></li>
                <li class="mb-4"><a href="#" target="_blank" rel="noreferrer nofollow"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">termes
                    &amp; Conditions</a></li>
                <li class="mb-4"><a href="#"
                    class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">CGU</a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="my-8 border-gray-200 dark:border-gray-700 lg:my-12"><span
            class="block text-center text-gray-600 dark:text-gray-400 font-">©
           
            <a href="https://maitrica.com">Maitrica™</a>. Tous les droits sont réservés.
          </span>
        </div>
      </footer>-->
    </div>
</div>

</template>
<script>

import CardItem from './CardItem.vue'
export default {
  name :"HeroSection",
  components:{
    CardItem
  }
  }
 
  
</script>