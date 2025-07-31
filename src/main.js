import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/staticfiles/index.js'
import '@/assets/staticfiles/index.css'
import BadgeUI from '@/components/UI/BadgeUI.vue'


const app = createApp(App)

app.component(BadgeUI.name, BadgeUI)

app.mount('#app')
