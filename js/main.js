// Dove Clone Wars in JavaScript
// By Bernardo Felipe Martinez Meave
// @behrmart
// Just a little programming exercise
// Stardate: 20230418

const locations = ["Manhattan", "The Bronx", "Brooklyn", "Conney Island", "Queens"];
const drugs = ["Cocaine", "Heroin", "Acid", 
                "Weed", "Speed", "Ludes", 
                "Hash", "Meth", "Ecstasy", 
                "PCP", "Opium", "Peyote"];


var cash = 2000;
var trenchcoat = 100;
var gun = false;
var debt = 0;
var bank = 0;
var totalDays = 30;
var dayNumber = 0;


function todayStatus(a){
    
    document.getElementById("dayid").innerHTML = "Day " + a + "/30";
    document.getElementById("locationid").innerHTML = locations[a];
    document.getElementById("cashid").innerHTML = cash;
    document.getElementById("debtid").innerHTML = debt;
    document.getElementById("trenchcoatid").innerHTML = trenchcoat;
    };


function travelTo (b) {  //travelTo location function invoqued in HTML 

    let locationcont = document.getElementById('locationcont'); //locationid container
    
    locationcont.setAttribute('class', 'col-md-6 border rounded-4'); // Reset locationcont class when the travelTo is called. 
    
    if (b==='Manhattan'){       // Sets location display to different bootstrap colors
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

 
    todaysNews = drugNews();
    console.log ("todaysNews: " + todaysNews[0]);
    
    if (todaysNews[0] === 0){
            const borraAlertPlaceHolder = document.getElementById('liveAlertPlaceholder');
            if (borraAlertPlaceHolder != null ){ 
            console.log(borraAlertPlaceHolder);
            borraAlertPlaceHolder.remove();
            }
            
        } else {
            appendAlert(todaysNews[1], 'success');
        }
    

    dayNumber ++;
    document.getElementById("locationid").innerHTML = b;
    document.getElementById("dayid").innerHTML = "Day " + dayNumber + "/30";
    

    
}


function drugNews(){
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
    let newsProbability = Math.floor(Math.random() * 3); // 40% chance neews ocurring

    console.log("news prob: " + newsProbability)
    if (newsProbability === 1) {
        return [ randomNumber + 1 ,newsReel[randomNumber]]; //Return drug number and news
    } else {
        console.log("No news");
        return [0,0];  // Return 0,0 No news
    }
    
}

// Drug News Alert window
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}


function drugCard(a){
    document.getElementById("drugNewsCard").innerHTML = a;
    document.getElementById("drugTitleCard").innerHTML = a;
    document.getElementById("drugPriceCard").innerHTML = a;
    document.getElementById("drugFooterCard").innerHTML = a;
}

function nextDay(){
    
    dayNumber ++;

}


function main() {
    
    todayStatus(dayNumber);
    travelTo("Manhattan");
    drugCard("Weed");
    
}

main(); 




// Echar los Perros en JavaScript
//const noviaName = "Novia Potencial";

// Declara tu amor
//const mensajeAmor = `Te amo , ${noviaName}! Eres la mejor Dev en GitHub adoro tus cuadritos verdes `;

// Hazlo oficial
//console.log(mensajeAmor);