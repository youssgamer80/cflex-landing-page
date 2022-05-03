<template>
    <div class="flex flex-col mr-5">
        <div >
           <font-awesome-icon  class="text-orange-600 text-lg" :icon="iconvalue"/>
           
        </div>
        <div>
            <h2 class="font-bold text-black  dark:text-white" >{{ title }}</h2>
            <h3 class="text-black  dark:text-white">{{subtitle }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardItem',
        props:['title','subtitle','iconvalue']
    }
</script>


<style scoped>
    /* #card{
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin: 20px;
        text-align: center;
    } */

     /* .icon{
        color: #FB5A00;
        font-size: 30px;
        text-align: center;
        position: relative;
        top: 20px;
    }

    #card_icon{
        width: 80px;
        height: 80px;
        background: #EEF4FF;
        border-radius: 50%
    }

   
    h2{
     
        font-size: 24px;
    }

    h3{
        width: auto;
        font-size: 18px;
        color: #747474;
    } */
</style>