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
          <form @submit.prevent="submitForm" enctype="multipart/form-data" class="mt-8 space-y-6" method="POST" action="#">
          
            <div>
                <div class="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nom</label>
            <input type="text" id="nom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="nom" required>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">prenom</label>
            <input type="text" id="prenom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="prenom" required>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="email" required>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">telephone</label>
            <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="+225 0778127138" pattern="^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$" v-model="telephone" required>
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lieu de residence</label>
            <input type="text" id="lieu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="lieuResidence" required>
        </div>
        <div>
  

            <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">genre</label>
           <select id="genre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" v-model="genre" >
          <option value="H">Homme</option>
          <option value="F">Femme</option>
          </select>
        </div>



    </div>
    <div class="mb-6">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lieu de naissance</label>
        <input type="text" id="lieuNaissance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="lieuNaissance" required>
    </div> 
     <div class="mb-6">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">date de naissance</label>
        <input type="date" id="dateN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" v-model="dateNaissance" required>
    </div>
           <!-- test de API -->
           <div class="relative">
       <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  
     </div>
  
       </div>


    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="small_size">permis</label>
        <input class="block mb-5 w-full text-xs text-gray-900 bg-orange-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-orange-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" @change="onFileselect">
        </div>


    <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="small_size">piece identite</label>
    <input class="block mb-5 w-full text-xs text-gray-900 bg-orange-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-orange-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" @change="onFileselected">
  </div>
<div class="relative">
       <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      
     </div>
  
       </div>

    
    <div class="flex items-start mb-6">
        <div class="flex mx-auto items-center h-5">
            <button type="submit"  class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Envoyer</button>
  
        </div>
       
    </div>
               
           <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert" v-if="success">
             <!-- <i class="close icon" @click="close"></i> -->
           <p class="font-medium">Felictation !!</p> Proprietaire Crée avec succes !!!!!
          </div>
                
                

          <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert" v-if="error">
          <span class="font-medium">Echec !!!</span> Proprietaire non cree !!!!
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

          // variable de selection de fichier permi initialise
           selectedFile: null,
         // variable de selection de fichier piece d'identité initialise
           selecteFile : null,

          
            success: false,
            error: false,
            loading: false,


            
            nom: "",
            prenom: "",
            telephone: "",
            email: "",
            statut:true,
            permis: "",
            dateNaissance: "",
            genre: "",
            lieuNaissance: "",
            lieuResidence: "",
            pieceIdentite:"",

  
 
            


        }
    },
    methods:{

      // close: function(){
      //   this.success = false;
      //   this.error = false;
      // },

     onFileselected(event){
       this.selectedFile = event.target.file[0]
    //  let filePiece = this.selectedFile[0].filename
    //    if(filePiece.lastIndexOf('.')<= 0){
    //     return alert("inserer un fichier valide SVP");

    //   }

     },
     onFileselect(even){
       this.selecteFile = even.target.file[0]
      //  let filePermis = this.selecteFile[0].filename
      // if(filePermis.lastIndexOf('.')<= 0){
      //   return alert("inserer un fichier valide SVP");

      // }
     },
        submitForm(){
            this.loading = true

            /// donnees utiles 
            const  permis = new FormData();
           
            permis.append('permis', this.selectedFile)


            const pieceIdentite = new FormData();
            pieceIdentite.append('piece ', this.selecteFile)
            

            axios.post('http://192.168.252.206:4000/proprietaire/save',{
              headers: {
      'Content-type': 'multipart/form-data',
      },
        nom: this.nom,
        prenom: this.prenom,
        telephone: this.telephone,
        email: this.email,
        statut: true,
        permis: this.permis,
        dateNaissance:this.dateNaissance,
        genre: this.genre,
        lieuNaissance: this. lieuNaissance,
        lieuResidence: this.lieuResidence,
        pieceIdentite: this.pieceIdentite,
      } )
                 .then((res) => {
                    this.reset();
                    this.success = true;
                    console.log(res);
                   // this.$router.push('/connexionDemande');

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

//http://192.168.252.92:4000/proprietaire/save

};
</script>