var cityName = new String("Seoul");
var dailyURL = "http://api.openweathermap.org/data/2.5/forecast?q="
    +cityName+"&appid=3a9524425075707b189261d047cd31c8&units=metric";


// //임시방편
// let today = new Date(); 
// let hours = today.getHours();
// let dateEx=today.toLocaleDateString('en-US');

// let year = today.getFullYear(); // 년도
// let month = today.getMonth() + 1;  // 월
// let date = today.getDate();  // 날짜

$.ajax({
    url: dailyURL,
    dataType: "json",
    type: "GET",
    async: "false",

    success: function(resp){
        //시간별
        $('#nextTime01').html(resp.list[3].dt_txt);
        $('#nextTime02').html(resp.list[4].dt_txt);
        $('#nextTime03').html(resp.list[5].dt_txt);
        $('#nextTime04').html(resp.list[6].dt_txt);

        $('#nextDesc01').html(resp.list[3].weather[0].description );
        $('#nextDesc02').html(resp.list[4].weather[0].description );
        $('#nextDesc03').html(resp.list[5].weather[0].description );
        $('#nextDesc04').html(resp.list[6].weather[0].description );

        $('#nextTemp01').html(Math.round(resp.list[3].main.temp));
        $('#nextTemp02').html(Math.round(resp.list[4].main.temp));
        $('#nextTemp03').html(Math.round(resp.list[5].main.temp));
        $('#nextTemp04').html(Math.round(resp.list[6].main.temp));

        //요일별
        $('#nextDay01').html(resp.list[10].dt_txt);
        $('#nextDay02').html(resp.list[18].dt_txt);
        $('#nextDay03').html(resp.list[26].dt_txt);
        $('#nextDay04').html(resp.list[34].dt_txt);

        $('#dayDesc01').html(resp.list[10].weather[0].description );
        $('#dayDesc02').html(resp.list[18].weather[0].description );
        $('#dayDesc03').html(resp.list[26].weather[0].description );
        $('#dayDesc04').html(resp.list[34].weather[0].description );

        $('#dayTemp01').html(Math.round(resp.list[10].main.temp));
        $('#dayTemp02').html(Math.round(resp.list[18].main.temp));
        $('#dayTemp03').html(Math.round(resp.list[26].main.temp));
        $('#dayTemp04').html(Math.round(resp.list[34].main.temp));
    }
    
})
