<!DOCTYPE html>
<html>

<head>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="script.js"></script>
    <script type="text/javascript"></script>
</head>

<body>
    <h2 style="color:pink" >Inscription</h2>
    <form method="POST" id="inscription" name="inscription">
        <input type="text" name="nom" id="nom" placeholder="Nom :" required><br>
        <input type="text" name="prenom" id="prenom" placeholder="Prénom :" required><br>
        <input type="email" name="email" id="email" placeholder="Email :" required><br>
        <input type="password" name="password" id="password" placeholder="Mot de passe :" required><br>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmer votre mot de passe" required><br>
        <input type="submit" value="inscription">
    </form>
    <p style="color:red" id="erreur"> </p>

    <script src="script.js"></script>
    <script type="text/javascript"></script>
</body>

</html>