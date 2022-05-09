<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="mt-20">
    <section
      class="lg:pt-0 pb-3 lg:pb-20 bg-white dark:bg-gray-900"
      id="figma"
    >
      <div class="max-w-screen-xl px-4 lg:px-12 mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center"
        >
          <div>
            <img
              class="w-full h-30 dark:hidden"
              src="assets/sect3_top.svg"
              alt="Data app"
            />
            <img
              class="w-full hidden dark:block"
              src="assets/sect3_top.svg"
              alt="Data app dark"
            />
          </div>
          <div class="mb-2 lg:mb-0">
            <h1
              class="
                mb-4
                text-2xl
                font-bold
                text-gray-900
                lg:font-extrabold lg:text-2xl lg:leading-tight
                dark:text-white
                text-center
                2xl:px-30
                lg:mb-8 lg:text-4xl
              "
            >
              Bénéficiez d’un interface agréable avec des fonctionnalités
              dévélopper pour votre mobilé
              <span class="text-orange-500">Flex</span>ibilité
            </h1>
            <!-- <h1
                class="font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug text-gray-900 dark:text-white mb-4">
Déplacer vous  avec Flexibilité </h1> -->
            <p
              class="
                text-gray-500
                dark:text-gray-400
                font-normal
                text-lg
                lg:text-xl
                mb-6
                lg:mb-8
              "
            >
              The best feature makes you better, with the latest technology to
              meet your needs. Of course, with such features as organizing
              schedules and leading assignments, it will make you easier, So get
              the application now !
            </p>
            <div class="items-center lg:flex"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-1 lg:pt-0 pb-36 lg:pb-2 bg-white dark:bg-gray-900"
      id="figma"
    >
      <div class="max-w-screen-xl px-4 lg:px-12 mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center"
        >
          <div class="mb-5 lg:mb-0">
            <h1
              class="
                mb-4
                text-2xl
                font-bold
                text-gray-900
                lg:font-extrabold lg:text-2xl lg:leading-tight
                dark:text-white
                text-center
                2xl:px-30
                lg:mb-8 lg:text-4xl
              "
            >
              Recevez les notification de YooBi les plus prioritaire
            </h1>

            <p
              class="
                text-gray-500
                dark:text-gray-400
                font-normal
                text-lg
                lg:text-xl
                mb-6
                lg:mb-8
              "
            >
              The best feature makes you better, with the latest technology to
              meet your needs. Of course, with such features as organizing
              schedules and leading assignments, it will make you easier, So get
              the application now !
            </p>
          </div>
          <div class="">
            <img
              class="w-full h-30 dark:hidden"
              src="assets/sect3_bottom.svg"
              alt="Data app"
            />
            <img
              class="w-full hidden dark:block"
              src="assets/sect3_bottom.svg"
              alt="Data app dark"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "AdvantageSection",
};
</script>
