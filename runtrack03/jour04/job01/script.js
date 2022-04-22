
 fetch('expression.txt')
.then(function(reponse){
    return reponse.text();
})
 .then(function(data){ 
    $("#button").click(function(){
        $("#para").load( "http://localhost/runtrack3/jour04/expression.txt" );
    }) 
 })  
          
