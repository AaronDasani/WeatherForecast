
 

 
$(document).ready(function(){
    let weatherData;
    let weatherAPI="http://api.openweathermap.org/data/2.5/weather?q="
    let country;
    let city;
    let unitMetric="&units=metric"
    let appid="&appid={{Your Key}}";
    let countryNames="https://restcountries.eu/rest/v2/name/{name}";
    let weatherDescription=false;

    $("form").submit(function(){

        country=$("input[id='country']").val();
        
        city=$("input[id='city']").val();
        
        var url=weatherAPI+city+','+country+unitMetric+appid;

        $.getJSON(url,function (data) {

            weatherData=data;
            displayWeatherData();
            
        });
     
        $(".pimg3 h3").text(city+','+country);

        if (weatherDescription==true) {
            $(".Weatherdescipt").hide();
            weatherDescription=false;
        }
       
        if (weatherDescription==false) {
            $(".Weatherdescipt").slideToggle("slow");
            weatherDescription=true;
        }
       
      

        return false;
    })

    function displayWeatherData() {
        $("#temperature span").text(weatherData.main.temp);
        $("#humidity span").text(weatherData.main.humidity);
        $("#pressure span").text(weatherData.main.pressure);
        $("#wind span").text(weatherData.wind.speed);
        $("#clouds span").text(weatherData.clouds.all);
        $(".Weatherdescipt p").text(weatherData.weather[0].description);

        if (weatherData.weather[0].main=="Clouds") {
            $(".pimg3").css("background-image", "url('./WeatherAppImages/rain1.jpeg')");
            console.log("coldsss");
            
        }
       else if(weatherData.weather[0].main=="Clear"){ 
           $(".pimg3").css("background-image", "url('./WeatherAppImages/mountain1.jpeg')");
            console.log("hottt");
        }
        else if(weatherData.weather[0].main=="Thunderstorm"){ 
            $(".pimg3").css("background-image", "url('./WeatherAppImages/thunderStorm.jpeg')");
             console.log("thunderstorm");
        }
        else if(weatherData.weather[0].main=="Haze"){ 
            $(".pimg3").css("background-image", "url('./WeatherAppImages/haze.jpeg')");
             console.log("haze");
        }
        else if(weatherData.weather[0].main=="Rain"){ 
            $(".pimg3").css("background-image", "url('./WeatherAppImages/rain3.jpeg')");
             console.log("haze");
        }
        else if(weatherData.weather[0].main=="Mist"){ 
            $(".pimg3").css("background-image", "url('./WeatherAppImages/mist.jpg')");
             console.log("haze");
        }
           
        else{ 
            $(".pimg3").css("background-image", "url('./WeatherAppImages/forest1.jpeg')");
             console.log("normal");
        }
            
    }

 $(".Weatherdescipt").hide();

 $(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

})


