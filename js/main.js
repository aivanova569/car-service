$(".classes-item").not(":first").hide();
    $(".classes__wrapper .tab").click(function() {
        $(".classes__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".classes-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".img-citroen").not(":first").hide();
    $(".services-change .tab-li-citroen").click(function() {
        $(".services-change .tab-li-citroen").removeClass("active").eq($(this).index()).addClass("active");
        $(".img-citroen").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".img-mazda").not(":first").hide();
    $(".services-change .tab-li-mazda").click(function() {
        $(".services-change .tab-li-mazda").removeClass("active").eq($(this).index()).addClass("active");
        $(".img-mazda").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".img-mercedes").not(":first").hide();
    $(".services-change .tab-li-mercedes").click(function() {
        $(".services-change .tab-li-mercedes").removeClass("active").eq($(this).index()).addClass("active");
        $(".img-mercedes").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

