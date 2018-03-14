$(document).ready(function () {
    // 3D page
    $(".main").tiltedpage_scroll({
        sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
        angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
        opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
        scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
        outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
    });
    // Hide content until click
    // show crosshair
    $(".init").on("click", function(){
        $(".clickMe").removeClass("hide");
    });       
    // show all hidden item , call timeline
    $(".clickMe").on("click", function(){               
        $(".hide").removeClass("hide");
        // plugin
        $("#about").scrollintoview();
        $(".timeline").after("<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1c0Rd6mo1XzySrUvOifFUXJWWhSHGCr1PkDxvayqye5w&amp;font=Default&amp;lang=en&amp;initial_zoom=5&amp;height=500' width='100%' height='500' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>");
    });
    // experimental: scroll on click
    $("h2").on("click", function(){
        // e' offset - vh/2
        let off = $(this).parents(".page_setting").offset().top + $(window).innerHeight() / 1.5;
        $("html").animate({ scrollTop: off });
    });
    // scroll on click
    $("img.d-block.w-100").on("click", function(){
        let off = $(this).offset().top + $(window).height()/1.4;
        $("html").animate({ scrollTop: off });
    });
    // show/hide navbar on scroll
    $(document).on("scroll", function(){
        if ($("html").scrollTop() >= $(window).innerHeight())
        {
            $(".navbar").removeClass("bg-light");
        }
        else if ($("html").scrollTop() < $(window).innerHeight())
        {
            $(".navbar").addClass("bg-light");
        }
    });
    // nav bar animation
    $(".navbar-nav > li > a").on("click", function(){
        $(".navbar-collapse").removeClass("show");
    });
});