
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
     console.log(document.getElementById('address').value)
    weatherFun()
   // form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const latitudeF = document.getElementById('latitude')
const longtitudeF = document.getElementById('longtitude')
const temperatureF = document.getElementById('temperature')

let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = "Error : " + data.error
            locationF.innerText = ''
            latitudeF.innerText = ''
            longtitudeF.innerText = ''
            temperatureF.innerText = ''
        }
        else {
            locationF.innerText = "County :" + data.location
            latitudeF.innerText ="Latitude :" + data.latitude
            longtitudeF.innerText = "Longtitude :" + data.longtitude
            temperatureF.innerText = "temperature : " + data.temperature
            errorF.innerText = ''

        }
    }
    catch(e){
        console.log(e)
    }
}