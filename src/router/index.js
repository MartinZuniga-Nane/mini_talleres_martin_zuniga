import { createRouter, createWebHistory } from "vue-router";
import Mainmenu from "../components/mainmenu.vue";
import Palabra1 from "@/components/palabra1.vue";
import Palabra2 from "@/components/palabra2.vue";
import Palabra3 from "@/components/palabra3.vue";
import Palabra4 from "@/components/palabra4.vue";
import Palabra5 from "@/components/palabra5.vue";



const routes = [
    { path: '/', name: 'main', component: Mainmenu },
    { path: '/Palabra1', name: 'Palabra1', component: Palabra1},
    { path: '/Palabra2', name: 'Palabra2', component: Palabra2},
    { path: '/Palabra3', name: 'Palabra3', component: Palabra3},
    { path: '/Palabra4', name: 'Palabra4', component: Palabra4},
    { path: '/Palabra5', name: 'Palabra5', component: Palabra5},
  
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router