
$(function(){

    $("slide").on("click",()=>{
      $("#slide").slideToggle();
    })

    $("#slide").slick({
        autoplay: true,
        dots:true,
    })

});