$(window).on('load',function() {
  $(".preloader-img").fadeOut("fast");
  $(".preloader").delay(1000).css("width", "0");
});

function openNav() {
    document.getElementById("mySidenav").style.width = "90%";
    $("#sidenav-content").delay(300).fadeIn("slow");
}

function closeNav() {
    $("#sidenav-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("mySidenav").style.width = "0";
    }, 500);
    
}