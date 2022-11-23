var city = document.querySelector('.city');
var Name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button = document.querySelector('.submit');
var display = document.querySelector('.display');
var er = document.querySelector('.error');
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=eb2d9b2291f66940243aa7a18d924532')
.then((response)=>(((response.json()))))
.then(data=>{
    var nameVal = data['name'];
    var tempVal = data['main']['temp'];
    var descVal= data['weather'][0]['main']
    var h = "City: "
    var t = "Temperature: "
    var clim = "Climate: "
    Name.innerHTML = h.bold()+nameVal;
    temp.innerHTML= t.bold()+tempVal;
    desc.innerHTML=clim.bold()+descVal;
    display.style.backgroundColor="#5DA3FA";
    if(descVal == "Clouds"){
        document.body.style.backgroundImage = "url('clouds.jpg')";
        document.body.style.backgroundSize = "100% 100vh"

    }
    else if(descVal == "Haze"){
        document.body.style.backgroundImage = "url('haze.jfif')";
        document.body.style.backgroundSize = "100% 100vh"

    }
    else if(descVal == "Mist"){
        document.body.style.backgroundImage = "url('mist.jpg')";
        document.body.style.backgroundSize = "100% 100vh"

    }
    else if(descVal == "Clear"){
        document.body.style.backgroundImage = "url('clear.jpg')";
        document.body.style.backgroundSize = "100% 100vh"

    }
    else if(descVal == "ThunderStorm" || descVal=="Rain"){
        document.body.style.backgroundImage = "url('rain.jpg')";
        document.body.style.backgroundSize = "100% 100vh"

    }
})
.catch(err=>{
    er.innerHTML = "Incorrect City!"  
    document.querySelector('.city').style.borderColor = "red";
})

})



