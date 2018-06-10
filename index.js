var swiper = new Swiper('.swiper-container.type1', {
    effect: 'coverflow',
    // freeMode: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 380,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop:true,
    spaceBetween: 30,
});



$('.img_box').on('click', function(){
    var _thisBox = $(this);
    var thisImg = $(this).find('.img');
    var allImgBox = $('.img_box .img');

    if($(this).hasClass('active')){
        TweenMax.to(thisImg, .5, {width:'150px',height:'150px'} );
        setTimeout(function(){
            _thisBox.removeClass('active');
        },500);
        // $(this).removeClass('active');
        
    } else {
        TweenMax.to(allImgBox, .5, {width:'150px',height:'150px'} );
        TweenMax.to(thisImg, .5, {width:'100%',height:'300px'} );
        $(this).addClass('active').siblings('a').removeClass('active');
        
    }
});



var navLi = $('.nav_mn > li');


$('#menuOpen').click(function(){
    TweenMax.staggerFrom(navLi, 0.5, {
    opacity:0,
    y:20,
    ease:Power2.easeInOut
    }, 0.2);

    TweenMax.fromTo('.nav_mn',0.5,{
    xPercent:-100},
        {xPercent:0, display:'block',ease: Power2.easeInOut}
    );

});



  