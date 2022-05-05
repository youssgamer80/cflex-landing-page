<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white dark:bg-gray-800">
    <section class="max-w-screen-xl px-4 lg:px-12 mx-auto" id="figma">
        <div class="mb-5 lg:mb-0 text-center">
          <h1
           id="Pag_dow"
          >
            Download an app now and the various benefits you will get
            immediately
          </h1>

        </div>

        <div  id="img"  style="">
          <!-- <img
            class="p-10 dark:hidden"
            src="assets/User_paging.png"
            alt="Data app"
          />
          <img
            class="w-full h-full hidden dark:block"
            src="assets/User_paging.png"
            alt="Dta app dark"
          /> -->

           <button
                  type="button"
                 
                >
                 Download App
                </button>
        </div>
      </section>
   
  </div>
</template>
<script>
export default {
  name: "UserPaging",
};
</script>


<style scoped>

  #Pag_dow{
    position: relative;
    top: 250px;
    left: 250px;
    font-size: 36px;
    width: 750px;
    height: 130px;
    color: white;
  }

  #img{
    width: 1240px;
    height: 500px;
    background-image: url('../../public/assets/User_paging.png')
  }

  button{
    position: relative;
    top: 290px;
    left: 250px;
    color:#FB5A00;
    background-color: #F7F7F7;
    width: 250px;
    height: 75px;
    border-radius: 1500px;
  }
  /* @media screen and (min-width: 425px) {
  #img{
    width: 350px;
    height: 469px;
  }
} */
</style>