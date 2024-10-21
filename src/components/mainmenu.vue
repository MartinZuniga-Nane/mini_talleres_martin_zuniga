<template>
  <div class="container">
    <div class="boton">
      <buttonComponent pagina="Palabra1"/>
      <buttonComponent pagina="Palabra2"/>
      <buttonComponent pagina="Palabra3"/>
      <buttonComponent pagina="Palabra4"/>
      <buttonComponent pagina="Palabra5"/>
    </div>
    <input type="text" v-model="palabrasecreta" placeholder="Ingrese las palabras (en minuscula)">
    <Buttonverificar @verificar-palabras="VerificarPalabras"/>
    <div v-if="resultado" class="resultado">
      {{ resultado }}
    </div>

  </div>
</template>

<script>
import buttonComponent from './buttonComponent.vue';
import Buttonverificar from './buttonverificar.vue';

export default {
  components: {
    buttonComponent,
    Buttonverificar
  },

  data() {
    return {
      palabrasecreta: '',
      resultado: '',
      palabras: ['goku', 'del', 'colo', 'colo', 'albo']
    }
  },

  methods: {
    VerificarPalabras() {
      const palabrasIngresadas = this.palabrasecreta.trim().split(/\s+/);

      
      if (
        palabrasIngresadas.length === 5 && palabrasIngresadas.every((palabra, index) => palabra === this.palabras[index])
      ) {
        this.resultado = 'Palabras correctas';
      } else {
        this.resultado = 'No son las palabras correctas, intentalo denuevo';
      }
    }
  }
}



</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container input {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
}
.boton {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20vh;
}

.resultado {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}




</style>