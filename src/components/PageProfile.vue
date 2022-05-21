<template>
  <div class="PageProfile">
    <!-- test de navigation -->

   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    id demande
                </th>
                <th scope="col" class="px-6 py-3">
                    code demande
                </th>
                <th scope="col" class="px-6 py-3">
                    immatriculation vehicule
                </th>
                <th scope="col" class="px-6 py-3">
                    marque
                </th>
                <th scope="col" class="px-6 py-3">
                    model
                </th>
                <th scope="col" class="px-6 py-3">
                  nombre de place
                </th>
                 <th scope="col" class="px-6 py-3">
                  type de transport
                </th>
                <th scope="col" class="px-6 py-3">
                   zone de transport
                </th>
                 <th scope="col" class="px-6 py-3">
                  Statut
                </th>
                <th colspan="2" scope="col" class="px-6 py-3">
                 Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="demande in demandes" :key="demande" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    {{demande.id}}
                </td>
                <td class="px-6 py-4">
                    {{ demande.codeDemande}}
                </td>
                <td class="px-6 py-4">
                   {{demande.immatriculation}}
                </td>
                <td class="px-6 py-4">
                  {{demande.marque}}
                </td>
                <td class="px-6 py-4">
                   {{demande.model}}
                </td>
                <td class="px-6 py-4">
                   {{demande.nombreDePlace}}
                </td>
                <td class="px-6 py-4">
                    {{demande.libelleTypeTransport}}
                </td>
                <td class="px-6 py-4">
                   {{demande.zoneparent}}
                </td>
                <td class="px-6 py-4">
                  <span v-if="demande.statut">accepter</span>
             <span v-else>en attente</span>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">modifier</a>
                    <a href="#" class="font-medium text-orange-600 dark:text-orange-500 hover:underline">Supprimer</a>
                </td>
            </tr>
          
          
        </tbody>
    </table>
</div>


    <!-- table de demande -->

  </div>
</template>





<script>
// import Vue from 'vue';




// new Vue({

//  name:"PageProfile",
//   el: '#app',
//   data () {
//     return {
//      demandes: [],
//     }
//   },
//   mounted () {
//     axios
//       .get('http://192.168.252.188:8080/api/demandes')
//       .then(response => (this.demandes = response.data.data))
//   } http://192.168.252.188:8080/api/demandes
// })
import axios from 'axios';
 
export default {
 

  name: "PageProfile",
 
  data(){
        return{
             statut: false,
             demandes:[],
             errors: [],
        }
    },
    

 created(){
        axios.get(`http://192.168.252.188:8080/api/demandes`)
            .then((response)=> {
       // JSON responses are automatically parsed.
                this.demandes = response.data
                console.log(this.demandes)
                this.statut=true;
            })
            .catch(e => {
              this.statut = false;
              console.log('error', this.errors);

              this.errors.push(e)
                
            });
    }, 



    }
 
// };
// http://192.168.252.92:4000/api/demandes
// http://192.168.252.188:8080/api/swagger-ui/index.html#/
</script>