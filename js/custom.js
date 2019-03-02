$(window).on('load', function(){
    
    $(window).on('scroll', (e) =>{
        var scroll = $(window).scrollTop();
        var wH = $(window).innerHeight();

        if(scroll >= $('#section01').position().top){
            $('.nav-list li').eq(0).addClass('active').siblings().removeClass('active');
            if(scroll >= $('#section02').position().top){
                $('.nav-list li').eq(1).addClass('active').siblings().removeClass('active');
                if(scroll >= $('#section03').position().top){
                    $('.nav-list li').eq(2).addClass('active').siblings().removeClass('active');
                    if(scroll >= $('#section04').position().top){
                        $('.nav-list li').eq(3).addClass('active').siblings().removeClass('active');
                    }
                }
            }
        }

    });

});

$('.nav-list').on('click', () => {
    $('.nav-list').toggleClass('active');
});

$('a.anchor').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $("html, body").animate({scrollTop: $(id).offset().top }, 500);
});