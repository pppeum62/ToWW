var cityName = new String("Seoul");

// var lat=37.466537;
// var lon=126.932908;

var latlonURL;

function getLatLon(lat,lon){

    console.log(lat);
    console.log(lon);

    latlonURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=3a9524425075707b189261d047cd31c8&units=metric";
}

// var latlonURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+
// "&appid=3a9524425075707b189261d047cd31c8&units=metric";

var dailyURL = "http://api.openweathermap.org/data/2.5/forecast?q="
    +cityName+"&appid=3a9524425075707b189261d047cd31c8&units=metric";

var clothes = {
    'outer' : ['야상','점퍼','자켓','플리스','코트','숏패딩','롱패딩']
    ,'wearTop' : ['나시','민소매','반팔티셔츠','셔츠','블라우스','긴팔티셔츠','맨투맨','후드','폴라티']
    ,'bottom' : ['치마', '치마바지','긴치마','레깅스','반바지','면바지','긴바지']
};

var pickClothes;
pickClothes = function(temp){
    //Math.floor(Math.random() * (max - min + 1)) + min;
    var number = 0;
    //alert(temp);

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
    
    //alert(number);
    
    return number;
}

//시간별 시간 문자열 자르기
var stringCut01;
stringCut01 = function(a){
    
    return a.substring(11,13)+"시";
}
//요일별 요일 문자열 자르기
var stringCut02;
stringCut02 = function(a){
    
    return a.substring(5,7)+"월"+a.substring(8,10)+"일";
}

//새벽, 아침, 낮 저녁
var dayNight;
dayNight = function(a){
    var hour = Number(a);
    var dayNight;

    // if(a==0||a==1||a==2||a==03||a==04||a==05||a==06){
    //     dayNight= "새벽"
    // }
    // else if(a==07"||a=="08"||a=="09"||a=="10"||a=="11"){
    //     dayNight= "아침"
    // }
    // else if(a=="12"||a=="13"||a=="14"||a=="15"||a=="16"||a=="17"){
    //     dayNight= "낮"
    // }
    // else if(a=="18"||a=="19"||a=="20"||a=="21"||a=="22"||a=="23"){
    //     dayNight= "저녁"
    // }

    switch(hour){
        case 0: case 1: case 2: case 3: case 4: case 5: case 6:
            dayNight= "새벽"
        break;
        case 7: case 8: case 9: case 10: case 11:
            dayNight= "아침"
        break;
        case 12: case 13: case 14: case 15: case 16: case 17:
            dayNight= "낮"
        break;
        case 18: case 19: case 20: case 21: case 22: case 23:
            dayNight= "저녁"
        break;
    }

    return dayNight
}

$.ajax({
    url: dailyURL,
    dataType: "json",
    type: "GET",
    async: "false",

    success: function(resp){
        //console.log("날씨 이미지 : "+ resp.list[0].weather[0].icon);

        // getLatLon();

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

        $('#dayTemp01').html(Math.round(resp.list[10].main.temp));
        $('#dayTemp02').html(Math.round(resp.list[18].main.temp));
        $('#dayTemp03').html(Math.round(resp.list[26].main.temp));
        $('#dayTemp04').html(Math.round(resp.list[34].main.temp));

        $('#dayNight').html(dayNight(stringCut01(resp.list[4].dt_txt)));
        
        
        var clothesNumber = pickClothes(resp.list[2].main.feels_like);   

        $("#recommendTop").attr("src","./img/clothes/" +clothes.wearTop[clothesNumber]+ ".png");
        $("#recommendTopText").html(clothes.wearTop[clothesNumber]);
        $("#recommendBottom").attr("src","./img/clothes/" +clothes.bottom[clothesNumber]+ ".png");
        $("#recommendBottomText").html(clothes.bottom[clothesNumber]);
    }
    
})
