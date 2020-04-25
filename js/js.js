/*.programming-section,.Graphic-section,markiting-section*/
$(document).ready(function(){
    $(".p1").click(function(){
   $("#soup").show();
        $("#burger").hide();
         $("#pizza").hide();
        
    });
});
$(document).ready(function(){
    $(".p2").click(function(){
           $("#burger").show();
            $("#soup").hide();
         $("#pizza").hide();
        
    });
});
$(document).ready(function(){
    $(".p3").click(function(){
         $("#pizza").show();
        $("#soup").hide();
        $("#burger").hide();
        
    });
});


