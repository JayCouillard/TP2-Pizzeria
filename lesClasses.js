//créations des différentes classes nécessaires pour 
//l'entrée des caractéristiques de la(ou les) pizza désirée.
class Aliment{
    constructor(nomAliment,poidsAliment, prixAliment){
        this.nomAliment = nomAliment;
        this.poidsAliment= poidsAliment;
        this.prixAliment = prixAliment;
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
class Taille{
    constructor(nom, diametre, facteur){
        this.nom = nom;     
        this.diametre = diametre;   //1:petite 2 : Moyenne 3: Grande
        this.facteur = facteur;
    }
    multiplicationFacteur(){
        return prixAliment * facteur;
    }
}

class Pizza extends Taille{
    constructor(numeroPizza, taille, croute, fromage, garniture,prixComplet, tempsCuisson){
        super(nom, diametre, facteur)
        this.numeroPizza = numeroPizza; 
        this.taille = this.diametre; //1: petite 2:moyenne 3: grande
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
        
        return (this.croute.prixCroute + this.fromage.prixFromage + this.garniture.prixGarniture)*this.taille;

    } 
}
class Commande extends Client{
    constructor(numeroPizza, dateCommande, heureCommande, nombrePizzas, montantTotal, tps, tvq,client){
        super(nom, prenom);
        this.numeroPizza = numeroPizza;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.nombrePizzas = nombrePizzas;
        this.montantTotal = montantTotal;
        this.tps = 0.05;
        this.tvq = 0.09975;
        this.client = nom +", "+ prenom;
    }
    afficherCommande(){
        return "Numéro de la pizza: " + this.numeroPizza + "," + " Date de la commande: " + this.dateCommande +
        "," + " Heure de la commande: " + this.heureCommande + "," + " Nombre de pizzas : " +  this.nombrePizzas +
        "," + " Montant total: " + this.montantTotal ;
        
    }
    prixFinal(){
        return (nombrePizzas * prixPizza())*=(this.tps + this.tvq);
    }

}
class Client{
    constructor(nom, prenom, numeroTelephone,adresseCourriel){
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
        this.adresseCourriel = adresseCourriel;
        

    }
    afficherNomComplet(){
        return "Nom Complet: " + this.prenom + " " + this.nom ;
    }
    afficherInformations(){
        return  "Numéro de téléphone: " + this.numeroTelephone +
        "," + " Adresse courriel: " + this.adresseCourriel ;
    }
}

//tests pour classe Pizza
taille1 = new Taille("Taille","Moyenne",2);
croute1 = new Croute("Croute Mince",20 ,5);
fromage1 = new Fromage("Mozzarrella",4, 10 );
garniture1 = new Garniture("Pepperroni", 4, 5);
epices1 = new Epices("Sel&Poivre", 0.5);
//pizza1 = new Pizza(1, 2, "Mince", "Mozzarrella", "Pepperonni", 20, 45);
pizza1 = new Pizza(1,taille1.diametre, croute1.nomAliment, fromage1.nomAliment, garniture1.nomAliment, 20, 45);
pizza1.afficherElements();
console.log(pizza1.numeroPizza);
console.log(pizza1.taille);
console.log(pizza1.croute);
console.log(prixPizza(croute1, fromage1, garniture1));
console.log(multiplicationFacteur(pizza1));

//test commande
commande1 = new Commande(1, "2020-01-01", "17:30",2, null);
console.log(afficherCommande(commande1));
console.log(prixFinal(commande1));
