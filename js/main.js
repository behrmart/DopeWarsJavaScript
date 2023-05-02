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


function todayStatus(a) {
    
    document.getElementById("dayid").innerHTML = "Day " + a + "/30";
    document.getElementById("locationid").innerHTML = locations[a];
    document.getElementById("cashid").innerHTML = cash;
    document.getElementById("trenchcoatid").innerHTML = trenchcoat;
    };

function nextDay(){
    
    function validateForm() {
        let x = document.forms["nextdayform"]["fname"].value;
        if (x == "") {
          alert("Must answer yes");
          return false;
        }
      } 



    var x = document.getElementById("nexdaybutton").value; // get input value
    try { 
        if(x == "")  throw "empty";                 // error cases
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x > 10)   throw "too high";
        }
    catch(err) {                                    // if there's an error
        document.write("Input is " + err);          // output error
        console.error(err);                         // write the error in console
    }

    finally {
        document.write("</br />Done");              // executed regardless of the try / catch result
    }
    
    dayNumber ++;

}


function main() {
    
    while (dayNumber < totalDays) {
    todayStatus(dayNumber);
    nextDay();
    };
}




main();

// Echar los Perros en JavaScript
const noviaName = "Novia Potencial";

// Declara tu amor
const mensajeAmor = `Te amo , ${noviaName}! Eres la mejor Dev en GitHub adoro tus cuadritos verdes `;

// Hazlo oficial
console.log(mensajeAmor);