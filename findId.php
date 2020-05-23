<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>ToWW</title>

        <!-- 부트스트랩 -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

        <!-- stylesheet -->
        <link rel="stylesheet" href="./reset.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css">
    </head>
    <style>
        body { background-color: #f8f8f8; }

        .header { height: 12vh; display: flex; align-items: center; justify-content: center; }
        .header .title { font-weight: bold; }
        .title { text-align: center; }

        .find-id-area { height: 88vh; background-color: #fff; border-radius: 20px 20px 0 0; box-shadow: 0px -1px 10px #ddd; }
        .find-id-area .find-id { text-align: center; margin: 5vw 10vw; }
        .find-id-area .find-id form { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; }
        .find-id-area .find-id .title-span { display: flex; align-items: center; box-sizing: border-box; padding: 0 0 0 20px; width: 25vw; height: 6vh; background-color: #f8f8f8; font-weight: bold; }
        .find-id-area .find-id .content { box-sizing: border-box; width: 45vw; height: 6vh; border: none; background-color: #f8f8f8; padding: 0 10px; }

        /* find-id-title */
        .find-id-title { text-align: center; padding-top: 5vh; }
        .find-id-title .title { margin-bottom: 10px; }
        .find-id-title span { font-size: 13px; }

        /* find-btn */
        .find-btn { width: 70vw; height: 6vh; border: none; margin: 30vh 0 0 0; padding: 0 10px; border-radius: 20px; background-color: #79aff5; color: #fff; }

        .list { width: 100vw; }
        input:focus { outline: none; }
    </style>
    <body>
        <div class="header">
            <h2 class="title">아이디 찾기</h2>
        </div>
        <div class="find-id-area">
            <div class="find-id-title">
                <h2 class="title">아이디 확인</h2>
                <span>아이디를 확인하시고 다시 로그인해주세요.</span>
            </div>
            <div class="find-id">
                <?php
                    $name = $_POST{'name'};
                    $depth1 = $_POST{'depth1'};
                    $depth2 = $_POST{'depth2'};

                    $conn = mysqli_connect('localhost', 'toww', 'mirimww1!', 'toww');
                    $sql = 'select * from members where name="'.$name.'" and depth1="'.$depth1.'" and depth2="'.$depth2.'";';
                    $result = mysqli_query($conn, $sql);

                    if(mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_array($result)) {
                            $id = $row['id'];
                            $len = strlen($id);
                            $sub = substr($id, 0, $len/2);
                            $final = $sub;
                            $j = $len-($len/2);

                            for($i = 0; $i < $j; $i++) {
                                $final = $final.'*';
                            }

                            echo '<span class="list">'.$final.'</span>';
                            echo '<br>';
                        }
                    } else {
                        echo '일치하는 정보가 없습니다. 입력한 정보를 다시 확인해주세요.';
                    }

                    mysqli_close($conn);
                ?>

                <a href="login.html"><button type="button" class="find-btn">로그인 하기</button></a>
            </div>
        </div>
        
        <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    </body>
</html>