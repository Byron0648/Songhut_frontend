import Vue from 'vue'
import App from './App'


import uLink from '@/components/uLink.vue'
import store from './store'

Vue.config.productionTip = false

Vue.component('uLink', uLink)

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
