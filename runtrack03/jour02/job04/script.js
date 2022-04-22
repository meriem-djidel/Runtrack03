// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.

var keylog = {
                 // .addEventListener capture toute sles pressions sur les touches et les maintien dans un tableu

    cache :[],

     init : function (){

         window.addEventListener("keydown",function(evt){
             keylog.cache.push(evt.key);
             console.log( keylog.cache)
         })
         // Keydown et Keyup. Les événements keydown et keyup se produisent chaque fois que l’utilisateur appuie sur une touche
}
//  L’événement "DOMContentLoaded  ne se déclenche qu’une fois que le DOM a été complètement chargé
 };
 //  L’événement "DOMContentLoaded  ne se déclenche qu’une fois que le DOM a été complètement chargé
 window.addEventListener("DOMContentLoaded",keylog.init);
 console.log( keylog.cache)
