<template>
  <div class="
      mx-auto
      md:h-screen
      flex flex-col
      justify-center
      items-center
      px-6
      pt-8 pt:mt-0
    ">
    <!-- content will go here -->
    <div class="
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
      ">
      <div class="hidden lg:flex w-2/3">
        <img class="rounded-l-lg bg-slate-100" src="../assets/logo.png" alt="login image" />
      </div>
      <div class="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-8">
        <div class="ConnexionDemande">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 flex justify-center ">
            Allez sur votre profile
          </h2>
          <form class="mt-8 space-y-6" action="#">


            <!-- test de connexion au profile   @submit.prevent="connexionDmd" -->
           


            <!-- fin teste -->
            <div>
              <label for="numero" class="text-sm font-medium text-gray-900 block mb-2"></label>
              <input type="text" id="text" v-model="form.numero" class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-orange-500 focus:border-orange-500
                  block
                  w-full
                  p-2.5
                " placeholder="numero" required />
            </div>
            <div>
              <label for="" class="text-sm font-medium text-gray-900 block mb-2"></label>
              <input type="password"  placeholder="mot de passe" v-model="form.password" class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-orange-500 focus:border-orange-500
                  block
                  w-full
                  p-2.5
                " required />
            </div>
            <div class="">
              <div class="flex justify-center w-full mx-auto py-2.5  space-x-5">

                <router-link to="/">
                  <button type="submit" class="
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
                      xl:w-auto
                      text-center  
                      space-x-5                 
                    ">
                    retour
                  </button>
                </router-link>

                <!-- <router-link to="/pageprofile"> -->
                  <button type="submit" @click="connexionDmd()"  class="
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
                      space-x-5 
                      
                    ">
                    Allez
                  </button>
                <!-- </router-link> -->
              </div>

              <div class="text-sm ml-3 items-center grid grid-flow-col">
                <div class="
                    ml-3
                    text-sm
                    font-medium
                    text-orange-700
                    dark:text-orange-800
                  ">
                  <!-- <router-link
                    to="/numcomponent"
                    class="
                      ml-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-gray-300
                    "
                     >
                    <div class="text-sm font-medium text-gray-500"></div>
                    Si tu veux t enregistrer pour la 1 ere fois
                    <a
                      href="#"
                      class="
                        text-orange-600
                        hover:underline
                        dark:text-orange-500
                      "
                      >cliquez ici</a
                    >
                    
                    </router-link
                  > -->
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
 
  // import { mapState, mapActions } from 'vuex'
export default {
  name: "connexionDemande",

  data() {
    return {
     
      error: false,
      success: false,
    

      // submitted: false username ( password )
    form:{
      numero:"",
      password:""
    }
      
  
      


      
      

    }
  },

computed: {
 
        // ...mapState('account', ['status'])
    },

  
  methods: {

      //  ...mapActions('account', ['login', 'logout']),
      //  handleSubmit () {
            
      
      //       this.submitted = true;
      //       const { username, password } = this;
      //       if ( username &&  password) {
      //           this.login({ username, password })
      //       }
      //   },


       

    async connexionDmd(){


      // if(this.form.numero === "" && this.form.numero === ""){



      // }else{

      // }


  

  console.log(this.form.numero);
  console.log(this.form.password);
      

      let response = axios.post("http://192.168.252.206:4001/api/auth/signin",
      {
        username: this.form.numero,
        password: this.form.password
      }


      

      ).then((res) => {

        let token = res.data.accessToken;

         console.log(token)
     
          
         
           console.log(res);


           this.$toast.success("authentifier avec success");
           this.$router.push('/pageprofile');


        })
        .catch((error) => {

          this.$toast.error("erreur de connexion");
          console.log(error)
        }).finally(() => {
          //Perform action in always
          // this.loading = false
        });
      console.log(response.data.data);
    },
    // created () {
        // reset login status
    //     this.logout();
    // },


 

   
   
  

    

    // async connexionDm(){

    //   const response = await axios.post('/demande', {
    //     numero: this.numero,
    //    password: this.name,
    //   })
    //   console.log(response);

    // }


    // async connexionDm(){
    //   try {
    //     const response = await axios.post('/demandes', {
    //       numero: this.numero,
    //       password: this.password,
    //     })
    //     console.log(response);
    //     this.success = true;
    //     this.Msgerreur = response.data.message;
    //     this.errorMsg = response.data.error;
    //     console.log(this.Msgerreur);
    //     console.log(this.errorMsg);

    //   } catch (error) {
    //     this.error = error;
    //     this.Msgerreur = error.response.data.message;
    //     this.errorMsg = error.response.data.error;
    //     console.log(this.Msgerreur);
    //     console.log(this.errorMsg);
    //   }
    // },



  


    // async connexionDmd() {

    //   //if(this.numero )

    //     const auth = { username: this.username, password: this.password };
    //     // Correct username is 'foo' and password is 'bar'
    //     const url = '';
    //     this.success = false;
    //     this.error = null;

    //     try {
    //       const res = await axios.get(url, { auth }).then(res => res.data);
    //        console.log(res)
    //       this.success = true;
    //     } catch (err) {
    //       this.error = err.message;
    //     }


    // }




    //  async connexionDmd(){



    //       const reponse = await axios.post('login',{
    //       numero: this.numero,
    //       name:this.name,

    //       })

    //    }

  }
};
</script>