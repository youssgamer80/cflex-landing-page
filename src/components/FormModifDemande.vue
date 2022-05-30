<template>
  
<div>
    <section>




 
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
       
        <p class="mt-1 text-sm text-gray-600">
          
          
        </p>
      </div>
      <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert" v-if="success">

  <span class="font-medium">Felictation !!</span> Demande Proprietaire Modifiée avec succes !!!!!
  </div>
                
                

   <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert" v-if="error">
  <span class="font-medium">Echec !!!</span> Demande Proprietaire non modifiée
   </div>
    </div>

     <form @submit.prevent="submitForm">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-700"
                    >immatriculation</label
                  >
                  <input
                    type="text"
                    name="immatricule"
                    id="immatriculation"
                    class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    v-model="demande.immatriculation"
                   />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name"
                    class="block text-sm font-medium text-gray-700"
                    >marque</label
                  >
                  <input
                    type="text"
                    name="marque"
                    id="marque"
                    class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    v-model="demande.marque"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email_address"
                    class="block text-sm font-medium text-gray-700"
                    >model</label
                  >
                  <input
                    type="text"
                    name="model"
                    id="email_address"
                    class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    v-model="demande.model"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="street_address"
                    class="block text-sm font-medium text-gray-700"
                    >nombre de place</label
                  >
                  <input
                    type="text"
                    name="zone"
                    id="street_address"
                    class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    v-model="demande.nbPlace"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="state"
                    class="block text-sm font-medium text-gray-700"
                    >type de transport</label
                  >

                  <select
                    id="country"
                    name="type"
                    autocomplete="country"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-orange-500
                      focus:border-orange-500
                      sm:text-sm
                    "
                    v-model="demande.idTypeTransportFk.libelleTypeTransport"
                  >
                    <option
                      v-for="listT in typetransport"
                      :key="listT.id"
                      :value="listT.id"
                    >
                      {{ listT.libelleTypeTransport }}
                    </option>
                  </select>

                 
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label class="block text-sm font-medium text-gray-700"
                    >zone</label
                  >
                  <select
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-orange-500
                      focus:border-orange-500
                      sm:text-sm
                    "
                    v-model="idZoneFk"
                  >
                    <option
                      v-for="listz in zones"
                      :key="listz.id"
                      :value="listz.id"
                    >
                      {{ listz.libelle }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2"></div>
            </div>
          </div>
          <div
            class="
              px-4
              py-3
              bg-gray-50
              text-right
              sm:px-6
              mx-auto
              w-full
              items-center
              grid grid-cols-3
            "
          >
            <router-link to="/pageprofile">
              <button
                type="submit"
                class="
                  inline-flex
                  mx-auto
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-red-600
                  hover:bg-red-700
                  focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                "
              >
                Annuler
              </button>
            </router-link>
            <button
              type="submit"
              class="
                inline-flex
                mx-auto
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-orange-600
                hover:bg-orange-700
                focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              "
            >
            Modifier
            </button>
          </div>
        </form>

  
    





    </section>
</div>

</template>

<script>

import axios from 'axios';

export default {
  name:'FormDemproprietaire',


  data(){
    return{
        


      immatriculation:'',
      idPropretaire:"1",
      marque:'',
      model:'',
      nbPlace:'',
      idZoneFk:'',
      idTypeTransportFk:'',
      success:false,
      error:false,
      zone:'',
      type:'',
      zoneFk:'',
      typeFk:'',
      etat: true,
     
    }


  //  data(){
  //       return{

  // etat: true,
  // idPropretaire:"1",
  // marque: "",
  // model: "",
  // nbPlace: "",
  // idTypeTransport:"",
  // idZoneFk:"",
  // statut: false,
  // immatriculation:"",
  // error: false,
  // success: false,
  

  //      }


   }, 
    

    methods:{

   listTypetransport(){


     axios.get(`/typetransport`)
            .then((response)=> {
       // JSON responses are automatically parsed.
                this.type = response.data.data
                console.log(this.type)
                this.statut=true;
            })
            .catch(e => {
              this.statut = false;
              console.log('error', this.errors);

              this.errors.push(e);
                
            });
            },


        listZone(){


     axios.get(`/zones`)
            .then((response)=> {
       // JSON responses are automatically parsed.
                this.zones = response.data.data
                console.log(this.zones)
                this.statut=true;
            })
            .catch(e => {
              this.statut = false;
              console.log('error', this.errors);

              this.errors.push(e);
                
            });
            },


      

    //   currentDateTime() {
    //   const current = new Date();
    //   const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //   const dateTime = date +' '+ time;

    //   return dateTime;
    // },

       editForm(){
            this.loading = true

            /// donnees utiles 
           
            

            axios.put('/demandes/updateDemande/'+ this.demande.id,{
             
             etat:this.etat,
             marque: this.marque,
             model: this.model,
             nBplace: this.nbPlace,
             immatriculation:this.immatriculation,
             
             idZoneFk:this.idZoneFk,
             statut:this.statut,


   
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