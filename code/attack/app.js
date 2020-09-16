const koa = require('koa')

const { erLog } = require('../lib/util')

const app = new koa();

const static = require('koa-static')

app.use(static(__dirname + '/views'))

app.use(async (ctx, next) => {
    erLog(`attack...: ${ctx.url}`)
    await next()
})

module.exports = app