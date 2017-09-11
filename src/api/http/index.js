import Vue from 'vue'
import VueResource from 'vue-resource'
import Interceptors from './interceptors'

/* 注册 VueResource */
Vue.use(VueResource)
/* config */
Vue.http.options.root = window.location.origin.replace('8080', '3000')
// Vue.http.headers.common['sessionId'] = ''
Vue.http.options.emulateJSON = true // If your web server can't handle requests encoded as application/json, you can enable the emulateJSON option. This will send the request as application/x-www-form-urlencoded MIME type, as if from an normal HTML form.
Vue.http.options.emulateHTTP = true // If your web server can't handle REST/HTTP requests like PUT, PATCH and DELETE, you can enable the emulateHTTP option. This will set the X-HTTP-Method-Override header with the actual HTTP method and use a normal POST request.
/* interceptors */
Interceptors.forEach(item => Vue.http.interceptors.push(item))

export default Vue.http
