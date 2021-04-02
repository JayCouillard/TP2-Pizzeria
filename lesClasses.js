

//créations des différentes classes nécessaires pour 
//l'entrée des caractéristiques de la(ou les) pizza désirée.
class Aliment{
    constructor(nom,poids){
        this.nom = nom;
        this.poids= poids;

    }
    ajouterAliment(newAliment){
        return this.nomAliment = newAliment;
    }
    augmenterPoidsAliment(nouveauPoids){
         return this.poidsAliment = nouveauPoids;
    }
    lireAliments() {
        return "nom: " + this.nom + ", poids: " + this.poids;
    }
   
   
}
class Croute extends Aliment{
    constructor(nom, poids,type, prix,taille){
        super(nom, poids)
        this.prix = prix;
        this.type = type;
        this.taille = taille;
    }  
    lireNom(){
        return this.nom;
    }
    lireCroute(){
        return this.lireAliments() + 
        ", type: " + this.type +
        ", taille: " + this.taille +
        ", prix: " + this.prix;
    }  

}

class Fromage extends Aliment{
    constructor(nom, poids, prix){
        super(nom, poids)
        this.prix = prix;
    }
    lireFromage() {
        return this.lireAliments() + ", prix: " + this.prix;
    }
    lireNom(){
        return this.nom;
    }

}

class Garniture extends Aliment{
    constructor(nom, poids, prix){
        super(nom, poids)
        this.prix = prix;
    }
    lireGarniture() {
        return this.lireAliments() + ", prix: " + this.prix;
    }
    lireNom(){
        return this.nom;
    }

}

class Epices extends Aliment{
    constructor(nom,poids){
        super(nom,poids)

    }
    lireNom(){
        return this.nom;
    }
}

class Pizza {
    constructor(numero, taille, croute, fromages, garnitures, tempsCuisson) {
        this.numero = numero;
        this.taille = taille;
        this.croute = croute;
        this.fromages = fromages;
        this.garnitures = garnitures;
        this.tempsCuisson = tempsCuisson;
        this.prixComplet = 0;
        this.calculerPrixComplet();
    }

    lireNom() { // on le nomme "lireNom" pour simplifier la codification
        return "Pizza #" + this.numero;
    }
    lirePizza() {
        return "numéro: " + this.numero +
            ", taille: {" + this.taille.lireTaille() + "} " +
            ", croûte: {" + this.croute.lireCroute() + "} " +
            ", fromages: [" + this.lireFromages() + "] " +
            ", garnitures: [" + this.lireGarnitures() + "] " +
            ", prix complet: " + this.prixComplet +
            ", temps de cuisson: " + this.tempsCuisson;
    }
    lireFromages() {
        var s = "";
        for (const i in this.fromages) {
            s += "{" + this.fromages[i].lireFromage() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
    }
    lireGarnitures() {
        var s = "";
        for (const i in this.garnitures) {
            s += "{" + this.garnitures[i].lireGarniture() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
    }
    prixPizza(){ 
        
        return (this.croute[2] + this.fromage[2] + this.garniture[2])*this.diametre;

    } 
}
class Commande {
    constructor(numero, client, date, heure, pizzas) {
        this.numero = numero;
        this.client = client;
        this.date = date;
        this.heure = heure;
        this.pizzas = pizzas;
        this.montantTotal = 0;
        this.tps = 0.05;
        this.tvq = 0.0975;
        this.calculerMontantTotal();
    }
    lireCommande() {
        return "numéro: " + this.numero +
            ", client: {" + this.client.lireClient() + "}" +
            ", date: " + this.date + ", heure: " + this.heure +
            ", pizzas: [" + this.lirePizzas() + "]" +
            ", montant total: " + this.montantTotal;
    }
    lirePizzas() {
        var s = "";
        for (const i in this.pizzas) {
            s += "{" + this.pizzas[i].lirePizza() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
    }

    prixFinal(){
        return (nombrePizzas * prixPizza())*=(this.tps + this.tvq);
    }

}
class Taille{
    constructor(nom, diametre, facteur){
        this.nom = nom;     
        this.diametre = diametre;   //1:petite 2 : Moyenne 3: Grande
        this.facteur = facteur;
    }
    lireTaille(){
        return "nom: "+ this.nom + ", diamètre: "+ this.diametre + 
        ", facteur: "+ this.facteur;
    }
    lireNom(){
        return this.nom;
    }
    lireFacteur(){
        return this.facteur;
    }
    
    multiplicationFacteur(){
        return prixAliment * facteur;
    }
}
class Client{
    constructor(nom, prenom, telephone,courriel){
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.courriel = courriel;
        

    }
    lireClient() {
        return "nom: " + this.nom + ", prénom: " + this.prenom +
            ", téléphone: " + this.telephone + ", courriel: " + this.courriel;
    }
    lireNom(){
        return this.prenom + this.nom;
    }

}
/**
 * Instanciations avec des faux données pour les tests
 */

 var tailleP = new Taille("P", 12, 1);
 var tailleM = new Taille("M", 20, 2);
 var tailleG = new Taille("G", 30, 3);
 var listeTailles = [tailleP, tailleM, tailleG];
 
 var fausseCroute1 = new Croute("fausse-croute1", 18, "mince", 5, "P");
 var fausseCroute2 = new Croute("fausse-croute2", 23, "épaisse", 7, "M");
 var fausseCroute3 = new Croute("fausse-croute3", 23, "grains", 6, "G");
 var listeCroutes = [fausseCroute1, fausseCroute2, fausseCroute3];
 
 var fausseFromage1 = new Fromage("faux-fromage1", 11, 2.5);
 var fausseFromage2 = new Fromage("faux-fromage2", 13, 3);
 var fausseFromage3 = new Fromage("faux-fromage3", 12, 2);
 var listeFromages = [fausseFromage1, fausseFromage2, fausseFromage3];
 
 var fausseGarniture1 = new Garniture("fausse-garniture1", 10, 5.3);
 var fausseGarniture2 = new Garniture("fausse-garniture2", 12, 4.7);
 var fausseGarniture3 = new Garniture("fausse-garniture3", 15, 3.5);
 var listeGarnitures = [fausseGarniture1, fausseGarniture2, fausseGarniture3];
 
 var faussePizza1 = new Pizza(
     10001, tailleM, fausseCroute1,
     [fausseFromage1],
     [fausseGarniture1],
     15
    )
 var faussePizza2 = new Pizza(
     10002, tailleP, fausseCroute2,
     [fausseFromage2],
     [fausseGarniture2],
     13
    )
 var faussePizza3 = new Pizza(
     10003, tailleG, fausseCroute1,
     [fausseFromage1, fausseFromage2],
     [fausseGarniture1, fausseGarniture2],
     18
    )
 var listePizzas = [faussePizza1, faussePizza2, faussePizza3];
 
 var fausseClient1 = new Client("Eliot", "Billy", 4501231234, "be@mail.ca");
 var fausseClient2 = new Client("Uzumaki", "Naruto", 4507896789, "nu@mail.ca");
 var fausseClient3 = new Client("Uchiha", "Sasuke", 4501582765, "su@mail.ca");
 var listeClients = [fausseClient1, fausseClient2, fausseClient3];
 
 

/*aa */
