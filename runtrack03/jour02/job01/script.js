
// La méthode getElementById() de Document renvoie un objet Element dont la propriété id correspond .
// inner html recupere tout le contenue se trouvant a l'interieur de la balise

function citation(){
    document.getElementById("button").innerHTML=document.getElementById("citation").innerHTML
}
var article = document.getElementById("citation");
    console.log(article.innerHTML);
 


