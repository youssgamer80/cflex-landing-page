<template>
    <div class="flex flex-col mr-5">
        <div class="mb-6 rounded-full bg-slate-50 w-20 p-4 text-center">
           <font-awesome-icon  class="text-orange-500 text-5xl" :icon="iconvalue"/>
           
        </div>
        <div>
            <h2 class="font-extrabold text-black text-2xl dark:text-white mb-6" >{{ title }}</h2>
            <h3 class="text-black  dark:text-white">{{ subtitle }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardItem',
        props:['title','subtitle','iconvalue']
    }
</script>


