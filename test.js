const axios = require('axios')
const a = axios.get(
  'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
)
a.then(data => {
  console.log(data)
})
