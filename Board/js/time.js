$(document).ready(function(){
    curruntTimeTo('#realTimeTimer');
});

function curruntTimeTo(loc){ 
    //====================================
    // loc 로 targeting. (Realtime Timer, yyyy. mm. dd T hh:mm:ss)
    //====================================
    
    setInterval(function(){
        var date = new Date(); //realtime 처리 위해 Date 객체 자체가 인터벌 생성되어야 함 -> method를 호출한다고 초기 Date값이 reflesh 되지 않음.
        
        var year = date.getFullYear();
        var month = date.getMonth()+1; // 0~11    + 1
        var dateFull = date.getDate(); // 1~31
        var day = date.getDay(); // 0~6
        var dayArrKor = ['일','월','화','수','목','금','토'];

        var datePrint = addZero(year) + '년' + addZero(month) + '월' + addZero(dateFull) + '일' + dayArrKor[day] + '요일';

        var hour = date.getHours();
        var minit = date.getMinutes();
        var sec = date.getSeconds();

        var timePrint = addZero(hour) + '시' + addZero(minit) + '분' + addZero(sec) +'초';

        
        $(loc).html(datePrint + timePrint);
    },1000); 
}
function addZero(num){ // 1월~9월, 1일~9일, 01시 등 1자리 월일시분초 앞자리에 0을 추가하는 함수
    if(num < 10){
        num = '0' + num;
    }
    return num ;
}