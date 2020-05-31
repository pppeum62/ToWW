// 서울특별시청의 좌표
var latitude = 37.5615364;      // 위도
var longitude = 126.9745681;    // 경도

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();  

// 키워드로 장소를 검색합니다
// searchPlaces();

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {
    var depth = document.getElementById("s2");

    var keyword = depth.value + "청";

    if(keyword == "시/군/구청") {
        return;
    }

    console.log(keyword);

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB); 
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        PlacesData(data);

    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === kakao.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    }
}

// 검색 결과 목록을 나타내는 함수입니다
function PlacesData(places) {
    var bounds = new kakao.maps.LatLngBounds();
    var placePosition = new kakao.maps.LatLng(places[0].y, places[0].x);

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기 위해 LatLngBounds 객체에 좌표를 추가
    bounds.extend(placePosition);

    console.log(places[0]);
    console.log(places[0].y);
    console.log(places[0].x);

    var lat = places[0].y;
    var lng = places[0].x;

    var latfm = document.getElementById('lat');
    var lngfm = document.getElementById('lng');

    latfm.value = lat;
    lngfm.value = lng;
}