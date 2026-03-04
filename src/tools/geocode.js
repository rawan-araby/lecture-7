
const request = require ("request")
const geocode = (location , callback) =>{

const geocodeurl = 

request({ url : geocodeurl ,  json : true } , (error , response)=>{
    
    if(error){
        callback("Unable to connect to weatherapi service" , undefined)
    }
    else if(response.body.message){
        callback(response.body, undefined)
    }
    else if(response.body.features.length == 0){
        callback("Unable to find location" , undefined)
    }
    else{
        callback(undefined,{
            latitude: response.body.features[0].center[0]  ,
            longtitude: response.body.features[0].center[1]
        })
    }
    
})
}
module.exports = geocode 
