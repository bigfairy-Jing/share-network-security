const guard = require("./guard/app.js")
const attack = require('./attack/app.js')
const { erLog } = require('./lib/util')

guard.listen(3699, ()=>{
    console.log(`启动守卫网站http://localhost:${3699}`)
})

attack.listen(4396, ()=>{
    erLog(`启动攻击网站http://localhost:${4396}`)
})