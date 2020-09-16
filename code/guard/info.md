### desc

1. XSS
2. CSRF
3. 点击劫持
4. SQL注入
5. OS注入
6. 请求劫持
7. DDOS


#### XSS 跨站脚本攻击
> XSS(Cross-Site Scripting)跨站脚本攻击, 因为缩写和CSS重叠,所以叫XSS.  XSS是指 通过存在的安全漏洞的WEB王章注册用户的浏览器内运行非法的非本站点的HTML标签或JavaScript进行一种攻击. 

##### XSS分类
* 反射弧XSS (非持久型XSS)
* DOM型XSS (非持久性XSS)
* 储存型XSS (持久性XSS)

1. 反射弧XSS示例
  * 攻击构造出特殊的URL,包含恶意代码列如:
  ```
    http://localhost:3699/?from=<script>alert(document.cookie)</script>
    http://localhost:3699/?from=<script>alert(JSON.stringify(localStorage))</script>
  ```
2. DOM型XSS
  * 攻击者构造出URL,包含恶意代码,进行XSS攻击
  
##### XSS防护

#### CSRF 跨站请求伪造
> CSRF(Cross Site Request Forgery), 利用用户已经登陆了的身份,在用户毫不知情的情况下,以用户的名义完成非法操作






#### 一些其他的WEB攻击

1. 目录遍历攻击
> 目录遍历(Directory Traversal) 攻击是指对本无意公开的文件目录,通过非法手段,达成访问目的.

> 场景: WEB应用对文件处理操作时,由外部指定文件名的处理存在疏漏的情况下，用户可使用．../等相对路径定位到/etc/passed(linux保存用户信息密码路径)等绝对路径上，达到访问服务器任意的文件或文件目录. 从而非法浏览篡改删除WEB服务器上的文件

> 防护: 设定WEB服务器上对应文件名的访问权限,关闭指定对任意文件的访问权限


2. 不正确的错误消息处理
> 不正确的错误消息处理（Error Handling Vulnerability）的安全漏洞是指, WEB应用产生提示的错误信息有些时候会包含对攻击者有用的信息.
* Web应用抛出的错误信息
* 数据库等系统抛出的错误信息
* ...

> 防护,Web应用不必要在用户的浏览页面上抛出详细的错误信息.攻击者可能通过详细的错误信息知晓服务器的信息,从而成为下一次攻击的提示

4. 开放重定向

>




参考文献:
b站的某个视频 忘记了
[常见的Web攻击及防御方法](https://juejin.im/post/6844904034248163335#heading-23)
[跨站脚本攻击--XSS](https://segmentfault.com/a/1190000020402185)
[跨站请求伪造--CSRF](https://segmentfault.com/a/1190000021114673)
[DDOS 攻击的防范教程-阮一峰](http://www.ruanyifeng.com/blog/2018/06/ddos.html)