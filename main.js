import { ref } from 'vue'

const count = ref(0)


import { createApp } from 'vue'
import App from './wonderhoy-app.vue'
const app = createApp(App)

// mounting to anb element with id "app"
app.mount('#app')



