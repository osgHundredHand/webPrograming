$(document).ready(function(){
    curruntTime();
});

function curruntTime(){
    var date = new Date();
    setInterval(function(){
        $('.global_timer').html(date.toLocaleDateString() + date.toLocaleTimeString());
    },1000);
    
}