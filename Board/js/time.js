$(document).ready(function(){
    timerCmd('#realTimeTimer');
    // curruntTimeTo('#realTimeTimer');
});
function timerCmd(loc){
    //====================================
    // loc 로 targeting. (Realtime Timer, yyyy년 mm월 dd일 D요일 hh시 mm분 ss초)
    //====================================
    init(loc);
    timerInit();
    clock(); 
    timerExt();
}
function init(loc){
    $loc = $(loc);
}
function timerInit(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth()+1; // 0~11    + 1
    dateFull = date.getDate(); // 1~31
    day = date.getDay(); // 0~6
    dayArrKor = ['일','월','화','수','목','금','토'];

    hour = date.getHours();
    minit = date.getMinutes();
    sec = date.getSeconds();
}
function clock(){
    //====================================
    // new Date 객체를 생성 후 인스턴스값을 받아 시간을 출력하는 함수
    //====================================
    timerInit();
    timerPrintTo( datePrint(year,month,dateFull,day), timePrint(hour,minit,sec) );
}
function timerExt(){
    //====================================
    // 시간 출력 함수를 0.5ms간격으로 지속 출력
    //====================================
    setInterval(clock,500);
}
function datePrint(year,month,date,day){ //hhhh년 mm월 dd일 d요일
    var result = '';
    result = addZero(year) + '년 ' + addZero(month) + '월 ' + addZero(date) + '일 ' + dayArrKor[day] + '요일 ';
    return result;
}
function timePrint(hour,min,sec){
    var result = '';
    result = addZero(hour) + '시 ' + addZero(min) + '분 ' + addZero(sec) +'초 ';
    return result;
}
function addZero(num){ // 1월~9월, 1일~9일, 01시 등 1자리 월일시분초 앞자리에 0을 추가하는 함수
    if(num < 10){
        num = '0' + num;
    }
    return num ;
}
function timerPrintTo(yearToDay,hourToSec){
    $($loc).html(yearToDay + hourToSec);
}
