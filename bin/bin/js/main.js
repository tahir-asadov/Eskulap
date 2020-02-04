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
    $('.hamburger').click(function(){
        $('.mobile-nav').toggleClass('show');
        $('.hamburger').toggleClass('is-active');
    });
});