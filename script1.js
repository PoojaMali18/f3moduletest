function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const lat = document.getElementById("lat");
                const long = document.getElementById("long");

                if (latitude !== null && longitude !== null) {
                    lat.innerText = `Latitude: ${latitude}`;
                    long.innerText = `Longitude: ${longitude}`;
                    showWeatherDetails();
                    getWeatherData(latitude, longitude);
                } else {
                    lat.innerText = "Latitude information unavailable";
                    long.innerText = "Longitude information unavailable";
                }
            },
            (error) => {
                handleLocationError(error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

async function getWeatherData(latitude, longitude) {

       const lat = latitude;
       const long = longitude;

        const response = await fetch(
           //`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=6a7c9df8346ced2e8d4bf7542174c7cd`
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=3045dd712ffe6e702e3245525ac7fa38`
              );
        const data = await response.json();
        console.log(data);
        displayWeatherData(data);
    


}


const d = document.getElementById("div");
const d1= document.getElementById("division");


function displayWeatherData(data) 
{
    const div1=document.createElement("div");
    div1.innerText="Location:Secunderabad";
    div1.style.width=200;
    div1.style.height=300;
    div1.classList.add("id");

    const div2 = document.createElement("div");
   div2.innerText=`Wind Speed :${data.current.wind_speed}`;
    div2.style.width=200;
    div2.style.height=300;
    div2.classList.add("id");

    const div3 = document.createElement("div");
    div3.innerText=`Humidity :${data.current.humidity}`;
     div3.style.width=200;
     div3.style.height=300;
     div3.classList.add("id");

     const div4 = document.createElement("div");
     div4.innerText=`Time Zone :${data.timezone}`;
      div4.style.width=200;
      div4.style.height=300;
      div4.classList.add("id");
  
      

      const div5 = document.createElement("div");
      div5.innerText=`Feels Like: ${data.current.feels_like}`;
       div5.style.width=200;
       div5.style.height=300;
       div5.classList.add("id");

       const div6 = document.createElement("div");
       div6.innerText=`Pressure: ${data.current.pressure}`;
        div6.style.width=200;
        div6.style.height=300;
        div6.classList.add("id");

        const div7= document.createElement("div");
       div7.innerText=`UVI index: ${data.current.uvi}`;
        div7.style.width=200;
        div7.style.height=300;
        div7.classList.add("id");
 
         const div8= document.createElement("div");
       div8.innerText=`wind degree: ${data.current.wind_deg}`;
        div8.style.width=200;
        div8.style.height=300;
        div8.classList.add("id");
 


    d.appendChild(div1);
    d.appendChild(div2);
    d.appendChild(div3);
    d.appendChild(div4);
    d.appendChild(div5);
    d.appendChild(div6);
    d.appendChild(div7);
    d.appendChild(div8);




}

function showWeatherDetails() {
    const main = document.querySelector('.main');
    const mainContainer = document.querySelector('.main-conatiner');

    if (main && mainContainer) {
        main.style.display = 'none';
        mainContainer.style.display = 'block';
    }
}


function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  
  
  