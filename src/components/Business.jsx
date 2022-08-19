import { features } from "../constants"

const Business = () => (
  <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Une application mobile Flexible </h2>
        <div class="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
         {features.map((feature, index) => (
           <a key={feature.id} href="https://flowbite.com/docs/getting-started/quickstart/" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
           <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{feature.title}</h3>
           <p class="font-normal text-gray-700 dark:text-gray-400">{feature.content}</p>
         </a>
         ))}
         
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg" src="https://img.freepik.com/free-photo/close-up-african-woman-holding-mock-up-green-screen-chroma-key-phone-with-isolated-display-hands-having-online-videocall-conference-meeting-student-working-remote-from-home-watching-video_482257-16394.jpg?w=1060&t=st=1660931991~exp=1660932591~hmac=d631a1a799bf7984268eded7cdb4ce63c23b206672cb36a96a8963957d478444" alt="office content 1" />
        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://img.freepik.com/free-photo/man-using-smartphone-display-showing-white-screen-camera-studio-person-pointing-mockup-template-blank-isolated-background-mobile-phone-adult-with-chroma-key_482257-33382.jpg?w=1060&t=st=1660933455~exp=1660934055~hmac=f456a575aff97c9d2efc123db4ace147c10a408778e13b400d5c3f42386a705b" alt="office content 2" />
      </div>
    </div>

    <section class="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
        <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Une plateforme unique pour la gestion des données </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Les colectivitées ont la possibilité de gerer la mobilité de leurs communes dépuis notres plateforme de gestion</p>
          <a href="#" class="inline-flex items-center text-white bg-cflex-100 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
          En savoir plus
            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>

  </section>



)


export default Business