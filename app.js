//项目的入口文件

//引入需要用到的模块
const express = require('express');
const path = require('path');
const app = express();  //app是express的实例
const cookieParser = require('cookie-parser');
const db = require('./config/db');

//使用中间件 --cookie-parser    是一个方法
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//引入路由中间件的文件
const indexRouter = require('./routes/index');

//设置静态文件的托管
app.use(express.static(path.resolve(__dirname,'./public')));


//使用模板引擎ejs  不需要这个文件中引入只需要设置一个ejs的名字，express会自动去寻找ejs相关引擎去做处理
//设置模板文件的路径与使用的什么模板引擎
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');

// 路由中间件的使用，如果写在这里会显得代码太长
// 抽离至router文件夹下的index.js文件中
app.use('/',indexRouter); 



app.listen(3000);