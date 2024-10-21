<template>
  <div class="container">
    <div class="button">
      
      <router-link :to="`/${pagina}`">
        <button>{{pagina}}</button>
      </router-link>
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
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  background-color: #45a049;
}

.button button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: 2px solid #45a049;
}


</style>