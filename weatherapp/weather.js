



 const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
 const apikey ="e3431eb10f29a1d5d2fd1f0058ee0d02"


 const searchbox= document.querySelector(".search input")
 const searchbutton= document.querySelector(".search button")



 async function checkweather(city){
    const res =await fetch(apiurl + city + `&appid=${apikey}`  )
        var data =await res.json()
        console.log(data)
 
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML= data.main.temp 
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%" ;
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"

 }
searchbutton.addEventListener("click", ()=>{
    checkweather(searchbox.value)
})