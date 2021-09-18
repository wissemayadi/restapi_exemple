const express=require("express"); // require express 
const request= require("request-promise");
const app=express(); // assign app to express server
app.use(express.json()); // parse result in json 
const port =process.env.port || 5000; // port : 5000



//@http://localhost:5000/test/

app.get("/test/:number",(req,res,next)=>{
const {number}=req.params;


    

for (let i=1;i<101;i++){

    if (number%15 ===0){
  
 
   return res.status(200).json({status: 0, message: "FIZZBUZZ'"}); 
   
    }else if (number % 3 ===0){
        return res.status(200).json({status: 0, message: "FIZZ"});
       
    }else if (number % 5 === 0){
        return res.status(200).json({status: 0, message: "BUZZ'"});
    }else{
        return res.status(200).json({status: 1, number});
    }
}

next();
})

// runing the server on port : 5000 : you must  tippe on terminal  "nodemon server"
app.listen(port,(req,res)=>{

console.log(`the port is listenning on ${port}`)

})



/// exemple when you put this url on the browser : http://localhost:5000/test/15 : the output will be :
// {
// "status": 0,
// "message": "FIZZBUZZ'"
// } 
