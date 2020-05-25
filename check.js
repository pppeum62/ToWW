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

/* 비밀번호 일치 여부 체크 */
function check_password() {
    var pw = document.getElementById('pw');
    var pwck = document.getElementById('pw_ck');

    if (pw.value != pwck.value) {
        pwck.value = '';
        pwck.placeholder = '다시 입력해주세요';
    }
}

/* 지역 설정 체크 */
function check_local() {
    var name = document.getElementById('name').value;
    var id = document.getElementById('id').value;
    var pw = document.getElementById('pw').value;
    var pwck = document.getElementById('pw_ck').value;

    if(name == '' || id == '' || pw == '' || pwck == '' || checked == false) {
        return;
    }

    var depth1 = document.getElementById('s1');
    var depth2 = document.getElementById('s2');
    var answer;

    if(depth1.value == '시/도') {
        answer = confirm("지역이 선택 되지 않았습니다.\n회원가입 후 지역을 재설정 할 수 있지만\n지역을 선택하지 않으면 계정 찾기가 불가능합니다.");
    } else {
        var userlocal = depth1.value + ' ' + depth2.value;
        answer = confirm("선택하신 지역은 " + userlocal + "입니다.\n맞습니까?");

        console.log(answer);
    }

}

/* 아이디 중복 확인 체크 */
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

    checked = false;
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

/* password 공백 제거 */
function input_pw() {
    var regExp = /\s/g;

    var pw = document.getElementById('pw');
    var userpw = pw.value;

    if(regExp.test(userpw)) {
        userpw = "";
        alert('비밀번호에 공백은 포함될 수 없습니다! 다시 입력해주세요.');
    }

    pw.value = userpw;
}