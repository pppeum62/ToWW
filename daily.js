var cityName = new String("Seoul");
var dailyURL = "http://api.openweathermap.org/data/2.5/forecast?q="
    +cityName+"&appid=3a9524425075707b189261d047cd31c8&lang=kr&units=metric";

$.ajax({
    url: dailyURL,
    dataType: "json",
    type: "GET",
    async: "false",

    success: function(resp){
        
    }
})
