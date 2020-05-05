var checked = false;

function check_ID() {
    var id = document.getElementById('id').value;
    if(id == '') {
        alert('아이디를 입력해주세요');

        return;
    }
    window.open('idCheck.php?id='+id, 'CheckWindow', 'width=500, height=120, top=150, left=100');

    checked = true;
}

function check_password() {
    var pw = document.getElementById('pw');
    var pwck = document.getElementById('pw_ck');

    if (pw.value != pwck.value) {
        pwck.value = '';
        pwck.placeholder = '다시 입력해주세요';
    }
}

function signup() {
    if(!checked) {
        alert("아이디 중복 확인을 해주세요");

        return false;
    }
}