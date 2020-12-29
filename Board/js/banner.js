$(document).ready(function(){
    bannerSelectorCmd();
});

function bannerSelectorCmd(){
    bannerSelectorInit();
    bannerSelectorExt();
    resizeCal();
}
function bannerSelectorInit(){
    numbefore = null;
    before = $('#main_ban_before');
    next = $('#main_ban_next')
}
function bannerSelectorExt(){
    $(before).click(function(){
        numbefore = currentBanNumb(before);
        numbefore = parseInt(numbefore) - 1;
        if(numbefore <= 1){ 
            numbefore = 1;  
        }
         bannerSelector(numbefore);
    });
    $(next).click(function(){
        numbefore = currentBanNumb(next);
        numbefore = parseInt(numbefore) + 1;
        if(numbefore >= 4){ // 배너 갯수 추가시 li 갯수에 맞춰 증설 => 수정 시 두 줄 값 전부 수정!!
            numbefore = 4;  // 배너 갯수 추가시 li 갯수에 맞춰 증설 => 수정 시 두 줄 값 전부 수정!!
        }
        bannerSelector(numbefore);
    });
}
function currentBanNumb(beforeOrNext){
    return $(beforeOrNext).attr('href').substring(4,5);
}
function bannerSelector(numb){
    $(before).attr('href', '#ban' + numb);
    $(next).attr('href', '#ban' + numb);
}
function resizeCal(){
    $(window).resize(function(){
        var scrollXpos = $('.banner').width() * (numbefore - 1); // numbefore 초기값 null => 정수 0으로 취급
        (scrollXpos < 0) ? scrollXpos = 0 : scrollXpos;        // numbefore 초기값 null => 정수 0으로 취급되어 page reload 초기 width가 음수로 나오는 부분을 0으로 set
        $('.banner ol').scrollLeft(scrollXpos);
    });
}
