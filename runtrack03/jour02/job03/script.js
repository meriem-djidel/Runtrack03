
const button = document.getElementById("button");
const compteur = document.getElementById("compteur")
var compt = 0;
function addone(){
compteur.innerText = compt;
    
}
window.onload = addone;
button.onclick = () => {
     compt++  ;
      addone();

}

console.log(compteur);