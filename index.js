const express=require('express');
// const path=require("path")//需要绝对路径

const server =express();
// server.use(express.static('./www'));//www下所有的东西变成同名资源
server.get('/',(req,res)=>{//资源是'/'请求和接收
   res.send('ok')
    // res.sendFile(
    //     path.resolve('./index.html')//把相对路径变成绝对路径
    // )
});
server.listen(543);//监听80端口