const Koa = require('koa');
const app = new Koa()

const session = require('koa-session');

const bodyParser = require('koa-bodyparser');

const views = require('koa-views')

const config = require('./config')

// 路由
const Index = require('./router')

// 设置cookie 的密钥
app.keys = ['im a newer secret', 'i like turtle'];

app.use(bodyParser())

app.use(session(config, app))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

app.use(async (ctx, next) => {
  await next()
  // ctx.set('X-XSS-Protection', 0)

  
  // ctx.set('Content-Security-Policy', "default-src 'self'")

  // 点击劫持演示
  // ctx.set('X-FRAME-OPTIONS', 'DENY')


  // csrf origin refer
  // const referer = ctx.request.header.referer
  // const origin = ctx.request.header.origin
  // console.log('Referer:', referer , origin)
  // if(referer !== '自己的地址')


  // const referer = ctx.request.header.referer
  // console.log('Referer:', referer)
})

app.use(Index.routes(),Index.allowedMethods())

module.exports = app