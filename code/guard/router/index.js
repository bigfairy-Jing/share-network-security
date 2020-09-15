const router = reuqire('koa-router')()
const sqlQuery = new Promise()


router.get('/', async (ctx) => {
  // 请求sql
  const res = await sqlQuery()

  await ctx.render('index', {
    from: ctx.query.from,
    username: ctx.sessionStorage.username,
    text: res[0]
  })
})







module.exports = router
