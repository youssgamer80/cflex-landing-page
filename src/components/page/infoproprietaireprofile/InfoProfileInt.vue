<template>
  <div class="InfoProfileInt">

    <!--  -->

    <body class="bg-gray-50 dark:bg-gray-600">
      <noscript><iframe src="" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript>

      <!-- navbar -->

      <!-- tester -->



      <NavbarComponentboard />






      <!--  -->

      <div class="flex overflow-hidden bg-white pt-16">

        <!--   <SidebarComponent /> -->


        <aside id="sidebar" class="
            flex
            hidden
            fixed
            top-0
            left-0
            z-20
            flex-col flex-shrink-0
            pt-16
            w-64
            h-full
            duration-200
            lg:flex
            transition-width
            lg:w-64
          " aria-label="Sidebar">
          <div class="flex relative flex-col flex-1 pt-0 min-h-0 bg-gray-50">
            <div class="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
              <div class="flex-1 bg-gray-50 px-3" id="sidebar-items">
                <ul class="pb-2 pt-1">



                  <li>
                    <a href="" class="
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      " sidebar-toggle-collapse="">

                    </a>
                  </li>
                  <li>
                    <a href="" class="
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      " sidebar-toggle-collapse="">

                      <router-link to="formdemanproprietaireint">
                        <span class="ml-3 text-dark-500 text-sm font-light" sidebar-toggle-item="">formulaire de
                          demande</span>
                      </router-link>
                    </a>
                  </li>
                  <li>

                  </li>
                  <li>


                  </li>
                  <li>
                    <button type="button" class="
                        w-full
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      " sidebar-toggle-collapse="" aria-controls="dropdown-users"
                      data-collapse-toggle="dropdown-users">

                      <span class="ml-3 text-dark-500 text-sm font-light" sidebar-toggle-item="">-</span>

                    </button>
                    <ul id="dropdown-users" sidebar-toggle-list="" class="pb-2 pt-1 hidden">
                      <li>
                        <a href="" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">Use</span><span class="hidden">U</span></a>
                      </li>
                      <li>
                        <a href="" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">Pro</span><span class="hidden">P</span></a>
                      </li>
                      <li>
                        <a href="htt" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">S</span><span class="hidden">S</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>



                    <!-- tester -->



                    <!-- tester -->

                    <ul id=" dropdown-pages" sidebar-toggle-list="" class="pb-2 pt-1 hidden">

                      <li>
                        <a href="https" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">Main</span><span class="hidden">M</span></a>
                      </li>


                    </ul>
                  </li>
                  <li>

                    <ul id="dropdown-auth" sidebar-toggle-list="" class="pb-2 pt-1 hidden">
                      <li>
                        <a href="https://" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">Sign in</span><span class="hidden">S</span></a>
                      </li>
                      <li>
                        <a href="" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">Sign up</span><span class="hidden">S</span></a>
                      </li>

                      <li>
                        <a href="" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">password</span><span class="hidden">R</span></a>
                      </li>
                      <li>
                        <a href="" class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "><span class="">Profil</span><span class="hidden">P</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr class="
                    border-0
                    h-px
                    bg-gradient-to-r
                    from-gray-100
                    via-gray-300
                    to-gray-100
                  " />
                <div class="pt-2">

                </div>
              </div>
            </div>
            <div class="
                hidden
                relative
                bottom-0
                left-0
                justify-center
                w-full
                lg:flex
                bg-gray-100
                space-x-4
                p-4
              " sidebar-bottom-menu="">

              <div id="tooltip-settings" role="tooltip" class="
                  inline-block
                  absolute
                  invisible
                  z-10
                  py-2
                  px-3
                  text-sm
                  font-medium
                  text-white
                  bg-gray-900
                  rounded-lg
                  opacity-0
                  transition-opacity
                  duration-300
                  tooltip
                  shadow-lg-sm
                " data-popper-placement="top" style="
                  position: absolute;
                  inset: auto auto 0px 0px;
                  margin: 0px;
                  transform: translate3d(73px, -110px, 0px);
                ">
                parametre de la page
                <div class="tooltip-arrow" data-popper-arrow="" style="
                    position: absolute;
                    left: 0px;
                    transform: translate3d(51px, 0px, 0px);
                  "></div>
              </div>

              <div class="
                  hidden
                  z-50
                  my-4
                  text-base
                  list-none
                  bg-white
                  rounded
                  divide-y divide-gray-100
                  shadow-lg
                " id="language-dropdown" data-popper-placement="top" style="
                  position: absolute;
                  inset: auto auto 0px 0px;
                  margin: 0px;
                  transform: translate3d(128px, -56px, 0px);
                ">
                <ul class="py-1" role="none">
                  <li>
                    <a href="#" class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      " role="menuitem">
                      <div class="inline-flex items-center">
                        <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us" viewBox="0 0 512 512">
                          <g fill-rule="evenodd">
                            <g stroke-width="1pt">
                              <path fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"></path>
                              <path fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"></path>
                            </g>
                            <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path>
                            <path fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"></path>
                          </g>
                        </svg>
                        Francais
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      " role="menuitem">

                    </a>
                  </li>
                  <li>
                    <a href="#" class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      " role="menuitem">
                      <div class="inline-flex items-center">
                        <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it" viewBox="0 0 512 512">
                          <g fill-rule="evenodd" stroke-width="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z"></path>
                            <path fill="#009246" d="M0 0h170.7v512H0z"></path>
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path>
                          </g>
                        </svg>
                        italien
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      " role="menuitem">
                      <div class="inline-flex items-center">
                        <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                          <defs>
                            <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path>
                          </defs>
                          <path fill="#de2910" d="M0 0h512v512H0z"></path>
                          <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"></use>
                          <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a">
                          </use>
                          <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a">
                          </use>
                          <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a">
                          </use>
                          <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)"
                            xlink:href="#a"></use>
                        </svg>

                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div class="hidden fixed inset-0 z-10 bg-gray-900 opacity-50" id="sidebarBackdrop"></div>
        <div id="main-content" class="h-full w-full bg-white-50 relative overflow-y-auto lg:ml-64">
          <main>
            <div class="px-4 pt-6">
              <div class="
                  grid grid-cols-1
                  gap-6
                  mb-6
                  w-full
                  xl:grid-cols-2
                  2xl:grid-cols-2
                ">

              </div>
              <div class="
                  grid grid-cols-1
                  gap-6
                  mb-6
                  w-full
                  
                ">
                <div class="w-full mx-auto text-center">
                  <span class="text-orange-600  text-4xl font-bold">Info profile proprietaire</span>
                </div>
                <!-- test -->

                <div
                  class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert" v-if="showAlertSuccess">
                  <!-- <i class="close icon" @click="close"></i> -->
                  <span class="font-medium px-20">Felictation !! {{ alertMessageSuccess }}</span>
                </div>



                <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert" v-if="showAlertError">
                  <span class="font-medium px-20">Echec !! {{ alertMessageError }}</span>
                </div>





                <!-- test -->
                <div class="
                    bg-white
                    shadow-lg shadow-gray-200
                    rounded-2xl
                    p-4
                    bg-gradient-to-r
                    from-dark-800
                    to-dark-900 
                    
                  " style="position: relative">




                  <div id="main-chart">



                    <div id="apexchartsxsrv0ha6" class="
                        apexcharts-canvas
                        apexchartsxsrv0ha6
                        apexcharts-theme-light
                      ">


                      <!-- action de la suppression -->



                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto">

                        <!-- tableau de donnees -->

                        <section>
                          <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                              <!--   <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> -->
                            </span>

                          </div>
                          <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">nom</div>
                                <div class="px-4 py-2">{{ proprietaire.nom }}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">prenom</div>
                                <div class="px-4 py-2">{{ proprietaire.prenom }}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">telephone</div>
                                <div class="px-4 py-2">{{ proprietaire.telephone }}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">genre</div>
                                <div class="px-4 py-2">{{ proprietaire.genre }}</div>
                              </div>
                              <!--  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Date de naissance</div>
                    <div class="px-4 py-2">+11 998001001</div>
                </div> -->
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">lieu de residence</div>
                                <div class="px-4 py-2">{{
                                    proprietaire.lieuResidence
                                }}</div>
                              </div>
                              <!-- <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div> -->
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">lieu de naissance</div>
                                <div class="px-4 py-2">{{ proprietaire.lieuNaissance }}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2">
                                  <a class="text-blue-800">{{ proprietaire.email }}</a>
                                </div>
                              </div>
                              <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Date de naissance</div>
                                <div class="px-4 py-2">{{ proprietaire.dateNaissance }}</div>
                              </div>
                            </div>
                          </div>
                          <!--  <button
            class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
            Full Information</button> -->
                        </section>
                        <!-- test -->

                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">




                        </div>
                        <!-- <ModalAnldemande/> -->


                        <!-- <router-link to="/modifInfoProfile"> -->
                        <button type="button" @click="stoggleModal = !stoggleModal"
                          class="px-5 py-3 w-1/4 mx-auto block rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm text-center mr-2 mb-2 dark:focus:ring-yellow-900">Modifier</button>
                        <!-- </router-link> -->




                        <!-- <button type="button"
                          class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                          v-on:click="toggleModal()">modale</button> -->

                        <!-- test -->

                      </div>

                      <!-- modal components -->
                      <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                        v-if="stoggleModal">
                        <div class="relative mx-auto w-auto max-w-2xl">
                          <div class="bg-white w-full rounded shadow-2xl">

                            <!-- <span>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Saepe,
                                                            aperiam qui nulla recusandae voluptatem id et dolor nemo
                                                            tenetur
                                                            aliquid non excepturi. Possimus perferendis deserunt aperiam
                                                            dolor, ullam ipsa explicabo.</span> -->

                            <!-- tester -->

                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">

                              <div class="mx-auto items-center py-9 pt-4">
                                <p class="text-orange-600  text-2xl font-bold">MODIFICATION DES INFORMATIONS
                                  PROPRIETAIRE
                                </p>

                              </div>


                              <div class="-mx-3 md:flex mb-6">

                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="name">
                                    Nom
                                  </label>
                                  <input v-model="proprietaire.nom"
                                    class="appearance-none block w-full bg-grey-lighter focus:ring-orange-500 focus:border-orange-500 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    type="text">

                                </div>


                                <div class="md:w-1/2 px-3">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="prenom">
                                    prenom
                                  </label>
                                  <input v-model="proprietaire.prenom"
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker focus:ring-orange-500 focus:border-orange-500 border border-grey-lighter rounded py-3 px-4"
                                    type="text">
                                </div>
                              </div>




                              <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    telephone
                                  </label>
                                  <input v-model="proprietaire.telephone"
                                    class="appearance-none block w-full bg-grey-lighter focus:ring-orange-500 focus:border-orange-500 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                    type="text" pattern="^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$">

                                </div>


                                <div class="md:w-1/2 px-3">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="grid-last-name">
                                    Adresse mail
                                  </label>
                                  <input v-model="proprietaire.email"
                                    class="appearance-none block w-full bg-grey-lighter focus:ring-orange-500 focus:border-orange-500 text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    type="email">
                                </div>
                              </div>



                              <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/8 px-3 mb-6 md:mb-0">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="name">
                                    Lieu de naissance
                                  </label>

                                  <input v-model="proprietaire.lieuNaissance"
                                    class="appearance-none block w-full bg-grey-lighter focus:ring-orange-500 focus:border-orange-500 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    type="text">

                                </div>
                              </div>



                              <!-- <div class="-mx-3 md:flex mb-6">
                                                                <div class="md:w-full px-3">
                                                                    <label
                                                                        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                                                        for="grid-password">
                                                                        
                                                                    </label>
                                                                    <input
                                                                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                                                        id="grid-password" type="password"
                                                                        placeholder="******************">
                                                                    <p class="text-grey-dark text-xs italic">Make it as
                                                                        long and as crazy as you'd like</p>
                                                                </div>
                                                            </div> -->
                              <div class="-mx-3 md:flex mb-2">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="grid-city">
                                    lieu de residence
                                  </label>
                                  <input v-model="proprietaire.lieuResidence"
                                    class="appearance-none block w-full focus:ring-orange-500 focus:border-orange-500 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    type="text">
                                </div>
                                <div class="md:w-1/2 px-3">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="g">
                                    Genre
                                  </label>
                                  <div class="relative">
                                    <select v-model="proprietaire.genre"
                                      class="block appearance-none w-full bg-grey-lighter focus:ring-orange-500 focus:border-orange-500 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                      id="gr">
                                      <option value="H">Homme</option>
                                      <option value="F">Femme</option>
                                    </select>
                                    <div
                                      class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">

                                    </div>
                                  </div>
                                </div>
                                <div class="md:w-1/2 px-3">
                                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="g">

                                    Date de naisssance
                                  </label>
                                  <input v-model="proprietaire.dateNaissance"
                                    class="appearance-none block w-full bg-grey-lighter focus:ring-orange-500 focus:border-orange-500 text-grey-darker rounded py-2 px-3"
                                    type="date">
                                </div>


                              </div>



                              <div class=" w-full mx-aut items-center flex flex-center">


                                <button
                                  class="bg-red-500 mx-auto m-8 items-center hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium block rounded-md text-sm px-6 py-2 text-center"
                                  @click="stoggleModal = false">
                                  <span class="">
                                    <p class="fas fa-check items-center w-full text-white">
                                      Fermer
                                    </p>
                                  </span>


                                </button>

                                <button
                                  class="bg-orange-500 mx-auto m-10 items-center hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium block rounded-md text-sm px-6 py-2 text-center"
                                  @click="updateProprietaire">
                                  <span class="">
                                    <p class="fas fa-check items-center w-full text-white">
                                      Modifier
                                    </p>
                                  </span>


                                </button>
                              </div>



                            </div>









                            <!-- tester -->



                          </div>



                        </div>



                      </div>
                      <div v-if="stoggleModal" class="absolute inset-0 z-40">
                      </div>

                      <div />
                      <!-- test -->




                      <!--  -->


                      <div class="apexcharts-legend" style="max-height: 210px"></div>

                      <div class="
                          apexcharts-yaxistooltip
                          apexcharts-yaxistooltip-0
                          apexcharts-yaxistooltip-left
                          apexcharts-theme-light
                        ">
                        <div class="apexcharts-yaxistooltip-text"></div>
                      </div>
                    </div>
                  </div>

                  <div class="resize-triggers">
                    <div class="expand-trigger">
                      <div style="width: 563px; height: 633px"></div>
                    </div>
                    <div class="contract-trigger"></div>
                  </div>
                </div>

              </div>


            </div>


          </main>
          <footer class="
              p-6
              my-6
              mx-4
              bg-white
              rounded-2xl
              shadow-lg shadow-gray-200
              md:flex md:items-center md:justify-between
            ">
            <ul class="flex flex-wrap items-center mb-6 md:mb-0">
              <li>
                <a href="#" class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  ">term et conditions</a>
              </li>
              <li>
                <a href="#" class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  ">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  ">Licence</a>
              </li>
              <li>
                <a href="#" class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  ">Cookie Policy</a>
              </li>
              <li>
                <a href="#" class="text-sm font-normal text-gray-500 hover:underline">Contacte</a>
              </li>
            </ul>
            <div class="flex space-x-6 sm:justify-center">
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                  </path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </footer>
          <p class="my-10 text-sm text-center text-gray-500">
            © 2022 CFLEX
            <a href="https" class="hover:underline" target="_blank">interface</a>
            and
            <a href="httm" class="hover:underline" target="_blank">par CFLEX</a>.
          </p>
        </div>
      </div>

      <div class="svgMap-tooltip">
        <div class="svgMap-tooltip-content-wrapper"></div>
        <div class="svgMap-tooltip-pointer"></div>
      </div>

      <svg id="SvgjsSvg1089" width="2" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1"
        xmlns:svgjs="http://svgjs.dev" style="
          overflow: hidden;
          top: -100%;
          left: -100%;
          position: absolute;
          opacity: 0;
        ">
        <defs id="SvgjsDefs1090"></defs>
        <polyline id="SvgjsPolyline1091" points="0,0"></polyline>
        <path id="SvgjsPath1092" d="M0 0 "></path>
      </svg>
    </body>


  </div>
