


module.exports = {
  key:'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: false,
  httpOnly: false,
  // httpOnly: true,
  signed: false,
  rolling: false,
  renew: false,
  // 禁止第三方cookie  // 这里有些问题 https://www.npmjs.com/package/koa-session 可以使用koa-session2
  // sameSite: true
}