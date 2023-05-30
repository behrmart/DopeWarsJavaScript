// Dove Clone Wars in JavaScript
// By Bernardo Felipe Martinez Meave
// @behrmart
// Just a little programming exercise
// Stardate: 20230530

// OOP Version.


// **************** Classes ****************
class Place {
    constructor (placeName, placeAvailable){
        this.placeName = placeName;
        this.placeAvailable = placeAvailable;
    }

    // Place Methods
    whereTo(){
        console.log(`Let's goto ${this.placeName}`)
    }

    placeNews(){
    const newsReel = ["Speed Prices are up!",
                        "Cocaine Prices are up! ", 
                        "Cactus Jake is in Town Peyote prices are down!", 
                        "Hash prices are up!",
                        "Weed prices are up!",
                        "Opium prices are up!",
                        "PCP prices are up!",
                        "Heroine prices are up!",
                        "Meth prices are up!",
                        "Ludes prices are up!",
                        "Ecstasy prices are up!",
                        "Acid prices are up!"
                    ]
    let randomNumber = Math.floor(Math.random() * 12); // Select a drug's news
    let newsProbability = Math.floor(Math.random() * 3); // 30% chance neews ocurring

    console.log("news prob: " + newsProbability)

    if (newsProbability === 1) {
        console.log("News Reel: " + newsReel[randomNumber]);
        return [ randomNumber + 1 ,newsReel[randomNumber]]; //Return drug number and news
    } else {
        console.log("No news");
        return [0,0];  // Return 0,0 No news
    }
    }
}

class Drug {
    constructor (drugName, drugMeanPrice, drugVolatibility, drugInventory, drugAvailability){
    this.drugName = drugName;
    this.DrugMeanPrice =  drugMeanPrice;
    this.drugVolatibility = drugVolatibility;
    this.drugInventory = drugInventory;
    this.drugAvailability = drugAvailability;
    }

    //Drug Methods
    name(){
        console.log(`${this.drugName} is available`)
    }

    price(){
        console.log(`${this.drugName} mean price is ${this.DrugMeanPrice}`)
    }

    generateDrugCard(){
        
    }
}

class Trenchcoat {
    constructor (trenchCapacity, trenchInventory){
        this.trenchCapacity = trenchCapacity;
        this.trenchInventory = trenchInventory;
    }

    //Trech Methods
    increaseCapacity (){
        console.log('Increase trenchcoat capacity');
    }

    getInventory () {
        console.log('get trenchcoat capacity');
    }

}



// ***************** Objects ****************
const Heroin = new Drug ('Heroin', '1000', 2, 0, true);
const Cocaine = new Drug ('Cocaine', '2000', 2, 0, true);
const Acid = new Drug ('Acid', '700', 1.2, 0, true);

Heroin.price();

const Manhattan = new Place ('Manhattan', true); //"Manhattan", "The Bronx", "Brooklyn", "Conney Island", "Queens"
const TheBronx = new Place ('The Bronx', true);
const Brooklyn = new Place ('Brooklyn', true);
const ConneyIsland = new Place ('Conney Island', true);
const Queens = new Place ('Queens', true);
Manhattan.whereTo();
console.log (Manhattan.placeNews());

const LondonFog = new Trenchcoat (100, 0);
LondonFog.getInventory();


