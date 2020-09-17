const router = require('koa-router')();
// 请求sql
const { sequelize, login, comments } = require('../DB');
// 首页
router.get('/', async (ctx) => {
  // 请求sql
  const sql = `
    SELECT *
    FROM safety.comments
  `
  const res = await sequelize.query(sql ,  { type: sequelize.QueryTypes.SELECT  }) 
  await ctx.render('index', {
    from: ctx.query.from || 'China',
    username: ctx.session.username,
    comments: res
  });
});

// 错误页面
router.get('/error', async (ctx, next) => {
  await ctx.render('error',{
    error: ctx.session.error
  });
})

// 登陆页
router.get('/login', async (ctx, next) => {
  await ctx.render('login');
});

// 登陆post请求
router.post('/login', async (ctx, next) => {
  
  const { username, password } = ctx.request.body;
  const sql = `
  SELECT *
  FROM safety.login
  WHERE name = '${username}'
  AND password = '${password}'
  `
  const res = await sequelize.query(sql ,  { type: sequelize.QueryTypes.SELECT  })

  // const sql = `
  //   SELECT *
  //   FROM safety.login
  //   WHERE name = ?
  //   AND password = ?
  // `
  // const res = await sequelize.query(sql , {replacements: [username, password]  , type: sequelize.QueryTypes.SELECT  })

  console.log(res, '----->')
  if(res.length && res.length > 0){
    ctx.session.username = username
    ctx.redirect("/?from=China")
  }else{
    ctx.session.error = '用户名或者密码错误'
    ctx.redirect("/error")
  }
});

// 添加评论
router.post('/addComments', async (ctx)=> {
  const { text, type } = ctx.request.body
  const sql = `
   INSERT INTO safety.comments
   ( type, comment )
   VALUES
   ( "${type}", "${text}" );
  `
  const res = await sequelize.query(sql ,  { type: sequelize.QueryTypes.INSERT  })
  ctx.redirect('/')
})

// 清空评论
router.post('/clearComments', async (ctx)=> {
  const sql = `DELETE from safety.comments`
  const res = await sequelize.query(sql ,  { type: sequelize.QueryTypes.DELETE  })
  ctx.redirect('/')
})


module.exports = router;
