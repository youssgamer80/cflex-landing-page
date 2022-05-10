<template>



<div class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
    <!-- content will go here -->
<div class="bg-white shadow rounded-lg lg:flex items-center justify-center md:mt-0 w-full lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0">
	<div class="hidden lg:flex w-2/3">
		<img class="rounded-l-lg bg-slate-100" src="../assets/logo.png" alt="login image">
	</div>
	<div class="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-8">
	

	
<div class="ConnexionDemande">
<h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
   aller sur le profile
</h2>
<form class="mt-8 space-y-6" action="#">
   <div>
      <label for="email" class="text-sm font-medium text-gray-900 block mb-2"></label>
      <input type="text" name="text" id="text"
         class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         placeholder="" required>
   </div>
   <div>
      <label for="password" class="text-sm font-medium text-gray-900 block mb-2"></label>
      <input type="text" name="motdepasse" id="date" placeholder="mot de passe"
         class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         required>
   </div>
   <div class="flex items-start">
      
      <div class="text-sm ml-3 items-center">
           <router-link to="/aproposstructure"
                  
                >
           <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">Allez</button>
           </router-link>
      </div>
<div class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
     <router-link to="/">
    Si tu veux t enregistrer pour la 1 ere fois</router-link>
  </div>
   </div>

</form>
</div>





</div>
</div>

    
</div>

</template>

<script>

export default {
  name: "connexionDemande",
};
</script>