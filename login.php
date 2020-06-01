<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>

    <body>
    <?php
        $id = $_POST['id'];
        $pw = $_POST['pw'];

        $conn = mysqli_connect('localhost', 'toww', 'mirimww1!', 'toww');
        $sql = 'select * from members where id="' .$id. '"';

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_array($result)) {
                if(password_verify($pw, $row['password'])) {
                    echo '로그인 성공!<br><br>';

                } else {
                    echo '<script>alert("비밀번호를 확인해주세요"); history.go(-1);</script>';
                }
            }
        } else {
            echo '<script>alert("아이디 또는 비밀번호가 틀렸습니다"); history.go(-1);</script>';
        }

        mysqli_close($conn);
    ?>
    </body>
</html>