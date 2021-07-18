$(window).on('load', function(event) {
    $('.load').delay(1000).fadeOut('slow');
})
$(document).ready(function () {
    $('#autoplay').slick({
        dots: true,
        dotsClass: 'dot-class',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 ,
        arrows:false,
    });
    $('.filter .nav-item a').click(function(){
        var _type = $(this).text()
        $('.filter .nav-item a').each(function(){
            if($(this).text()!=_type){
                $(this).removeClass('active')
            }else{
                $(this).addClass('active')
            }
        })
        $('.list-image .image-item').each(function(){
            if($(this).hasClass(_type)){
                $(this).removeClass('hidden')
            }else{
                $(this).addClass('hidden')
            }

        })
    })
});

