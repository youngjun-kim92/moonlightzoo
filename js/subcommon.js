$(document).ready(function() {
    $(".btn").click(function () {
        if($(".btn").hasClass('btn_active')) {
            $(this).removeClass('btn_active');
            $('.hidden_menu').slideUp('slow');
        }
        else {
            $(this).addClass('btn_active');
            $('.hidden_menu').slideDown('slow');
        }   
    });
    $(".share_btn").click(function () {
        if($(".share_btn").hasClass('share_active')) {
            $(this).removeClass('share_active');
        }
        else {
            $(this).addClass('share_active');
        }
    });
    let sw=false;
    $('.share_btn').click(function () {
        sw=!sw;
        if(sw){
            $('.hide_area').animate({
                left:0
            },'fast');
        }
        else {
            $('.hide_area').animate({
                left:200
            },'fast');
        } 
    });    
 });