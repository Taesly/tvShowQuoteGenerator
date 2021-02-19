window.addEventListener('load', ()=> {
    let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
            
        const api = `api.openweathermap.org/data/2.5/weather?q={Harrisburg}, {Pennsylvania}&appid={2ced99728d0a7cbe71eaed626ebb870d}`;
        });
        
        fetch(api)
                .then(data => {
            return data.json();
                
        })
        .then()
    }
});