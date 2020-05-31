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

//임시방편
let today = new Date(); 

var clothes = {
    'outer' : ['야상','점퍼','자켓','플리스','코트','숏패딩','롱패딩']
    ,'wearTop' : ['나시','민소매','반팔티셔츠','셔츠','블라우스','긴팔티셔츠','맨투맨','후드','폴라티']
    ,'bottom' : ['치마', '치마바지','긴치마','레깅스','반바지','면바지','긴바지']
};

var pickClothes;
pickClothes = function(temp){
    //Math.floor(Math.random() * (max - min + 1)) + min;
    var number = 0;
    alert(temp);

    if(temp>27){
        number=Math.floor(Math.random() * (0 - 2 + 1)) + 0;;
    }
    else if(temp>=23&&temp<=26){
        number=Math.floor(Math.random() * (2 - 4 + 1)) + 2;;
    }
    else if(temp>=21&&temp<=23){
        number=Math.floor(Math.random() * (3 - 5 + 1)) + 2;;
    }
    else if(temp>=18&&temp<=20){
        number=Math.floor(Math.random() * (2 - 5 + 1)) + 2;;
    }
    else if(temp>=15&&temp<=17){
        number=Math.floor(Math.random() * (4 - 6 + 1)) + 4;;
    }
    else if(temp>=11&&temp<=14){
        number=3;
    }
    else if(temp>=9&&temp<=10){
        number=4;
    }
    else if(temp>=6&&temp<=8){
        number=6;
    }
    else if(temp<=5){
        number=6;
    }
    else{
        number = Math.floor(Math.random() * 8);  
    }
    
    alert(number);
    
    return number;
}

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
                

        // var clothesNumber = pickClothes(feels_like);   

        // $("#recommendTop").attr("src","./img/clothes/" +clothes.wearTop[clothesNumber]+ ".png");
        // $("#recommendTopText").html(clothes.wearTop[clothesNumber]);
        // $("#recommendBottom").attr("src","./img/clothes/" +clothes.bottom[clothesNumber]+ ".png");
        // $("#recommendBottomText").html(clothes.bottom[clothesNumber]);
        
    }
})