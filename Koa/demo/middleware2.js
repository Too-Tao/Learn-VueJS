const Koa = require('koa')
const app = new Koa()

const logger = (ctx, next) => {
  console.log(` ${Date.now()} ${ctx.request.method} ${ctx.url} `)
  next()
}

const middleware1 = ctx => {
  console.log(` ${ctx.method} `)
}

app.use(logger)
app.use(middleware1)
app.listen(3000)