const router = require('koa-router')();
// const session = require('koa-session');
const { xssFormat } = require('../../lib/util')
// 请求sql
const { sequelize } = require('../DB');

// 首页
router.get('/', async (ctx) => {
  if (!ctx.session.username) {
    ctx.redirect("/login")
  }
  // 请求sql
  const sql = `
    SELECT *
    FROM safety.comments
  `
  const res = await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT
  })
  console.log()
  await ctx.render('index', {
    // from: ctx.query.from || 'China',
    from: xssFormat(ctx.query.from || 'China'),
    username: ctx.session.username,
    comments: res
  });
});

// 错误页面
router.get('/error', async (ctx) => {
  await ctx.render('error', {
    error: ctx.session.error
  });
})

// 登陆页
router.get('/login', async (ctx) => {
  await ctx.render('login');
});

// 登陆post请求
router.post('/login', async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body;
  // 错误sql方式
  // const sql = `
  // SELECT *
  // FROM safety.login
  // WHERE name = '${username}'
  // AND password = '${password}'
  // `
  // const res = await sequelize.query(sql, {
  //   type: sequelize.QueryTypes.SELECT
  // })

  // 正确sql方式
  const sql = `
    SELECT *
    FROM safety.login
    WHERE name = ?
    AND password = ?
  `
  const res = await sequelize.query(sql , {replacements: [username, password]  , type: sequelize.QueryTypes.SELECT  })

  if (res.length && res.length > 0) {
    ctx.session.username = username
    ctx.redirect("/?from=China")
  } else {
    ctx.session.error = '用户名或者密码错误'
    ctx.redirect("/error")
  }
});

// 添加评论
router.post('/addComments', async (ctx) => {
  const {
    text,
    type
  } = ctx.request.body
  const sql = `
   INSERT INTO safety.comments
   ( type, comment )
   VALUES
   ( "${type}", "${text}" );
  `
  const res = await sequelize.query(sql, {
    type: sequelize.QueryTypes.INSERT
  })
  ctx.redirect('/')
})

// 清空评论
router.post('/clearComments', async (ctx) => {
  const sql = `DELETE from safety.comments`
  const res = await sequelize.query(sql, {
    type: sequelize.QueryTypes.DELETE
  })
  ctx.redirect('/')
})


module.exports = router;