
<template>

  <div>

    <header class="dark:bg-gray-900 bg-slate-200 sm:flex sm:justify-between sm:items-center sm:py-3">
      <div class="flex items-center justify-between px-4 py-3">
        <div>
          <img class="h-8 w-auto sm:h-10" src="../../assets/logo.png" alt="Workflow">
        </div>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button"
            classe="block text-gray-500 focus:outline-none focus:text-gray-600">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
              <path v-if="!isOpen" fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>

            </svg>
          </button>

        </div>
      </div>

      <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-2 sm:flex">
        <router-link to="/"
          class="mt-1 block px-3 py-2 rounded-md text-base font-semibold text-slate-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
          profile</router-link>

        <router-link to=""
          class="mt-1 block px-3 py-2 rounded-md text-base font-semibold text-slate-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
          Projects</router-link>

        <router-link to=""
          class="mt-1 block px-3 py-2 rounded-md text-base font-semibold text-slate-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
          Deconnexion</router-link>




      </div>
    </header>







  </div>

</template>

<script>
export default {
  name: "NavbarComponentboard",
  data() {
    return {
      isOpen: false
    };
  }
};


</script>



<style>
</style>