const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const VueServerRender = require('vue-server-renderer')
const serverRender = require('./server-render-no-bundle')
const clientManifest = require('../../public/vue-ssr-client-manifest.json')
const bundle = require('../../server-build/server-entry.js').default
// const serverBundle = require('../../server-build/vue-ssr-server-bundle.json')
// const renderer = VueServerRender.createBundleRenderer(
//   path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
//   {
//     inject: false,
//     clientManifest
//   }
// )
const renderer = VueServerRender.createRenderer(
  // path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
  {
    inject: false,
    clientManifest
  }
)
const template = fs.readFileSync(
  path.join(__dirname, '../server.template.ejs'),
  'utf-8'
)
const pageRouter = new Router()

pageRouter.get('*', async (ctx) => {
  await serverRender(ctx, renderer, template, bundle)
})

module.exports = pageRouter
