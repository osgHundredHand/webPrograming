$(document).ready(function(){
    bannerSelectorCmd(6);
    bannerSliderCmd();
});

function bannerSelectorCmd(num){
    //=========================
    // 첫 li부터 num(max)까지 슬라이드 배너의 범위를 지정하면 동작하는 슬라이더 선택 함수.
    //=========================
    bannerSelectorInit(num);
    bannerSelectorExt();
}
function bannerSelectorInit(num){
    numbefore = null;
    before = $('#main_ban_before'); // before a href id
    next = $('#main_ban_next')      // next a href id
    maxSlidePageCount = parseInt(num);
}
function bannerSelectorExt(){
    $(before).click(swiftLeft);
    $(next).click(swiftRight);
    resizeCal();
}
function swiftLeft(){
    numbefore = currentBanNumb(before);
    numbefore = parseInt(numbefore) - 1;
    
    if(numbefore <= 1){ 
        numbefore = 1;  
    }
    bannerSelector(numbefore);
}
function swiftRight(){
    numbefore = currentBanNumb(next);
    numbefore = parseInt(numbefore) + 1;
    
    if(numbefore >= maxSlidePageCount){ 
        numbefore = maxSlidePageCount;  
    }
    bannerSelector(numbefore);
}
function currentBanNumb(beforeOrNext){
    return $(beforeOrNext).attr('href').substring(4,5);
}
function bannerSelector(numb){
    $(before).attr('href', '#ban' + numb);
    $(next).attr('href', '#ban' + numb);
}
function resizeCal(){
 //   $(window).resize(bannerScroll); 현재 Slider와 같이 동작 안하므로 비활성화함..
}
function bannerScroll(){
    var scrollXpos = $('.banner').width() * (numbefore - 1); // numbefore 초기값 null => 정수 0으로 취급
    (scrollXpos < 0) ? scrollXpos = 0 : scrollXpos;        // numbefore 초기값 null => 정수 0으로 취급되어 page reload 초기 width가 음수로 나오는 부분을 0으로 set
    $('.banner ol').scrollLeft(scrollXpos);
}

function bannerSliderCmd(){
    bannerSliderInit();
    bannerSlider();
    mouseHoverStop();
    mouseHoverRestart();
}
function bannerSliderInit(){
    toggle = 1;
    i = 0;
}
function bannerSlider(){
    $banner = $('.banner');
    
    if(toggle == 1){
        interval = setInterval(slide,1);
    }
    if(toggle == -1){
        interval = setInterval(reverseSlide,1);
    }
}

function slide(){
    bannerWidth = $banner.width();
    maxScrollWidth = bannerWidth * (maxSlidePageCount - 1);
    i=i+1;
    if(i >= maxScrollWidth){
        toggle = -1;
        clearInterval(interval);
        bannerSlider();
    }
    mouseHoverStop();
    $('.banner ol').scrollLeft(i);
    
}
function reverseSlide(){
    var minScrollWidth = 0;
    i=i-1;
    if(i <= minScrollWidth){
        toggle = 1;
        clearInterval(interval);
        bannerSlider();
    }
    mouseHoverStop();
    $('.banner ol').scrollLeft(i);
}

function mouseHoverStop(){
    $banner.mouseenter(function(){
        clearInterval(interval);
    });
}
function mouseHoverRestart(){
    $banner.mouseleave(function(){
        bannerSlider();
    });
}