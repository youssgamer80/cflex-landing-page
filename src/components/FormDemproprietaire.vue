<template>
  
<div>
    <section>




 
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
       
        <p class="mt-1 text-sm text-gray-600">
          
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="submitForm" action="#" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">immatriculation</label>
                <input type="text" name="immatricule" id="immatriculation" class="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="immatriculation">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">marque</label>
                <input type="text" name="marque" id="marque" class="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="marque">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium text-gray-700">model</label>
                <input type="text" name="model" id="email_address" class="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="model">
              </div>

              <div class="col-span-6">
                <label for="street_address" class="block text-sm font-medium text-gray-700">nombre de place</label>
                <input type="text" name="zone" id="street_address" class="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="nbPlace">
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2"> 
                <label for="state" class="block text-sm font-medium text-gray-700">type de transport</label>
              <select id="country" name="type" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" v-model="idZoneFk">
                  <option value="1">warren</option>
                  <option value="2">Gbaka</option>
                  <option value="3">Compteur</option>

                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="country" class="block text-sm font-medium text-gray-700">zone</label>
                <select id="country" name="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" v-model=" idZoneFk">
                  <option value="1">Abidjan</option>
                  <option value="4">Yamoussoukro</option>
                  <option value="4">Bouake</option>
                </select>
                </div>

            
            </div>

            
  


  <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert" v-if="success">
  <span class="font-medium">Felictation !!</span> Proprietaire Crée avec succes !!!!!
  </div>
                
                

   <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert" v-if="error">
  <span class="font-medium">Echec !!!</span> Proprietaire non cree 
   </div>
              
          </div>
        
        </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 mx-auto w-full items-center">
            <button type="submit" class="inline-flex mx-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              envoyer
            </button>
            
            
          </div>
   </form>
      
    </div>
  





    </section>
</div>

</template>

<script>

import axios from 'axios';

export default {
  name:'FormDemproprietaire',


   data(){
        return{
  etat: true,
  idPropretaire:1,
  marque: "",
  model: "",
  nbPlace: 10,
  idTypeTransport:1,
  idZoneFk: 1,
  statut: false,
  immatriculation: "",
  // statut:false,
  
  


       }


   }, 
    

    methods:{

    //   currentDateTime() {
    //   const current = new Date();
    //   const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //   const dateTime = date +' '+ time;

    //   return dateTime;
    // },

       submitForm(){
            this.loading = true

            /// donnees utiles 
           
            

            axios.post('http://192.168.252.206:4000/api/demandes/addDemande',{
             
             etat:this.etat,
             marque: this.marque,
             model: this.model,
             nBplace: this.nbPlace,
             immatriculation:this.immatriculation,
             date:"",
             idZoneFk:this.idZoneFk,
             statut:this.statut,


        // nom: this.nom,
        // prenom: this.name,
        // telephone: this.telephone,
        // email: this.email,
        // statut: true,
        // permis: this.permis,
        // dateNaissance:this.dateNaissance,
        // genre: this.genre,
        // lieuNaissance: this. lieuNaissance,
        // lieuResidence: this.lieuResidence,
        // pieceIdentite: this.pieceIdentite,
      } )
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
        

        

    },

   }

</script>

<style>

</style>