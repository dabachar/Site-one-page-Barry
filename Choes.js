document.getElementById("js").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    let telephone = document.getElementById("message");

if (!nom.value) {
    erreur = "Veuillez saisir un nom";
}
if (!email.value) {
    erreur = "Veuillez saisir un email";
}

if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Message envoyé. Merci de nous avoir contacté.Nous vous répondrons dans les 24h!");
}
  
});