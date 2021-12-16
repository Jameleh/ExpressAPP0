import express from "express";
const PORT=process.env.PORT||3421;
const myapp=express();
myapp.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
     res.append('X-Author', 'itmo2021');
    next();
});
myapp.all("/",(req,res)=>
{
    res.send('itmo2021')
})
.listen(PORT,()=>console.log(PORT))
