window.addEventListener('load', ()=> {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');


    if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition
                (position =>{
                    long = position.coords.longitude;
                    lat = position.coords.latitude;
                    const proxy= "http://cors-anywhere.herokuapp.com/";
                    const api = `${proxy}https://api.darksky.net/forecast/3bf2a9e336ae958bc14762c97550e252/${lat},${long}`;
                    fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                         console.log(data);
                         const {temperature, summary ,icon } = data.currently;
                        //Set DOM elements from the API
                        temperatureDegree.textContent = temperature;
                        temperatureDescription.textContent = summary;
                        locationTimezone.textContent=data.timezone;
                            //celcius formula

                            let celcius = (temperature - 32) *(5/9); 
                        //set Icon
                        seticons(icon,document.querySelector(".icon"));
                        //change temperature degree

                        temperatureSection.addEventListener('click', ()=>{
                            if(temperatureSpan.textContent === "F")
                            {
                                temperatureSpan.textContent = "C";
                                temperatureDegree.textContent = Math.floor(celcius);

                            }else{
                                temperatureSpan.textContent = "F";
                                temperatureDegree.textContent = temperature;
                            }

                        })


                    });
               
               
               
                });



    }
    else{
        h1.textContent = "Please enable location"
    }


    function seticons(icon, iconid){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconid, Skycons[currentIcon]);
    }
    
});