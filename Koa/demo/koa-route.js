const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')
const fs = require('fs')

const home = ctx => {
  ctx.response.type = "html"
  // ctx.response.body = fs.createReadStream('index.html')
  ctx.response.body = `
    <h1>Home</h1>
    <a href="/main">Go back to Main<a>
    <a href="/about">Go back to About<a>
  `
}

const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = `
  <h1>This is main</h1>
  <a href="/">Go back to Home<a>
  <a href="/about">Go back to About<a>
  `
}

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = `
  <h1>This is about</h1>
  <a href="/">Go back to Home<a>
  <a href="/main">Go back to Mian<a>
  `
}

app.use(route.get('/', home))
app.use(route.get('/main', main))
app.use(route.get('/about', about))

app.listen(3000)