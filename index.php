<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToWW</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- IE8 에서 HTML5 요소와 미디어 쿼리를 위한 HTML5 shim 와 Respond.js -->
    <!-- WARNING: Respond.js 는 당신이 file:// 을 통해 페이지를 볼 때는 동작하지 않습니다. -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
        body{
            font-family: 'NanumSquare', sans-serif; color:#222; font-size:12px; line-height: 1.5; 
            padding-top: 70px;
            background-color: #eeeeee;
        }
        #weather1{
            margin-bottom: 30px;   
        }
        #weather2{
            background-color: white;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            padding-bottom: 60px;
        }
        #hourly, #weekly{
            background-color: #ecf3fd;
            box-shadow: #eeeeee 5px 5px 5px;
        }
        #hourly p, #weekly p{
            color: #959595;
        }
        #bubble{
            margin-top: 2em;
            /* height: 12em; */
            background-color: #79aff5;
            border-radius: 0px 20px 20px 20px;
            padding-top: 2em;
            padding-bottom: 2em;
        }
        .clothesIcon{
            width: 100%;
            padding-top: 2em;
        }
        .divider{
            border: rgb(221, 221, 221) 0.5px solid;
        }
        .gray{
            color: #959595;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="apiTest2.js"></script>
    <script src="daily.js"></script>
</head>
<body>
    <?php
    $id = 'testid4';
    $conn = mysqli_connect('localhost', 'toww', 'mirimww1!', 'toww');
    $sql = 'select id, latitude, longitude from members where id="'.$id.'"';
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0) {
        $lat = $row['latitude'];
        $lon = $row['longitude'];
    } else {
        $lat=37.466537;
        $lon=126.932908; 
    }
    ?>
    <script language="text/javascript" src="daily.js"> 
        <script>getLatLon('37.466537','126.932908'); </script>
    <?php
    mysqli_close($conn);
    ?>

    <!-- 네비게이션바 -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">ToWW</a>
            </div>
        
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.html">오늘의 날씨</a></li>
                    <li><a href="choose.html">MY 스타일</a></li>
                    <li><a href="setting.html">환경설정<span class="sr-only">(current)</span></a></li>
                    <li><a href="#">지역설정</a></li>
                    <li><a href="mailto:blueacryl0220@gmail.com ?subject=[ToWW] Feedback for ToWW&body=피드백 감사합니다! 아래에 문의 내용을 적어주세요.">문의하기</a></li>
                </ul>         
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav><!--네비게이션 끝-->

    </div>
    <div class="container" id="weather1">
        <div class="col-sm-12 text-right">
            <h2>오늘의 날씨</h2>
            <p class="gray">
                업데이트 <span id="month"></span>월 <span id="date"></span>일
            </p>
        </div>
    </div> <!--#weather1-->
    
    <div class="container" id="weather2">
        <div class="col-sm-12 text-center">
            <div style = "font-size:4em;">
                <img src="" alt="날씨아이콘" width="25%" id="icon">
                <span id="temp"></span>°C
            </div>
            <p class="gray">
                최고온도 <span id="temp_max"></span>°C / 최저온도 <span id="temp_min"></span>°C <br> &nbsp;
                체감온도 <span id="feels_like"></span> °C 
            </p>
        </div><!--날씨표시-->
        <div class="col-sm-12">
            <div class="row">
                <div class="col-xs-3">
                    <img src="./img/profile.png" width="100%">
                </div>
                <div class="col-xs-9" id="bubble">
                    <center class="col-xs-12">
                        <span id="dayNight"></span> 엔 다소 <span></span> 것 같아요.<br>
                        <span></span>와(과) <span></span>을 추천드려요.<br>
                        <div class="row">
                            <div class="col-xs-4">
                                <img src="./img/clothes/니트.png" class="clothesIcon" id="recommendTop">
                                <br><span id="recommendTopText"></span>
                            </div>
                            <div class="col-xs-4">
                                <img src="./img/clothes/홈웨어.png" class="clothesIcon" id="recommendBottom">
                                <br><span id="recommendBottomText"></span>
                            </div>
                            <div class="col-xs-4">
                                <img src="./img/clothes/조끼.png" class="clothesIcon">
                                <br>니트
                            </div>
                        </div>
                    </center>
                    <!-- <img src="./img/말풍선.png" alt="옷추천2" width="100%"> -->
                </div>
            </div> <!--row-->
        </div>
        <div class="col-sm-12 gray">
            <h2>시간별</h2>
            <div class="row img-rounded" id="hourly">
                <div class="col-xs-3 text-center">
                    <span id="nextTime01"></span>
                    <p><span>
                            <img src="" alt="날씨아이콘" id="timeIcon01" width="100%">
                            <span id="nextDesc01"></span>
                        </span>&nbsp;<span id="nextTemp01"></span>°C</p>
                </div>
                <div class="col-xs-3 text-center">
                    <span id="nextTime02"></span>
                    <p><span>
                            <img src="" alt="날씨아이콘" id="timeIcon02" width="100%">
                            <span id="nextDesc02"></span>
                        </span>&nbsp;
                        <span id="nextTemp02"></span>°C</p>
                </div>
                <div class="col-xs-3 text-center">
                    <span id="nextTime03"></span>
                    <p><span>
                            <img src="" alt="날씨아이콘" id="timeIcon03" width="100%">
                            <span id="nextDesc03"></span>
                        </span>&nbsp;
                        <span id="nextTemp03"></span>°C</p>
                </div>
                <div class="col-xs-3 text-center">
                    <span id="nextTime04"></span>
                    <p><span>
                            <img src="" alt="날씨아이콘" id="timeIcon04" width="100%">
                            <span id="nextDesc04"></span>
                        </span>&nbsp;
                        <span id="nextTemp04"></span>°C
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 gray" >
            <h2>요일별</h2>
            <div class="row img-rounded" id="weekly">
                <div class="col-xs-3 text-center">
                    <span id="nextDay01"></span>
                    <p>
                        <span>
                            <img src="" alt="날씨아이콘" id="dayIcon01" width="100%">                            
                            <span id="dayDesc01">
                        </span>
                        </span>&nbsp;
                        <span id="dayTemp01"></span>°C
                    </p>
                </div>
                <div class="col-xs-3 text-center">
                    <span id="nextDay02"></span>
                    <p>
                        <span>
                            <img src="" alt="날씨아이콘" id="dayIcon02" width="100%">    
                            <span id="dayDesc02"></span>
                        </span>&nbsp;
                        <span id="dayTemp02"></span>°C
                    </p>
                </div>
                <div class="col-xs-3 text-center">
                    <span id="nextDay03"></span>
                    <p>
                        <span>
                            <img src="" alt="날씨아이콘" id="dayIcon03" width="100%">    
                            <span id="dayDesc03"></span>
                        </span>&nbsp;
                        <span id="dayTemp03"></span>°C
                    </p>
                </div>
                <div class="col-xs-3 text-center">
                    <span id="nextDay04"></span>
                    <p>
                        <span>
                            <img src="" alt="날씨아이콘" id="dayIcon04" width="100%">    
                            <span id="dayDesc04"></span>
                        </span>&nbsp;
                        <span id="dayTemp04"></span>°C
                    </p>
                </div>
            </div>
        </div>
    </div><!--#weather2-->

    <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
    <!-- 합쳐지고 최소화된 최신 자바스크립트 -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</body>
</html>