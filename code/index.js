const guard = require("./guard/app.js")
const attack = require('./attack/app.js')

guard.listen(3699, ()=>{
    console.log(`启动守卫网站${3699}`)
})

attack.listen(4396, ()=>{
    console.error(`启动攻击网站${4396}`)
})