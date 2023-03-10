document.addEventListener('DOMContentLoaded',function(){


    const silver_btn = document.querySelector('.silver_btn');
    const spacegray_btn = document.querySelector('.spacegray_btn');
    const s_img = document.querySelector('.silver');
    const sg_img = document.querySelector('.spacegray');

    silver_btn.addEventListener('click',function(){
        s_img.classList.add('on');
        sg_img.classList.remove('on');

    })
    spacegray_btn.addEventListener('click',function(){

        sg_img.classList.add('on');
        s_img.classList.remove('on');
    })
});