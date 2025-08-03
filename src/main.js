import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/staticfiles/index.js'
import '@/assets/staticfiles/index.css'
import BadgeUI from '@/components/UI/BadgeUI.vue'
import RippleEffect from '@/components/UI/RippleEffect.vue'


const app = createApp(App)

app.component(BadgeUI.name, BadgeUI)
app.component(RippleEffect.name, RippleEffect)

app.mount('#app')
