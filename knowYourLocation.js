const apiKey = '3adff1b36f8a4a9284de06a26584a84f'; 
const apiUrl = `https://api.opencagedata.com/geocode/v1/json?`


if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude +'and'+ longitude);
        async function GetLocation(){
            const response = await fetch(apiUrl+`q=${latitude}+${longitude}&key=${apiKey}`)
            let data = await response.json()
            document.querySelector('h2').innerHTML+= data.results[0].formatted;
            console.log(data);
        }
        GetLocation()  
      },
      (error) => {
        console.error(`Error getting location: ${error.message}`);
      }
    );
  } else {
    console.error('Geolocation is not supported by your browser');
  }



