//页面渲染的路由

const express = require('express');
const router = express.Router();    //基于express的Router函数

//首页 url地址：http://localhost:3000/
router.get('/',(req,res) => {
    //渲染一个页面出去
    res.render('index') ;    //为什么会到views文件夹下去寻找一个叫做index.ejs的文件？

});

//banner页面  
router.get('/banner.html',(req,res) => {
    res.render('banner')
})

//暴露这个router
module.exports = router;