$(document).ready(function() {
    // 스크롤
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $("#header_wrap").css('backgroundColor','white');
        }
        else{
            $("#header_wrap").css("backgroundColor" , "rgba(0,0,0,0)");  
        }
    })
});