</template>




<style>
.modal-bg {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -9999;
}
</style>








<script>




import axios from 'axios';

import NavbarComponentboard from '../../pageprofileComponent/NavbarComponentboard.vue';

export default {


  name: "PageProfile",




  components: {
    NavbarComponentboard,
    /*  SidebarComponent, */



  },

  data() {
    return {
      showModal: false,
      stoggleModal: false,
      proprietaire: {},
      idproprietaire: 3,

      showAlertSuccess: false,
      showAlertError: false,
      alertMessageSuccess: 'Proprietaire avec succes !!!!!',
      alertMessageError: 'Proprietaire non Modifié  !!!'




    };

  },

  created() {

    try {

      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*',
      };


      axios.get(`http://192.168.252.206:4000/proprietaire/get/${this.idproprietaire}`, { headers }).then((response) => {
        this.proprietaire = response.data.data.proprietaire;
        console.log(this.proprietaire);
      });


    } catch (e) {

      console.log(e);
    }

  },

  methods: {


    updateProprietaire() {




      /* const headers = {
        'Content-Type': 'application/json'
      }; */

      // console.log("Test");

      axios.put(`http://192.168.252.206:4000/proprietaire/updateProprio/${this.idproprietaire}`,

        {
          proprietaire: {


            "nom": this.proprietaire.nom,
            "prenom": this.proprietaire.prenom,
            "telephone": this.proprietaire.telephone,
            "email": this.proprietaire.email,
            "statut": true,

            "genre": this.proprietaire.genre,
            "lieuNaissance": this.proprietaire.lieuNaissance,
            "lieuResidence": this.proprietaire.lieuResidence,



          }
        })

        .then((response) => {
          this.statut = true;
          this.delayedAlertSucces();

          console.log(response);
          this.stoggleModal = false;

        }).catch(e => {
          this.delayedAlertError();
          console.log('erreur', this.result);

          this.errors.push(e)
          this.stoggleModal = false;

        });


    },

    delayedAlertSucces() {
      this.showAlertSuccess = true;
      setTimeout(() => {
        this.showAlertSuccess = false;

      }, 2300);
    },
    delayedAlertError() {
      this.showAlertError = true;
      setTimeout(() => {
        this.showAlertError = false;
      }, 2300);
    }






  },







};



</script>