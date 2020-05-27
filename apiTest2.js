var cityName = new String("Seoul");
var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="
    +cityName+"&appid=cc49762166bde6792af11868fb0cc853&units=metric";

//이따 html에 값 넘겨줄 변수들.
var temp;
var temp_max;
var temp_min;
var cloud;
var weather;
var desc;

var top01;
var bottom;

//임시방편
let today = new Date(); 

$.ajax({
    url: apiURL,
    dataType: "json",
    type: "GET",
    async: "false",

    //toFixed(n) n자리에서 반올림.
    success: function(resp) {
        {/*$('#show').html(JSON.stringify(resp));
        console.log(resp);
        console.log("최고온도 : "+ (resp.main.temp_min- 273.15) );
        console.log("최저온도 : "+ (resp.main.temp_max- 273.15) );
        console.log("현재온도 : "+ (resp.main.temp- 273.15) );
        console.log("현재습도 : "+ resp.main.humidity);
        console.log("날씨 : "+ resp.weather[0].main );
        console.log("상세날씨설명 : "+ resp.weather[0].description );
        console.log("날씨 이미지 : "+ resp.weather[0].icon);
        //alert(resp.dt + 9); unix utc 계산 우째함 하 못알아먹겠음~~.
        console.log("바람   : "+ resp.wind.speed );
        console.log("나라   : "+ resp.sys.country );
        console.log("도시이름  : "+ resp.name );
        console.log("구름  : "+ (resp.clouds.all) +"%" ); */}
       
       //날씨 아이콘
        desc = new String (resp.weather[0].description);
        {
            if(desc.indexOf("cloud")==true){
                weather="./img/구름_흐림.png"
            }
            else if(desc.indexOf("mist")==true){
                weather="./img/안개.png"
            }
            else if(desc.indexOf("wind")==true){
                weather="./img/바람.png"
            }
            else if(desc.indexOf("clear")==true){
                weather="./img/sun100.png"
            }
            else if(desc.indexOf("rain")==true){
                weather="./img/구름_비.png"
            }
            else if(desc.indexOf("snow")==true){
                weather="./img/구름_눈.png"
            }
            else{
                weather="./img/sun30.png"
            }
        }
        var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
        //$("#icon").attr("src", weather);
        $("#icon").attr("src", imgURL);
        
        temp = Math.round((resp.main.temp));
        temp_max = Math.round((resp.main.temp_max));
        temp_min = Math.round((resp.main.temp_min));
        cloud=(resp.weather[0].description);

        {
            if(temp>27){
                top01=new String("나시티,민소매 원피스");
                bottom=new String("청바지, 반바지");
            }
            else if(temp>=23&&temp<=26){
                top01=new String("반팔,얇은 셔츠, 얇은 긴팔");
                bottom=new String("반바지, 면바지");
            }
            else if(temp>=18&&temp<=22){
                top01=new String("긴팔티,가디건,후드티,");
                bottom=new String("청면바지,슬랙스,청바지");
            }
            else if(temp>=15&&temp<=17){
                top01=new String("니트,가디건,맨투맨");
                bottom=new String("청바지,슬랙스");
            }
            else if(temp>=11&&temp<=14){
                top01=new String("자켓,셔츠,가디건,간절기 야상,");
                bottom=new String("얇은 스타킹, 청바지,바지");
            }
        }
        
        $('#clouds').html(cloud); 
        $('#temp').html(temp);               
        $('#temp_max').html(temp_max);               
        $('#temp_min').html(temp_min);
        $('#top').html(top01);               
        $('#bottom').html(bottom);
        
        //임시방편
        $('#month').html(today.getMonth() + 1); 
        $('#date').html(today.getDate()); 

    }
})