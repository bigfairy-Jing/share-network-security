const router = require('koa-router')();
// 请求sql
const { sequelize, login, comments } = require('../DB');

router.get('/', async (ctx) => {
  // 请求sql
  // const res = await sqlQuery()

  await ctx.render('index', {
    from: ctx.query.from,
    username: ctx.session.username,
    comments: []
  });
});
router.get('/error', async (ctx, next) => {
  await ctx.render('error',{
    error: ctx.session.error
  });
})

router.get('/login', async (ctx, next) => {
  await ctx.render('login');
});

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const sql = `
  SELECT *
  FROM safety.login
  WHERE name = '${username}'
  AND password = '${password}'
  `
  const res = await sequelize.query(sql ,  { type: sequelize.QueryTypes.SELECT  })
  if(res.length && res.length > 0){
    ctx.session.username = username
    ctx.redirect("/?from=china")
  }else{
    ctx.session.error = '用户名或者密码错误'
    ctx.redirect("/error")
  }
});

module.exports = router;
