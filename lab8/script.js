$(document).ready(function () {

    let = url = window.location.protocol + "//" + window.location.host + window.location.pathname + 'index.html';
    let name;
    let email;

    // window.history.pushState({ path: url }, "mian", url);

    // window.history.pushState({ page: 1 }, "main", "index.html");

    $("#show").click(function (e) {
        e.preventDefault();
        $(".popup_container").fadeIn(450);

        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'new_url.html';
        console.log(newurl);

        // window.history.pushState({ path: newurl }, '', newurl);

        window.history.pushState({ page: 2 }, '', "new_url.html");
        console.log(window.history.length);

    });

    $("#scales").click(function (e) {
        let status = $('#scales').prop('checked');
        console.log(status);

        if (status) {
            $("#onSubmit").css("display", "block");
        }
        else {
            $("#onSubmit").css("display", "none");
        }

    });



    let hidePopup = function (e) {
        e.preventDefault();
        $(".popup_container").fadeOut(450);
        window.history.back();

        if (window.history.state == null) {
            // window.history.pushState({ path: url }, "main", url);

            window.history.pushState({ page: 1 }, '', "index.html");
        }

        console.log(history.state);
        console.log(window.history.length);
    }

    $("#hide").click(function (e) {
        hidePopup(e);
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
                        hidePopup(e);
                    } else {

                        alert("произошла ошибка при отпровлении: " + response.message);
                        hidePopup(e);
                    }

                }

            });

        });

    });



    $(window).bind('beforeunload', function (e) {
        hidePopup(e);
        name = $("#name").val();
        email = $("#email").val();


        return "Do you really want to leave now?";

    });

    const pageAccessedByReload = (
        (window.performance.navigation && window.performance.navigation.type === 1) ||
        window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload')
    );



    $(window).bind("popstate", function (e) {

        hidePopup(e);

        // alert(pageAccessedByReload);
        console.log("location: " + document.location + ", state: " + JSON.stringify(e.state));
    });

})