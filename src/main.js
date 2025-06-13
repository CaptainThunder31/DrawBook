//main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // This imports from router/index.js

const app = createApp(App)

// Use the router
app.use(router)

app.mount('#app')