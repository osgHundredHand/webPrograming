$(document).ready(function(){
    curruntTimeTo('#realTimeTimer');
});

function curruntTimeTo(loc){ 
    //====================================
    // loc 로 targeting. (Realtime Timer, yyyy. mm. dd T hh:mm:ss)
    //====================================
    setInterval(function(){
        var date = new Date(); //realtime 처리 위해 Date 객체 자체가 인터벌 생성되어야 함 -> method를 호출한다고 초기 Date값이 reflesh 되지 않음.
        $(loc).html(date.toLocaleDateString() + date.toLocaleTimeString());
    },1000); 
}