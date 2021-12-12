$("#show").click(function (e) {
    e.preventDefault();
    $(".popup_container").fadeIn(450);

    history.pushState({ page: 1 }, "page 1", "new-URL.html")
    console.log(window.history.length);

});

function hidePopup() {
    // e.preventDefault();
    $(".popup_container").fadeOut(450);
    window.history.back();
}

$("#hide").click(function (e) {
    e.preventDefault();
    $(".popup_container").fadeOut(450);
    window.history.back();

});


$(function () {

    $(".ajaxForm").submit(function (e) {

        e.preventDefault();

        var href = $(this).attr("action");

        $.ajax({

            type: "POST",

            dataType: "json",

            url: href,

            data: $(this).serialize(),

            success: function (response) {

                if (response.status == "success") {

                    alert("мы получили вашу заявку");
                } else {

                    alert("произошла ошибка при отпровлении: " + response.message);  
                }
                hidePopup(); 
                window.history.back();

            }

        });

    });

});


$(window).on("popstate", function () {
    hidePopup();
});


$('.ajaxForm').saveStorage();