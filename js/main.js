// Dove Clone Wars in JavaScript
// By Bernardo Felipe Martinez Meave
// @behrmart
// Just a little programming exercise
// Stardate: 20230418

const locations = ["Manhattan", "The Bronx", "Brooklyn", "Conney Island", "Queens"];
const drugs = ["Cocaine", "Heroin", "Acid", "Weed", "Speed", "Ludes"];

var cash = 2000;
var trenchcoat = 100;
var gun = false;
var debt = 0;
var bank = 0;
var totalDays = 30;
var dayNumber = 1;


function todayStatus(a){
    
    document.getElementById("dayid").innerHTML = "Day " + a + "/30";
    document.getElementById("locationid").innerHTML = locations[a];
    document.getElementById("cashid").innerHTML = cash;
    document.getElementById("debtid").innerHTML = debt;
    document.getElementById("trenchcoatid").innerHTML = trenchcoat;
    };


function travelTo (b) {
    console.log("b: " + b);
    if (b==true){
        console.log("Travel Button pressed");
        document.getElementById("dayid").innerHTML = "ButtonPressed";
    } else {
        console.log("Travel Button NOT pressed");
        document.getElementById("dayid").innerHTML = "Button NOT Pressed";
    }
}

function drugCard(a){
    document.getElementById("drugHeaderCard").innerHTML = a;
    document.getElementById("drugTitleCard").innerHTML = a;
    document.getElementById("drugPriceCard").innerHTML = a;
    document.getElementById("drugFooterCard").innerHTML = a;
}

function nextDay(){
    
    dayNumber ++;

}


function main() {
    
    todayStatus(dayNumber);
    drugCard("Weed");

    
}

main();

function change() {
    var buttonTravel = document.getElementById('travelButton');
    console.log("buttonTravel value:" + buttonTravel.value);
}


// Echar los Perros en JavaScript
//const noviaName = "Novia Potencial";

// Declara tu amor
//const mensajeAmor = `Te amo , ${noviaName}! Eres la mejor Dev en GitHub adoro tus cuadritos verdes `;

// Hazlo oficial
//console.log(mensajeAmor);