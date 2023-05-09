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

    let locationcont = document.getElementById('locationcont'); //locationid container
    let locationClassList = locationcont.classList;
    console.log(b)
    console.log(locationClassList);
    let classAttrib = locationcont.getAttribute('class');
    console.log(classAttrib)
    locationcont.setAttribute('class', 'col-md-6 border rounded-4'); // Reset locationcont class when the travelTo is called. 
    
    if (b==='Manhattan'){       
        locationcont.classList.add('text-primary-emphasis','bg-primary-subtle','border-primary-subtle'); 
    } else if (b==='The Bronx'){
        locationcont.classList.add('text-danger-emphasis','bg-danger-subtle','border-danger-subtle');
    } else if (b==='Queens'){
        locationcont.classList.add('text-success-emphasis','bg-success-subtle','border-success-subtle');
    } else if (b==='Brooklyn'){
        locationcont.classList.add('text-warning-emphasis','bg-warning-subtle','border-warning-subtle');
    } else if (b==='Conney Island'){
        locationcont.classList.add('text-info-emphasis','bg-info-subtle','border-info-subtle');
    }


    dayNumber ++;
    document.getElementById("locationid").innerHTML = b;
    document.getElementById("dayid").innerHTML = "Day " + dayNumber + "/30";
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


/* function main() {
    
    todayStatus(dayNumber);
    travelTo("Manhattan");
    drugCard("Weed");
    
}

main(); */




// Echar los Perros en JavaScript
//const noviaName = "Novia Potencial";

// Declara tu amor
//const mensajeAmor = `Te amo , ${noviaName}! Eres la mejor Dev en GitHub adoro tus cuadritos verdes `;

// Hazlo oficial
//console.log(mensajeAmor);