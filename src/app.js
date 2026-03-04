
const express = require("express")
const app = express() 
const port = process.env.PORT || 3000


  //app.get( '/' , (req,res) => {
     // res.send("hello home page")
  // })

const path = require("path")
const x = path.join(__dirname , '../public')

app.use(express.static(x))

 app.set('view engine', 'hbs');

app.get('/' , (req , res) =>{
    res.render('index' ,{
        title : "WEATHER APP" ,
        //desc : "this is weath" er page,
        //img1 :"images/trainer-3.jpg" 
    })
})

const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')

app.get('/weather' , (req , res) =>{
   if(!req.query.address){
    return res.send({
        error :"You must provide Address"
    })
   }
   geocode(req.query.address , (error , data) =>{
    if(error){
        return res.send({error})
    }
    forecast(data. latitude , data.longtitude , (error , forecastData) =>{
         if(error){
        return res.send({error})
    }
    res.send({
        location : req.query.address ,
        latitude : data.latitude ,
        longtitude : data.longtitude ,
        temperature: forecastData 

    })
    })
   })
})













app.listen( port , () =>{
    console.log("app listing on port")
})