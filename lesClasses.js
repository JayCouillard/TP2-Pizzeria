//créations des différentes classes nécessaires pour 
//l'entrée des caractéristiques de la(ou les) pizza désirée.
class Aliment{
    constructor(nomAliment,poidsAliment){
        this.nomAliment = nomAliment;
        this.poidsAliment= poidsAliment;
    }
    ajouterAliment(newAliment){
        return this.nomAliment = newAliment;
    }
    augmenterPoidsAliment(nouveauPoids){
         return this.poidsAliment = nouveauPoids;
    }
   
   
}
class Croute extends Aliment{
    constructor(nomAliment, poidsAliment,prixCroute){
        super(nomAliment, poidsAliment)
        this.prixCroute = prixCroute;
    }    

}

class Fromage extends Aliment{
    constructor(nomAliment, poidsAliment, prixFromage){
        super(nomAliment, poidsAliment)
        this.prixFromage = prixFromage;
    }

}

class Garniture extends Aliment{
    constructor(nomAliment, poidsAliment, prixGarniture){
        super(nomAliment, poidsAliment)
        this.prixGarniture = prixGarniture;
    }

}

class Epices extends Aliment{
    constructor(nomAliment,poidsAliment){
        super(nomAliment,poidsAliment)

    }
}

class Pizza{
    constructor(numeroPizza, taille, croute, fromage, garniture,prixComplet, tempsCuisson){
        this.numeroPizza = numeroPizza; 
        this.taille = taille; //1: petite 2:moyenne 3: grande
        this.croute = croute;
        this.fromage = fromage;
        this.garniture = garniture;
        this.prixComplet = prixComplet
        this.tempsCuisson = tempsCuisson; //minutes
    }
    afficherElements(){
        return "No Pizza: " + this.numeroPizza + "," +" Taille Pizza: " + this.taille + "," +
        " Croute: " + this.croute + "," + " Type Fromage: " + this.fromage +
         "," +" Type Garniture(s): " + this.garniture;
    }
    prixPizza(){ 
        
        return "Prix de la pizza: "(this.croute.prixCroute + this.fromage.prixFromage + this.garniture.prixGarniture)*this.taille;

    } 
}
class Commande{
    constructor(numeroPizza, dateCommande, heureCommande, nombrePizzas, montantTotal){
        this.numeroPizza = numeroPizza;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.nombrePizzas = nombrePizzas;
        this.montantTotal = montantTotal;
    }
    afficherCommande(){
        return "Numéro de la pizza: " + this.numeroPizza + "," + " Date de la commande: " + this.dateCommande +
        "," + " Heure de la commande: " + this.heureCommande + "," + " Nombre de pizzas : " +  this.nombrePizzas +
        "," + " Montant total: " + this.montantTotal ;
        
    }
    prixFinal(){
        return nombrePizzas * prixPizza();
    }

}
class Client{
    constructor(nom, prenom, numeroTelephone,adresseCourriel, commande){
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
        this.adresseCourriel = adresseCourriel;
        this.commande = commande;

    }
    afficherNomComplet(){
        return "Nom Complet: " + this.prenom + " " + this.nom ;
    }
    afficherInformations(){
        return "No Commande: "+ this.commande + "," + " Numéro de téléphone: " + this.numeroTelephone +
        "," + " Adresse courriel: " + this.adresseCourriel ;
    }
}
