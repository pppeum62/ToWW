var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=cc49762166bde6792af11868fb0cc853";
var temp;
var humidity;
var cloud;
var wind;
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {
        $('#show').html(JSON.stringify(resp));
        console.log(resp);
        console.log("현재온도 : "+ (resp.main.temp- 273.15) );
        console.log("현재습도 : "+ resp.main.humidity);
        console.log("날씨 : "+ resp.weather[0].main );
        console.log("상세날씨설명 : "+ resp.weather[0].description );
        console.log("날씨 이미지 : "+ resp.weather[0].icon );
        console.log("바람   : "+ resp.wind.speed );
        console.log("나라   : "+ resp.sys.country );
        console.log("도시이름  : "+ resp.name );
        console.log("구름  : "+ (resp.clouds.all) +"%" ); 
        
        temp=Math.round((resp.main.temp- 273.15));
        cloud=(resp.weather[0].description);

        
        $('#clouds').html(cloud); 
        $('#temp').html(temp);
        
        if((resp.main.temp- 273.15)>=16){
            $('#show2').html(temp);
            return;
        }               
    }
})

