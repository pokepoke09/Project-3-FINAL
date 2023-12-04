//resource link: https://www.w3schools.com/jquery/default.asp

$("#trash1").show();
// $("#secret-text").hide();
$("#trash2").hide();
$("#trash3").hide();
$("#trash4").hide();
$("#trash5").hide();
$("#trash6").hide();
$("#trash7").hide();
$("#following-text").hide();





$("#trash1").click(function(){
    $("#trash1").hide();
    $("#waves").show();
});

// $("#wave").click(function(){
//     $("#cat-img").hide();
//     $("#happy-img").show();
// });

// $("#toggle-text").click(function(){
//     $("#secret-text").toggle();
// })

// $("#change-bg-color").click(function(){
//     $("#home-screen").css("background-color", "khaki")
// })

$("#trash1").click(function(){

    $("#waves").addClass("animate-img");
    setTimeout(
        function(){

        $("#waves").removeClass("animate-img");
    }, 10000);


    $("#trash2").click(function(){
        $("#trash2").hide();
    });
    
    $("#trash3").click(function(){
        $("#trash3").hide();
    });

    $("#trash4").click(function(){
        $("#trash4").hide();
    });

    $("#trash5").click(function(){
        $("#trash5").hide();
    });
    
    $("#trash6").click(function(){
        $("#trash6").hide();
    });
    $("#trash7").click(function(){
        $("#trash7").hide();
    });

    $("#reset").click(function(){
        $("#trash1").show();
    });

$("#trash2").show();
$("#trash3").show();
$("#trash4").show();
$("#trash5").show();
$("#trash6").show();
$("#trash7").show();
$("#following-text").show();

})



// var trash2 = false;
// var trash3 = false;
// var trash4 = false;
// var trash5 = false;
// var tarsh6 = false;

// $("#trash1").click(function(){
//     $("#trash1").hide();
//     $("#cat-img").show();

//     isTrash1Hidden = true;
// $("#happy-img").click(function(){
//     $("#happy-img").hide();
//     $("#cat-img").show();

