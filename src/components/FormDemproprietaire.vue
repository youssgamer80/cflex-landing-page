<template>
  <div>
    <section>
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <p class="mt-1 text-sm text-gray-600"></p>
        </div>
        <div class="
            p-4
            mb-4
            text-sm text-green-700
            bg-green-100
            rounded-lg
            dark:bg-green-200 dark:text-green-800
          " role="alert" v-if="success">
          <span class="font-medium">Felictation !!</span> Demande Proprietaire
          Crée avec succes !!!!!
        </div>

        <div class="
            p-4
            mb-4
            text-sm text-red-700
            bg-red-100
            rounded-lg
            dark:bg-red-200 dark:text-red-800
          " role="alert" v-if="error">
          <span class="font-medium">Echec !!!</span> Demande Proprietaire non
          cree
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="submitForm()">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">immatriculation</label>
                  <input type="text" class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    " v-model="demande.immatriculation" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">marque</label>
                  <input type="text" name="marque" id="marque" class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    " v-model="demande.marque" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium text-gray-700">model</label>
                  <input type="text" name="model" id="email_address" class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    " v-model="demande.model" />
                </div>

                <div class="col-span-6">
                  <label for="street_address" class="block text-sm font-medium text-gray-700">nombre de place</label>
                  <input type="number" name="zone" id="street_address" class="
                      mt-1
                      focus:ring-orange-500 focus:border-orange-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    " v-model.number="demande.nbPlace" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium text-gray-700">type de transport</label>

                  <select id="country" name="type" autocomplete="country" class="
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
                    " v-model="demande.idTypeTransportFk.id">

                    <option v-for="listT in typetransport" :key="listT.id" :value="listT.id">
                      {{ listT.libelleTypeTransport }}
                    </option>
                  </select>

                  <!-- <option value="3">Warren</option>
                  <option value="4">Taxi communal</option> -->

                  <!-- <select v-model="oc_id" multiple class="form-control">
    <option v-for="(oclist , index) in oclists" :key="oclist.id" :value="oclist.id">{{ oclist.name }}</option>
</select>
                

                </select> -->
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">zone</label>
                  <select class="
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
                    " v-model="demande.idZoneFk.id">

                    <option v-for="listz in zones" :key="listz.id" :value="listz.id">
                      {{ listz.libelle }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2"></div>
            </div>
          </div>
          <div class="
              px-4
              py-3
              bg-gray-50
              text-right
              sm:px-6
              mx-auto
              w-full
              items-center
              grid grid-cols-3
            ">
            <router-link to="/pageprofile">
              <button type="submit" class="
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
                ">
                Annuler
              </button>
            </router-link>
            <button type="submit" class="
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
              ">
              envoyer
            </button>
          </div>
        </form>
        <!-- <pre>{{demande}}</pre> -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { DemandeService } from "@/Service/DemandeService";

export default {
  name: "FormDemproprietaire",

  data() {
    return {

      success: false,
      error: false,
      demande: {
        etat: false,
        immatriculation: "",
        idProprietaireFk: {
          id: 3,
        },
        marque: "",
        model: "",
        nbPlace: "",
        idZoneFk: {
          id: "",
        },
        // idZoneFk: null,
        idTypeTransportFk: {
          id: "",
        },
        // idTypeTransportFk: null,



        statut: true,




      },
      // zone: "",
      zones: [],
      typetransport: [],





      // demande:{
      //    etat: this.etat,
      //           idProprietaireFk: {
      //             id:this.idPropretaireFk
      //           },
      //           // date: this.date,
      //           marque: this.marque,
      //           model: this.model,
      //           nbPlace: this.nbPlace,
      //           idTypeTransportFk: {
      //             id:this.idTypeTransportFk
      //           },
      //           idZoneFk: {
      //             id:this.idZoneFk
      //           },
      //           statut: this.statut,
      //           immatriculation: this.immatriculation,
      // }

    };
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

  methods: {

    submitForm: async function () {

      try {

        let demandeReponse = await DemandeService.AjoutDemande(this.demande);
        console.log(demandeReponse);

        if (demandeReponse) {
          this.success = true;
          //  return this.$router.push("/pageprofile");

        } else {



          this.error = true;
          this.success = false;
        }

      } catch (error) {
        console.log(error);
      }



    },

    // created() {
    //                 this.submitForm()



    //             },
    //      getNow() {
    //                     const today = new Date();

    //                     this.date = today;
    //                 },


    //   currentDateTime() {
    //   const current = new Date();
    //   const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //   const dateTime = date +' '+ time;

    //   return dateTime;
    // },


    // submitForm() {
    //   this.loading = true;




    //   /// donnees utiles
    //   console.log({
    //       etat: this.etat,
    //       idProprietaireFk: this.idProprietaireFk,
    //       // date: this.date,
    //       marque: this.marque,
    //       model: this.model,
    //       nbPlace: parseInt(this.nbPlace),
    //       idTypeTransportFk: {
    //         id:this.idTypeTransportFk
    //       },
    //       idZoneFk: {
    //         id:this.idZoneFk
    //       },
    //       statut: this.statut,
    //       immatriculation: "dhfjhhn",
    //     });

    //   axios.post("/api/demandes/addDemande",{
    //         "Content-Type": "application/json"
    //       },{


    //       "etat": this.etat,
    //       "idProprietaireFk":this.idProprietaireFk,
    //       "marque": this.marque,
    //       "model": this.model,
    //       "nbPlace": parseInt(this.nbPlace),
    //       "idTypeTransportFk": {
    //         id: this.idTypeTransportFk
    //         },
    //       "idZoneFk":{id:this.idZoneFk},
    //       "statut": this.statut,
    //       "immatriculation":"dhfjhhn",
    //     }

    //     ).then((res) => {


    //       this.reset();
    //       this.success = true;

    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       this.error = true;
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       //Perform action in always
    //       this.loading = false;
    //     });
    // },
    reset() {
      this.success = false;
      this.error = false;
      for (let field in this.formData) {
        this.formData[field] = null;
      }
    },

    // create() {
    //   this.listTypetransport();
    // },
  },

  mounted() {
    // this.create();
    axios
      .get('/api/typetransport')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.typetransport = response.data.data;
        console.log(this.typetransport);
      })
      .catch((e) => {

        console.log("error", this.errors);

        this.errors.push(e);
      });

    axios
      .get(`/api/zones`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.zones = response.data.data;
        console.log(this.zones);
      })
      .catch((e) => {
        this.statut = false;
        console.log("error", this.errors);

        this.errors.push(e);
      });
  },
};
</script>

<style>
</style>