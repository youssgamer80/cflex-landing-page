<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white dark:bg-gray-800">
    <section class="max-w-screen-xl px-4 lg:px-12 mx-auto" id="figma">
        <div class="mb-5 lg:mb-0">
          <h1
            class="
              mb-4
              text-4xl
              font-bold
              text-white-900
              lg:font-extrabold lg:text-2xl lg:leading-tight
              dark:text-white
              lg:text-center
              2xl:px-30
              lg:mb-8
            "
          >
            Download an app now and the various benefits you will get
            immediately
          </h1>

        </div>

        <div class="">
          <img
            class="p-10 dark:hidden"
            src="assets/User_paging.png"
            alt="Data app"
          />
          <img
            class="w-full h-full hidden dark:block"
            src="assets/User_paging.png"
            alt="Dta app dark"
          />
        </div>
      </section>
   
  </div>
</template>
<script>
export default {
  name: "UserPaging",
};
</script>