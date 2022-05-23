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
            Allez sur votre profil
          </h2>
          <form @submit.prevent="connexionDmd" class="mt-8 space-y-6" action="#">


            <!-- test de connexion au profile -->
              <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert" v-if="success">
           <span class="font-medium">Felictation !!</span> Proprietaire Crée avec succes !!!!!
          </div>
                
                

          <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert" v-if="error">
          <span class="font-medium">Echec !!!</span> Proprietaire non cree !!!!
          </div>
           <!-- fin teste -->
            <div>
              <label
                for="numero"
                class="text-sm font-medium text-gray-900 block mb-2"
                ></label>
                <input
                type="text"
                name="text"
                id="text"
                v-model="numero"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-orange-500 focus:border-orange-500
                  block
                  w-full
                  p-2.5
                "
                placeholder="numero"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="text-sm font-medium text-gray-900 block mb-2"
              ></label>
              <input
                type="text"
                v-model="nom"
                id="mdp"
                placeholder="mot de passe"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-orange-500 focus:border-orange-500
                  block
                  w-full
                  p-2.5
                "
                required
              />
            </div>
            <div class="flex items-start">
              <div class="text-sm ml-3 items-center">
                <router-link to="/pageprofile">
                  <button
                    type="submit"
                    class="
                      text-white
                      bg-orange-700
                      hover:bg-orange-800
                      focus:ring-4 focus:ring-orange-300
                      font-medium
                      rounded-lg
                      text-base
                      px-5
                      py-3
                      w-full
                      sm:w-auto
                      text-center
                    "
                  >
                    Allez
                  </button>
                </router-link>
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
                  <router-link
                    to="/numcomponent"
                    class="
                      ml-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                  >
                    <!-- <div class="text-sm font-medium text-gray-500"></div>
                    Si tu veux t enregistrer pour la 1 ere fois
                    <a
                      href="#"
                      class="
                        text-orange-600
                        hover:underline
                        dark:text-orange-500
                      "
                      >cliquez ici</a
                    > -->
                    
                    </router-link
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
import axios from 'axios'
export default {
  name: "connexionDemande",

  data() {
    return {
      numero:"",
      name:"",
      error: null,
      success: false
      
    }
  },
  methods:{

    async connexionDmd() {
        const auth = { username: this.username, password: this.password };
        // Correct username is 'foo' and password is 'bar'
        const url = '';
        this.success = false;
        this.error = null;

        try {
          const res = await axios.get(url, { auth }).then(res => res.data);
           console.log(res)
          this.success = true;
        } catch (err) {
          this.error = err.message;
        }
     
    
    }
     
  //  async connexionDmd(){
        

        
  //       const reponse = await axios.post('login',{
  //       numero: this.numero,
  //       name:this.name,

  //       })

  //    }

  }
};
</script>