<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>

    <body>
    <?php
        $name = $_POST{'name'};
        $id = $_POST{'id'};
        $depth1 = $_POST{'depth1'};
        $depth2 = $_POST{'depth2'};
        $pw = $_POST{'pw'};
        $lat = $_POST{'lat'};
        $lng = $_POST{'lng'};

        $encrypted_pw = password_hash($pw, PASSWORD_DEFAULT);

        $conn = mysqli_connect('localhost', 'toww', 'mirimww1!', 'toww');
        $sql = 'select * from members where id="'.$id.'"';
        $result = mysqli_query($conn, $sql);

        if($depth1 == '시/도') {
            $depth1 = null;
        }
        
        if($depth2 == '시/군/구') {
            $depth2 = null;
        }

        $data_stream = " '$name', '$id', '$encrypted_pw', '$depth1', '$depth2', '$lat', '$lng' ";
        $sql = "insert into members (name, id, password, depth1, depth2, latitude, longitude) values(".$data_stream.");";

        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('회원가입이 되었습니다!'); location.replace('login.html');</script>";
        } else {
            echo "실패 : " . mysqli_error($conn);
        }

        mysqli_close($conn);
    ?>
    </body>
</html>