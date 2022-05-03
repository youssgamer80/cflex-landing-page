<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Revenez plus tard pour plus d'informations.
    </p>
    <h3>C'Flex pour aller plus vite</h3>
   
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>
