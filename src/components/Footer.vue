<template>


    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
            <router-link to="/" class="flex items-center mb-4 sm:mb-0">
                <img src="../assets/logo.png" class="mr-3 h-8 logo" alt="C'Flex Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">C'Flex</span>
            </router-link>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">À propos</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Politique de confidentialité</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licence</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">C'Flex™</a>. Tous droits réservés.
        </span>
    </footer>
    

</template>

<style scoped>
    .logo {
        will-change: filter;
    }
    
    .logo:hover {
        filter: drop-shadow(0 0 1.5em #FE5F00);
    }
    </style>