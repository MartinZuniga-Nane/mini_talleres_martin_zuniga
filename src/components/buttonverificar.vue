<template>
  <div class="container">
    <div class="button">
        <button @click="$emit('verificar-palabras')">Verificar</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    pagina: String
  }
}

</script>

<style scoped>

.container {
}

.button {
  
}

.button button {

  border: none;
  color: rgb(0, 0, 0);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  background-color: #ffffff;
}

.button button:hover {
  background-color: #d6d6d6;
  color: rgb(0, 0, 0);
  border: 2px solid #000000;
}


</style>