 $(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar ul').toggleClass('active');


    

    });
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar ul').removeClass('active') ;

    });
    $('.slider-container ').owlCarousel({
        loop:true,
        margin:5,
        dots:false,
        nav:true,
        
        items:1,
        autoplay:true,
        responsive:{
            400:{
                items:1
            },
            600:{
                items:1
            },
        }
    });
    


});