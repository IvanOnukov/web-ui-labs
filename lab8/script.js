//let = url = "/web_ui-labs/lab8/";

$("#show").click(function (e) {
    e.preventDefault();
    $(".popup_container").fadeIn(450);
    // window.history.pushState({ page: 1 }, "titel1", "index.html")

  
    window.history.pushState({ page: 1 }, "", "new_url.html")
    console.log(window.history.length);

});

function hidePopup(e) {
    e.preventDefault();
    $(".popup_container").fadeOut(450);
    //window.history.back();
   
    window.history.pushState({ page: 1 }, "", "index.html")
}

$("#hide").click(function (e) {
    e.preventDefault();
    $(".popup_container").fadeOut(450);
    window.history.pushState({ page: 1 }, "", "index.html")
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
                hidePopup(e);
                // window.history.back();
            }

        });

    });

});


$(window).on("popstate", function () {
    hidePopup(e);
});

