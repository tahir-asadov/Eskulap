$(function(){    
    $('.section-clients').scrollex({
        enter: function(){
            $('.section-clients').addClass('fadeIn');
        },
        leave: function(){
            $('.section-clients').removeClass('fadeIn');
        }
    });
    $('.section-clients').scrollex({
        enter: function(){
            $('.section-clients').addClass('fadeIn');
        },
        leave: function(){
            $('.section-clients').removeClass('fadeIn');
        }
    });
    window.sr = ScrollReveal();
    sr.reveal('.section-expertise .icon', { duration: 300 }, 300);
    sr.reveal('.work-offset', { duration: 300 }, 300);
    sr.reveal('.section-hire h2', { duration: 600, delay: 500 }, 300);
    sr.reveal('.section-hire a', { duration: 600, delay: 700 }, 300);
    
    $('.menu, .menu-dark').click(function(){
        $('.nav').toggleClass('show');
    });
    
});