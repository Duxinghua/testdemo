const Router = require('koa-router')
const send = require('koa-send')

const staticRouter = new Router({prefix: '/public'})

staticRouter.get('/*', async ctx => {
  console.log(ctx.url, 'url')
  await send(ctx, ctx.path)
})

module.exports = staticRouter
