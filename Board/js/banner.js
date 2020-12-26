$(document).ready(function(){
    bannerSelector();
});

function bannerSelector(){
    var numbefore = null;
    var before = $('#main_ban_before');
    var next = $('#main_ban_next')
    
    $(before).click(function(){
        numbefore = $(before).attr('href').substring(4,5);
        numbefore = parseInt(numbefore) - 1;
        if(numbefore <= 1){ // 배너 시작 지점 값 => 수정 시 두 줄 값 전부 수정!!
            numbefore = 1;  // 배너 시작 지점 값 => 수정 시 두 줄 값 전부 수정!! => 함수화 시켜서 코드 하나로 빼보자.
         }
        $(before).attr('href', '#ban' + numbefore);
        $(next).attr('href', '#ban' + numbefore);
    });
    $(next).click(function(){
        numbefore = $(next).attr('href').substring(4,5);
        numbefore = parseInt(numbefore) + 1;
        if(numbefore >= 4){ // 배너 마지막 지점 값 => 수정 시 두 줄 값 전부 수정!!
            numbefore = 4;  // 배너 마지막 지점 값 => 수정 시 두 줄 값 전부 수정!!
        }
        $(before).attr('href', '#ban' + numbefore);
        $(next).attr('href', '#ban' + numbefore);
    });
    
}