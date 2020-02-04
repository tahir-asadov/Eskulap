$(function(){
    // $('.header').stick(300);
    // $('.section').gridify();
    // $('.scrollex').scrollex({
    //     enter: function(){
    //         alert('entered');
    //     },
    //     leave: function(){
    //         alert('left')
    //     }
    // });
    // window.sr = ScrollReveal();
    // sr.reveal('.offer', { duration: 300 }, 300);
    $('.hamburger').click(function(){
        $('.mobile-nav').toggleClass('show');
        $('.hamburger').toggleClass('is-active');
    });
    
});