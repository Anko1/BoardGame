$(function() {
    $(".rslides").responsiveSlides({
        speed: 4000,
        timeout: 7000,
        nav: true
    });
});
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
});


// $(document).ready(function(){
//     $(".clickOnMeForSecondSection").click(function(){
//         alert("clicked");
//     });
// });
$(function() {
    $('.clickOnMeForSecondSection').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

$('#main-nav').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 750)
    {
        $('#main-nav').fadeIn();
    }
    else
    {
        $('#main-nav').fadeOut();
    }
});