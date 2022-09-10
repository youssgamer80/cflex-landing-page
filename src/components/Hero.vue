<template>
    <section class="bg-white dark:bg-gray-900">

        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Soyez <span class="text-primary-900">Flex</span>ible dans vos déplacements et économisez du temps.
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Si
                    vous êtes propriétaire d'un véhicule de transport communautaire ou intracommunautaire,
                    enregistrez-vous en entrant votre email.
                </p>
                <form action="#">
                    <div class="items-center mr-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div class="relative w-full">
                            <label for="email"
                                class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresse
                                e-mail</label>
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                    </path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input
                                class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Saisissez votre e-mail" type="email" id="email">
                        </div>
                        <div>
                            <button type="submit"
                                class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 logo">Souscrire</button>
                        </div>
                    </div>
                    <div
                        class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                        Nous nous soucions de la protection de vos données. <a href="#"
                            class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Lisez notre
                            politique de confidentialité</a>.</div>
                </form>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
            </div>
        </div>

        <div
            class="p-4 max-w-screen-lg px-4 py-8 mx-auto text-center bg-gray-600 rounded-lg border shadow-md sm:p-8 dark:bg-gray-600 dark:border-gray-700">
            <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <label for="input-group-1"
                    class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <div class="relative mb-6">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="input-group-1"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Entrez votre destination">
                </div>


                <div class="mx-auto flex items-center">
                    <div class="relative">

                        <input name="start" type="time"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                            placeholder="Select time start">
                    </div>
                    <span class="mx-2 text-gray-200">à</span>
                    <div class="relative">

                        <input name="end" type="time"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                            placeholder="Select time end">
                    </div>
                </div>
                <label for="nbp" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre
                    de
                    personne</label>
                <div class="relative mb-6">
                    <select id="nbp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected >1</option>
                        <option value="US">2</option>
                        <option value="CA">3</option>
                        <option value="FR">4</option>
                        <option value="DE">5</option>
                      </select>
                </div>


                <button type="button"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-primary-700 dark:focus:ring-primary-900 mr-2 mb-2 logo">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    Rechercher
                </button>

            </div>
        </div>
        <div class="pt-7 inline-flex justify-center items-center w-full">
            <hr class="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700">
            <span
                class="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900"><a
                    href="#" class="text-primary-900 dark:text-primary-500 hover:underline">C'Flex</a> vous
                offres</span>
        </div>
        <div class="px-4 mx-auto md:max-w-screen-md lg:max-w-screen-lg lg:px-1">
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                <div>
                    <div class="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-8 lg:w-8 dark:bg-primary-900">
                            <svg class="w-2 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-50" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Mobilité</h3>

                    </div>
                    <p class="text-gray-500 dark:text-gray-400">Le transport moins cher, plus rapide et structuré est
                        notre priorité.</p>
                </div>
                <div>
                    <div class="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-8 lg:w-8 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-50" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Organiser</h3>

                    </div>
                    <p class="text-gray-500 dark:text-gray-400">Des arrêts organisés et structurés ainsi que des
                        véhicules réguliers.</p>
                </div>
                <div>
                    <div class="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-8 lg:w-8 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-50" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                                <path
                                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Connecter</h3>

                    </div>
                    <p class="text-gray-500 dark:text-gray-400">Points d'arrêts équipés de gestionnaire de fils
                        d'attente Connecter</p>
                </div>
                <div>
                    <div class="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-8 lg:w-8 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-50" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Récommandation</h3>
                    </div>
                    <p class="text-gray-500 dark:text-gray-400">Application mobile qui recommande les meilleurs
                        itinéraires et davantage.</p>
                </div>
            </div>
        </div>
    </section>
    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">

</template>
<style scoped>
.logo {
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 1.5em #FE5F00);
}
</style>