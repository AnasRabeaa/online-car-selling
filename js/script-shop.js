let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#register-btn').onclick = () =>{
    document.querySelector('.register-form-container').classList.toggle('active');
}

document.querySelector('#close-register-form').onclick = () =>{
    document.querySelector('.register-form-container').classList.remove('active');
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('.search-container').classList.toggle('active');
}

document.querySelector('#close-search').onclick = () =>{
    document.querySelector('.search-container').classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

window.onload = () =>{
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

//popular
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disabbleOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        991: {
        slidesPerView: 3,
        },
    },
});


//top
$(document).ready(function(){

    $(window).on('scroll load',function(){
    
        if($(window).scrollTop() > 0){
        $('.top').show();
        }else{
        $('.top').hide();
        }
    });

    // smooth scrolling 

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

        },
        500, 
        'linear'
        );

    });

});



// chat
$(function() {
    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })
    
    $("#chat").click(function() {    
        $("#chat").toggle('scale');
        $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
        $("#chat").toggle('scale');
        $(".chat-box").toggle('scale');
    })
    
})