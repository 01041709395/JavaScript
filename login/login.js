/* var vs let vs const */
var a; // 최근들어 안씀
function compareVariable() {
    let num1 = 10; // 상자안에 값이 들어가면 변경 가능 (변수)
    const num2 = 30; // 상자안에 값이 들어가면 변경 불가능 (상수)

    num1 = 20; // 먼저 들어간 값을 빼고 이 값을 넣기
    alert('num1 : ' +num1); //주황색 값은 정해진값
}



/* ID 란에 입력된 값을 팝업창에 띄우기 */
function popId() {
    let userId = document.getElementById('txt_id').value;

    if(!userId) {
        // .value==""
        alert('아이디를 입력해주세요.');
    } else {
        alert(userId);
    }
    
}        

//내부스크립트 작성 공간(나만의 함수 만들고 버튼 클릭 호출하기)
function myFunction() {
alert('1');
alert('2');
alert('3');
}