<template>
  <div
    class="
      mx-auto
      md:h-screen
      flex flex-col
      justify-center
      items-center
      px-6
      pt-8 pt:mt-0
    "
    >
    <!-- content will go here -->
    <div
      class="
        bg-white
        shadow
        rounded-lg
        lg:flex
        items-center
        justify-center
        md:mt-0
        w-full
        lg:max-w-screen-lg
        2xl:max:max-w-screen-lg
        xl:p-0
      "
     >
      <div class="hidden lg:flex w-2/3">
        <img
          class="rounded-l-lg bg-slate-100"
          src="../assets/logo.png"
          alt="login image"
        />
        </div>
      <div class="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-8">
        
        <div class="ConnexionDemande">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
           enregistrement  proprietaire
          </h2>
          <form v-on:submit.prevent="submitForm" class="mt-8 space-y-6" method="POST" action="#">
            <div>
                <div class="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nom</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="form.first_name" required>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">prenom</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="form.last_name" required>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="form.email" required>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">telephone</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="+225 0778127138" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model="form.phone" required>
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lieu de residence</label>
            <input type="text" id="lieu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="form.lieu" required>
        </div>
        <div>
            <!-- <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">genre</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="form.number" required> -->

            <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">genre</label>
           <select id="genre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.genre" >
          <option value="H">Homme</option>
          <option value="F">Femme</option>
          </select>
        </div>



    </div>
    <div class="mb-6">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lieu de naissance</label>
        <input type="text" id="lieuNaissance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="john.doe@company.com" v-model="form.lieuNaissance" required>
    </div> 
     <div class="mb-6">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">date de naissance</label>
        <input type="date" id="dateN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="john.doe@company.com" v-model="form.dateN" required>
    </div>
           <!-- test de API -->
           <div class="relative">
       <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
       <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
     </div>
  <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
       </div>


    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="small_size">permis</label>
        <input class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-orange-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" >
        </div>


    <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="small_size">piece identite</label>
    <input class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-orange-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file">
  </div>


    
    <div class="flex items-start mb-6">
        <div class="flex mx-auto items-center h-5">
            <button type="submit" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Envoyer</button>
  
        <!-- <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800" required> -->
        </div>
       
    </div>
               
           

              <div class="text-sm ml-3 items-center grid grid-flow-col">
                <div
                  class="
                    ml-3
                    text-sm
                    font-medium
                    text-orange-700
                    dark:text-orange-800
                  "
                >
                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "FormProprietaire",

   data(){
        return{
            success: false,
            error: false,
            loading: false,

            form: {

                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                lieu: '',
                genre:'',
                lieuNaissance: '5',
                dateN: '',
                Statut: false
            }


        }
    },
    methods:{
        submitForm(){
            this.loading = true
            axios.post('', this.form)
                 .then((res) => {
                    this.reset();
                    this.success = true;
                    console.log(res);

                 })
                 .catch((error) => {
                     
                       this.error = true;
                        console.log(error)
                 }).finally(() => {
                     //Perform action in always
                     this.loading =  false
                 });
        },
        reset(){
                this.success = false;
                this.error = false;
                for(let field in this.formData){
                    this.formData[field] = null;
                }
        }
    }


};
</script>