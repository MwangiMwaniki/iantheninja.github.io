$('.standard').addClass('animated fadeInLeft');
$('.button-collapse').sideNav()
//$(window).scroll(function(){
//    $("nav").hide();
//});


$(window).scroll(function() {
    $("nav").hide();
    clearTimeout($.data( this, "scrollCheck" ) );
    $.data(this, "scrollCheck", setTimeout(function() {
        $("nav").show("nav");
    }, 250) );

});
