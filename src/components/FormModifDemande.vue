<template>
  
<div>
   
</div>

</template>

<script>

import axios from 'axios';

export default {
  name:'FormDemproprietaire',


  data(){
    return{
        
 demande:{

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
 },
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
    

    mounted(){

   axios.get(`/api/typetransport`)
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


             axios.get(`/api/zones`)
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


      
  methods: {
           editForm(){
            this.loading = true

            /// donnees utiles 
           
            

            axios.put('/demandes/updateDemande/'+ this.demande.id,{
             
             etat: this.etat,
          idPropretaireFk: {
            id:this.idPropretaireFk
          },
          marque: this.marque,
          model: this.model,
          nBplace: this.nbPlace,
          idTypeTransportFk: {
            id:this.idTypeTransportFk
          },
          idZoneFk: {
            id:this.idZoneFk
          },
          statut: this.statut,
          immatriculation: this.immatriculation,

   
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
        
        
      }

   

};

        

   

   

</script>

<style>

</style>