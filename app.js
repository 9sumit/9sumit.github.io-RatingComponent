$(document).ready(function() {
    var First = '';
    $("button").mouseenter(function() {
        $("button").css({
            "background-color": "hsl(0, 0%, 100%)",
            "color": "hsl(25, 97%, 53%)"
        })
    });
    $("button").mouseout(function() {
        $("button").css({
            "background-color": "hsl(25, 97%, 53%)",
            "color": "hsl(0, 0%, 100%)"
        })
    });
    $("button").click(function() {
        $(location).prop('href', 'thankyou.html?val=' + First)
    });
    $("li").click(function() {
        var Id = $(this).attr("id");
        First = Id;
        for (var i = Id; i <= 5; i++) {
            $("#" + i).css({
                "background-color": "hsl(213, 19%, 18%)",
                "color": "hsl(217, 12%, 63%)"
            })
        }
        for (var i = Id; i >= 1; i--) {
            $("#" + i).css({
                "background-color": "hsl(25, 97%, 53%)",
                "color": "hsl(0, 0%, 100%)"
            })
        }
    })
    $("li").mouseenter(function() {
        if ($(this).css("background-color") !== "rgb(251, 116, 19)") {
            $(this).css({
                "background-color": "hsl(217, 12%, 63%)",
                "color": "hsl(0, 0%, 100%)"
            })
        } else {
            $(this).css({
                "background-color": "hsl(25, 97%, 53%)",
                "color": "hsl(0, 0%, 100%)"
            })
        }
    })
    $("li").mouseout(function() {
        if ($(this).css("background-color") == "rgb(251, 116, 19)") {
            $(this).css({
                "background-color": "hsl(25, 97%, 53%)",
                "color": "hsl(0, 0%, 100%)"
            })
        } else {
            $(this).css({
                "background-color": "hsl(213, 19%, 18%)",
                "color": "hsl(217, 12%, 63%)"
            })
        }
    })

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    var MyRating = getUrlVars()["val"];
    let Rating = `You selected ${MyRating} out of 5`;
    document.getElementById("rating").innerHTML = Rating;
});