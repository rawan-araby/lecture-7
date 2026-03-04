
const request = require ("request")

const forecast = (latitude , longtitude , callback) =>{

const url ="http://api.weatherapi.com/v1/current.json?key=b076ee39c39b465fb02131303261902&q= "+ latitude +" , "+ longtitude +" "
 request({url , json : true } , (error , response)=>{
    
if (error){
    callback("Unable to connect to weatherapi service" , undefined)
}
else if (response.body.error){
    callback(response.body.error.message , undefined)
}
else{
    callback(undefined , response.body.current.temp_c 
       )
}
})

}
module.exports = forecast 