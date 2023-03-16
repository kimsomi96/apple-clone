document.addEventListener('DOMContentLoaded',function(){
    const splide = new Splide( '.splide' );
    splide.mount();

    const silver_btn = document.querySelector('.silver_btn');
    const spacegray_btn = document.querySelector('.spacegray_btn');
    const s_img = document.querySelector('.silver');
    const sg_img = document.querySelector('.spacegray');
    const menu = document.querySelectorAll('a.abc')

    silver_btn.addEventListener('click',function(e){
        sg_img.classList.add('on');
        s_img.classList.remove('on');
        e.currentTarget.classList.add('on');
        spacegray_btn.classList.remove('on');
    });
    spacegray_btn.addEventListener('click',function(e){

        s_img.classList.add('on');
        sg_img.classList.remove('on');
        e.currentTarget.classList.add('on');
        silver_btn.classList.remove('on');
    });

    menu.addEventListener('click',function(e){
        e.currentTarget.classList.add('on');
    });

});

$(window).ready(function(){
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:30,
    //     nav:true,
    //     center:true,
    //     responsive:{
    //         0:{
    //             items:3
    //         },
    //         735:{
    //             items:3
    //         },
    //         1069:{
    //             items:3
    //         }
    //     }
    // })
    $('.loop').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:30,
        nav:true,
        duration:500,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1.6,
            }
        }


    });
})
