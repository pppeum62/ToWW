<?php
    header("Content-type: text/html; charset: utf-8");

    $id = $_REQUEST['id'];

    $conn = mysqli_connect('localhost', 'toww', 'mirimww1!', 'toww');

    /* 아이디 중복 확인 */
    $sql = 'select * from members where id="'.$id.'"';
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    $returnStr = "";

    if($row['id'] != $id) {
        // 사용할 수 있는 아이디일 경우
        $returnStr = "1";
    } else {
        // 사용할 수 없는 아이디일 경우
        $returnStr = "0";
    }

    mysqli_free_result($result);
    mysqli_close($conn);

    echo $returnStr;
?>