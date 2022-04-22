
$(document).ready(function(){
    $(".mone").hide();

    $("#button").click(function(){
        $(".twitter").hide("fast",function(){

        })
        $(".mone").show("fast",function(){

        }); $("#button").click(function(){
        $(".mone").hide("fast",function(){
            
        })
        $(".twitter").show("fast",function(){

        });
    });
    });
   
});

 $("#hide").click(function(){
$("*").hide("fast")

})