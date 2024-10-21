<template>
  <p>
    Cuando llega el verano, todos buscamos nuevas aventuras. <br>
    Organizamos picnics en el parque y disfrutamos del sol. <br>
    Los amigos se reúnen para compartir risas y momentos. <br>
    Observamos las estrellas por la noche, maravillados por su belleza. <br>
  </p>

    <div class="container">
        <div class="button">
      
            <router-link :to="`/`">
            <button>Volver</button>
            </router-link>
        </div>
    </div>

</template>

<script>

export default {
  props: {
    
  }
}

</script>

<style scoped>

p {
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-top: 30vh;
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

.container {
    display: flex;
    justify-content: center;
}


</style>