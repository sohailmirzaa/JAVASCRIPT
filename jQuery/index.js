
$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({margin:"20%"});
});


$("body").keypress(function (e) { 
    $("h1").text(e.key);
});
$("h1").on("mouseover", function () {
    $('h1').css("color", "purple");
});
