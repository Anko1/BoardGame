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
    // $('#submit').click(submitFormFunction);
    $("form").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        var url = "http://localhost:8080/"; // the script where you handle the form input.

        var data = null;
        try {
            data = $(this).serialize();
        } catch (e) {
            data = e;
        }

        console.log('data', data);

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data) {
                alert(data);
                alert("Запит відправлено успішно. Найближчим часом наші менеджери з Вами зв\'яжуться");
                this.reset();
            }
        });


    });
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

const submitFormFunction = function () {

    let modelToUpload = {};

    modelToUpload.name = $('#first_name').val();
    modelToUpload.email = $('#email').val();
    modelToUpload.textarea = $('#textarea1').val();

    modelToUpload = JSON.stringify(modelToUpload);

    console.log(modelToUpload);

    $.ajax({ //example from jQuery docs (8)
        type: "POST",
        url: 'http://localhost:8080/',
        data: modelToUpload,
        success: function (responseFromServer) {
            console.log('This data`ve been returned from server: ', responseFromServer);
        },
    });

};