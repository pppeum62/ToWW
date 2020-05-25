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

/* id 공백 제거 */
function input_id() {
    var id = document.getElementById('id');
    var userid = id.value;
    
    userid = jQuery.trim(userid);
    userid = userid.replace(/\s/g,'');

    id.value = userid;
}

/* name 특수문자, 공백 체크 및 제거 */
function input_name() {
    var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    var regExp = /\s/g;
    var name = document.getElementById('name');
    var username = name.value;

    if(reg.test(username)) {
        username = username.replace(reg, "");

        alert("이름에는 특수문자가 포함될 수 없습니다!");
    }

    if(regExp.test(username)) {
        username = username.replace(regExp, "");
    }

    name.value = username;

    return;
}
}