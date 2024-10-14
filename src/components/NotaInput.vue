<template>
  <div>
    <h1>Nota 1:</h1>
    <input type="text" v-model.number="nota1"/>
    
    <h1>Nota 2:</h1>
    <input type="text" v-model.number="nota2"/>
    
    <h1>Nota 3:</h1>
    <input type="text" v-model.number="nota3"/>
    
    <h1>Nota 4:</h1>
    <input type="text" v-model.number="nota4"/>
    
    <h1>Nota 5:</h1>
    <input type="text" v-model.number="nota5">
    
    <h1>Nota 6:</h1>
    <input type="text" v-model.number="nota6"/>
    
    <span>El promedio es {{ promedio }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const nota1 = ref(0)
const nota2 = ref(0)
const nota3 = ref(0)
const nota4 = ref(0)
const nota5 = ref(0)
const nota6 = ref(0)

const promedio = computed(() => {
  const notas = [nota1.value, nota2.value, nota3.value, nota4.value, nota5.value, nota6.value].map(nota => parseFloat(nota) || 0)
  const ponderaciones = [0.20, 0.20, 0.20, 0.20, 0.10, 0.10]
  const promedioPonderado = notas.reduce((acc, nota, index) => acc + nota * ponderaciones[index], 0)
  return promedioPonderado.toFixed(2)
})

</script>

<style scoped>
</style>
