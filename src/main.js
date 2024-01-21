import { createApp } from 'vue'
import { VueResponsiveness, Presets } from "vue-responsiveness"
import './style.css'
import App from './App.vue'

createApp(App).use(VueResponsiveness, Presets.Bootstrap_5).mount('#app')