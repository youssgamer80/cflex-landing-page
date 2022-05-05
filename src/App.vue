<template>
  <div id="app">
    <header
    class="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
    <nav class="flex justify-between items-center px-3 mx-auto w-full max-w-8xl lg:px-4">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex">
      <img src="./assets/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        </router-link>
        <div class="flex md:order-2">
          <button id="theme-toggle" type="button"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
          <router-link to="/about-app" class="text-white bg-orange-700 hover:bg-orange-500
                    focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center ml-3" data-modal-toggle="popup-modal">
            <span class="hidden lg:inline">À propos de l'appli</span>
            <span class="lg:hidden">Appli</span>
          </router-link>
          <button data-collapse-toggle="mobile-menu-4" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                class="block py-2 pr-4 pl-3 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 dark:text-white"
                aria-current="page">Acceuil</router-link>
            </li>
            <li>
              <router-link to="/features"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Fonctionnalités</router-link>
            </li>
             <li>
              <router-link to="/about"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">A
                propos</router-link>
          
            <li>
              <button type="button" data-modal-toggle="walletModal"
                class="
                md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:dark:hover:text-white 
                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
               Contacter nous
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

    <!-- <nav>
      <router-link to="/"><img src="./assets/logo.png" alt=""> Home</router-link>
       <router-link to="/features">Fonctionnalités</router-link>
      <router-link to="/about">À propos</router-link>
      <router-link to="/about-app">À propos de l'appli</router-link>
    </nav> -->
    <router-view />
  </div>
</template>
./components/HomePage.vue

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: inline;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav img {
  width: 100px;
  height: auto;
} */

nav a.router-link-exact-active {
  color: #fb5a00;
}
</style>
