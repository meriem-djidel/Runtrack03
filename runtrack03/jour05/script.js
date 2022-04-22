
  
    document.getElementById("password").addEventListener("input",function(){
        var mdp = document.getElementById("erreur"); 
        
        if(this.value != document.getElementById("confirmPassword").value){
            mdp.innerHTML = "Entrer des mots de passe identique" ;
        }else{
            mdp.innerHTML = "";
        }
    });
    document.getElementById("inscription").addEventListener("submit",function(e){
    var erreur; 
   
    if(erreur){
        //La méthode preventDefault () est utilisée pour empêcher tout formulaire d’élément de se comporter par défaut
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else{
        alert("Vous ête inscrit");
    }
    
    });
    var nom = document.getElementById("nom")
    var prenom = document.getElementById("prenom")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var confirmPassword = document.getElementById("confirmPassword")
    

    


// Job 01
// Commencez par créer une base de données “utilisateurs” contenant une
// table “utilisateurs” et ayant comme champs “id”, “nom”, “prenom”, “email” et
// password.
// Ensuite, créez une page d’accueil qui contient un paragraphe “Bonjour
// $prenom” si l’utilisateur est connecté, sinon deux liens vers une page
// “inscription.php” et une page “connexion.php”. Ces deux pages permettent
// aux utilisateurs de créer un compte et de se connecter. L’ensemble des
// vérifications habituelles doivent se faire sans rafraîchissement de la page.
// (Prénom/Nom renseignés, mots de passe identiques et suffisamment
// complexes, adresse email déjà prise, au bon format...) Un message lié à
// chaque erreur doit être affiché en dessous du formulaire le cas échéant.
// Lorsqu’une inscription est validée, l’utilisateur est renvoyé sur la page de
// connexion. Lorsqu’il se connecte, il est renvoyé vers la page d’accueil.