
$(function () {
    $(".carousel").carousel({ interval: 2000 });    //forces carousel to cycle @ 2000 secs
    $("#carouselButton").click(function () {        //once #carouselButton is clicked... peform what's in {}
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");       //clicking pause button pauses carousel
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play"); 
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }           //clicking pause button again plays the carousel and removes pause icon and replaces with play icon
    });
});

$(function () {
    $('#bookingButton').click(function () {         //once #bookingButton is clicked... peform what's in {}
        $('#bookingModal').modal('toggle')          //toggles #bookingModal
    });
});

$(function () {
    $('#cartNavButton').click(function () {         //once #cartNavButton is clicked... peform what's in {}
        $('#cartModal').modal('toggle')            //toggles #cartModal
    });
});