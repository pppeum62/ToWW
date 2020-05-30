var cityName = new String("Seoul");
var dailyURL = "http://api.openweathermap.org/data/2.5/forecast?q="
    +cityName+"&appid=3a9524425075707b189261d047cd31c8&units=metric";

//시간별 시간 문자열 자르기
var stringCut01;
stringCut01 = function(a){
    
    return a.substring(11,19);
}
//요일별 요일 문자열 자르기
var stringCut02;
stringCut02 = function(a){
    
    return a.substring(5,10);
}

$.ajax({
    url: dailyURL,
    dataType: "json",
    type: "GET",
    async: "false",

    success: function(resp){

        //console.log("날씨 이미지 : "+ resp.list[0].weather[0].icon);

        //시간별
        $('#nextTime01').html(stringCut01(resp.list[3].dt_txt));
        $('#nextTime02').html(stringCut01(resp.list[4].dt_txt));
        $('#nextTime03').html(stringCut01(resp.list[5].dt_txt));
        $('#nextTime04').html(stringCut01(resp.list[6].dt_txt));

        $('#nextDesc01').html(resp.list[3].weather[0].description);
        $('#nextDesc02').html(resp.list[4].weather[0].description);
        $('#nextDesc03').html(resp.list[5].weather[0].description);
        $('#nextDesc04').html(resp.list[6].weather[0].description);

        $("#timeIcon01").attr("src","http://openweathermap.org/img/w/" + resp.list[3].weather[0].icon+ ".png");
        $("#timeIcon02").attr("src","http://openweathermap.org/img/w/" + resp.list[4].weather[0].icon+ ".png");
        $("#timeIcon03").attr("src","http://openweathermap.org/img/w/" + resp.list[5].weather[0].icon+ ".png");
        $("#timeIcon04").attr("src","http://openweathermap.org/img/w/" + resp.list[6].weather[0].icon+ ".png");

        $('#nextTemp01').html(Math.round(resp.list[3].main.temp));
        $('#nextTemp02').html(Math.round(resp.list[4].main.temp));
        $('#nextTemp03').html(Math.round(resp.list[5].main.temp));
        $('#nextTemp04').html(Math.round(resp.list[6].main.temp));

        //요일별
        $('#nextDay01').html(stringCut02(resp.list[10].dt_txt));
        $('#nextDay02').html(stringCut02(resp.list[18].dt_txt));
        $('#nextDay03').html(stringCut02(resp.list[26].dt_txt));
        $('#nextDay04').html(stringCut02(resp.list[34].dt_txt));

        $("#dayIcon01").attr("src","http://openweathermap.org/img/w/" + resp.list[10].weather[0].icon+ ".png");
        $("#dayIcon02").attr("src","http://openweathermap.org/img/w/" + resp.list[18].weather[0].icon+ ".png");
        $("#dayIcon03").attr("src","http://openweathermap.org/img/w/" + resp.list[26].weather[0].icon+ ".png");
        $("#dayIcon04").attr("src","http://openweathermap.org/img/w/" + resp.list[34].weather[0].icon+ ".png");

        $('#dayDesc01').html(resp.list[10].weather[0].description);
        $('#dayDesc02').html(resp.list[18].weather[0].description);
        $('#dayDesc03').html(resp.list[26].weather[0].description);
        $('#dayDesc04').html(resp.list[34].weather[0].description);

        //여원쓰한테 말하기
        $('#dayTemp01').html(Math.round(resp.list[10].main.temp));
        $('#dayTemp02').html(Math.round(resp.list[18].main.temp));
        $('#dayTemp03').html(Math.round(resp.list[26].main.temp));
        $('#dayTemp04').html(Math.round(resp.list[34].main.temp));
    }
    
})
