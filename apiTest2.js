var cityName = new String("Seoul");
var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="
    +cityName+"&appid=cc49762166bde6792af11868fb0cc853&units=metric";

// var lat=37.466537;
// var lon=126.932908;

// var latlonURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+
// "&appid=3a9524425075707b189261d047cd31c8&units=metric";

//이따 html에 값 넘겨줄 변수들.
var temp;
var temp_max;
var temp_min;
var cloud;
var weather;
var desc;

//임시방편
let today = new Date(); 

$.ajax({
    url: apiURL,
    dataType: "json",
    type: "GET",
    async: "false",

    success: function(resp) {
        //임시방편, 업데이트 표시
        $('#month').html(today.getMonth() + 1); 
        $('#date').html(today.getDate()); 

        {
       //날씨 아이콘
        // desc = new String (resp.weather[0].description);
        // {
        //     if(desc.indexOf("cloud")==true){
        //         weather="./img/구름_흐림.png"
        //     }
        //     else if(desc.indexOf("mist")==true){
        //         weather="./img/안개.png"
        //     }
        //     else if(desc.indexOf("wind")==true){
        //         weather="./img/바람.png"
        //     }
        //     else if(desc.indexOf("clear")==true){
        //         weather="./img/sun100.png"
        //     }
        //     else if(desc.indexOf("rain")==true){
        //         weather="./img/구름_비.png"
        //     }
        //     else if(desc.indexOf("snow")==true){
        //         weather="./img/구름_눈.png"
        //     }
        //     else{
        //         weather="./img/sun30.png"
        //     }
        // }
        }

        //날씨 아이콘
        var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
        //$("#icon").attr("src", weather);
        $("#icon").attr("src", imgURL);
        
        //지금 날씨 설명
        temp = Math.round((resp.main.temp));
        temp_max = Math.round((resp.main.temp_max));
        temp_min = Math.round((resp.main.temp_min));
        var feels_like =resp.main.feels_like;

        $('#temp').html(temp);               
        $('#temp_max').html(temp_max);               
        $('#temp_min').html(temp_min);
        $('#feels_like').html(feels_like.toFixed(1));
        
    }
})