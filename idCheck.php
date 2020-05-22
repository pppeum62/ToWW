<?php
    $id = $_GET['id'];

    $conn = mysqli_connect('localhost', 'toww', 'mirimww1!', 'toww');

    /* 아이디 중복 확인 */
    $sql = 'select * from members where id="'.$id.'"';
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        echo '<script>alert("중복된 아이디가 있습니다. 다른 아이디를 입력해주세요."); window.close();</script>';
    } else {
        echo '<script>alert("사용 가능한 아이디입니다!"); window.close();</script>';
    }
?>