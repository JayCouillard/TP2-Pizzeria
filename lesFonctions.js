//Fonctions servant à vérifier les différentes entrées données par l'utilisateur.
function verifierNumeroTelephone(numero){
    
    
    for(var i = 0; i < numero.length; i++ ){
        if(numero <0 && numero > 9){
        console.log("Erreur, le caractère n'est pas compris entre 0 et 9")
        }
        else  if(numero.length == 10){
            console.log("Erreur, le numéro de téléphone doit être composé de 10 chiffres") 
        } 
        else
        return "Vrai";
        
    }
    
        
}

function verifierEntier(entier){
    if(entier < 0 && /[^0-9]/ )
    console.log("Erreur, la quantité entrée doit-être un entier!")
}

function verifierCodePostal(codePostal){
    if(codePostal.length != 6){
    console.log("Erreur, le code postal doit être composé de 6 caractères.")
        for(var i =0; i <= codePostal.length ; i++)
            new RegExp(/^[abceghjklmnprstvxy][0-9][abceghjklmnprstvwxyz]\s?[0-9][abceghjklmnprstvwxyz][0-9]$/i)
    
   
    }
    else
    return "Vrai";
}

function afficherOucacher() {
    var element = document.getElementById("sousmenu");
    if (element.className == "cache") {
        element.classList.remove("cache")
    } else {
        element.getElementsByClassName.add("cache")
    };
}

/**
* 
* @param {string} selectId : id du select à charger 
* @param {object} liste : liste avec les éléments
*/
    
    function chargerListeSelect(selectId, liste){
        var s = "<option></option>";
        for(var i=0 ; i<liste.length ; i++){
            s += '<option value="'+ i +'">'+liste[i].lireNom()+'</option>';
        }
        var element = document.getElementById(selectId);
        element.innerHTML = s;
    }   /*ne marche pas*/