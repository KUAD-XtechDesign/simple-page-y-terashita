
$(function(){

    $("slide").on("click",()=>{
      $("#slide").slideToggle();
    })

    $("#slide").slick({dots:true})
    
});