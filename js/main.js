// Dove Clone Wars in JavaScript
// By Bernardo Felipe Martinez Meave
// @behrmart
// Just a little programming exercise
// Stardate: 20230418

const locations = ["Manhattan", "The Bronx", "Brooklyn", "Conney Island", "Queens"];
let drugs = [
                ["Cocaine",1000,2,0], // Drugname, Price, Volatibility, Inventory   
                ["Heroin", 800, 1, 0],    
                ["Acid", 100, 1, 0], 
                ["Weed", 20, 1, 0],
                ["Speed", 17, 1, 0], 
                ["Ludes", 25, 1, 0],
                ["Hash", 54,1,0],
                ["Meth", 32,1,0],
                ["Ecstasy",46,1,0], 
                ["PCP", 230,1,0], 
                ["Opium", 123, 1,0],
                ["Peyote", 267,1,0]
            ];
            

//drugs.forEach((element,index) => {console.log(element,index)}); // display drugs nested array - debug only
    
var cash = 2000;
var trenchcoat = 100;
var gun = false;
var debt = 0;
var bank = 0;
var totalDays = 30;
var dayNumber = 0;


// Drug News Alert window
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" id="alertMessage">`, // added id alertMessage to easily remove alarm
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.append(wrapper)
}


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

 
    todaysNews = drugNews(); // Generate Today's News
    console.log ("todaysNews: " + todaysNews[0]);

    if (todaysNews[0] === 0){
            const borraAlertPlaceHolder = document.getElementById('alertMessage');
            if (borraAlertPlaceHolder != null ){ 
            console.log(borraAlertPlaceHolder);
            borraAlertPlaceHolder.remove();
            }
            
        } else {
            appendAlert(todaysNews[1], 'success');
        }
    

    dayNumber ++;   //Increase day nuumber
    document.getElementById("locationid").innerHTML = b;
    document.getElementById("dayid").innerHTML = "Day " + dayNumber + "/30";
    

    
}

function drugNews(){ //This prints today's news on an alert window (just in case there is news)
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


function drugCard(cardNumber, drugPrice, drugInventory, trenchcoat, cash, drugAvail){ //Card Number, Drug Price, Inventory, trenchcoat, cash, available?
    

    if (cardNumber <= 3) {  // Select Row on Cards container based on cardNumber 3 cards per row
        cardRowNo = 1;
    } else if (cardNumber <= 6) {
        cardRowNo = 2;
    } else {
        cardRowNo = 3;
    }

    if (drugAvail===true){

        let cardColor = 'success'; // Green
        let cardCont = 'cardCont' + parseInt(cardNumber);
        let cardTitle = 'cardTitle' + parseInt(cardNumber); //Card title (drug)

        console.log('CardRowNo: ', cardRowNo);
        console.log('CardCont: ', cardCont);
        console.log('CardColor: ', cardColor);

        var cardElement = document.createElement("div");  //Create Card div
        cardElement.id = "card" + parseInt(cardNumber);
        cardElement.className = "card col-md-4 text-center p-md-2"; //Should be a col-md-4 to fit in row

        cardElement.innerHTML = [
            `<div class="card text-center border-${cardColor}-subtle" id="${cardCont}">`,
            `<div class="card-header text-${cardColor}-emphasis bg-${cardColor}-subtle border-${cardColor}-subtle" id="cardTitle1">${drugs[cardNumber-1][0]}</div>`,
            '<div class="card-body">',
            `<h5 class="card-title" id="cardPrice1">${'$' +drugPrice}</h5>`,
            `<p class="card-text" id="cardQuant1"></p>`,
            `<label for="drugRange1" class="form-label">Select Quantity</label>`,
            `<input type="range" class="form-range" min="0" max="10" id="drugRange1">`,
            `<a href="#" class="btn btn-outline-success" id="buttonBuy">Buy</a>`,
            `<a href="#" class="btn btn-outline-danger" id="buttonSell">Sell</a>`,
            `</div>`,
            `<div class="card-footer text-info-emphasis bg-info-subtle border-info-subtle" id="cardInventory1">${drugs[cardNumber][0]} Inventory: ${drugInventory}</div>`,
            `</div>`,
            `</div>`
        ].join('');

        let getEleId = 'cardrow' + cardRowNo; //get row element
        // console.log('getEleId ' + getEleId); // Debug
        var parentElement = document.getElementById(getEleId); //Append Card to HTML
        parentElement.appendChild(cardElement);

         // console.log(cardElement.innerHTML); //Debug

    } else {  // Drug NOT Available today RED card

        let cardColor = 'danger'; // Red
        let cardCont = 'cardCont' + parseInt(cardNumber);
        let cardTitle = 'cardTitle' + parseInt(cardNumber); //Card title (drug)

        console.log('CardRowNo: ', cardRowNo);
        console.log('CardCont: ', cardCont);
        console.log('CardColor: ', cardColor);

        var cardElement = document.createElement("div");  //Create Card div
        cardElement.id = "card" + parseInt(cardNumber);
        cardElement.className = "card col-md-4 text-center p-md-2"; //Should be a col-md-4 to fit in row

        cardElement.innerHTML = [
            `<div class="card text-center border-${cardColor}-subtle" id="${cardCont}">`,
            `<div class="card-header text-${cardColor}-emphasis bg-${cardColor}-subtle border-${cardColor}-subtle" id="cardTitle1">${drugs[cardNumber-1][0]}</div>`,
            '<div class="card-body">',
            `<h5 class="card-title" id="cardPrice1">${'$' +drugPrice}</h5>`,
            `<p class="card-text" id="cardQuant1"></p>`,
            `<label for="drugRange1" class="form-label">Select Quantity</label>`,
            `<input type="range" class="form-range" min="0" max="10" id="drugRange1">`,
            `<a href="#" class="btn btn-outline-success" id="buttonBuy">Buy</a>`,
            `<a href="#" class="btn btn-outline-danger" id="buttonSell">Sell</a>`,
            `</div>`,
            `<div class="card-footer text-info-emphasis bg-info-subtle border-info-subtle" id="cardInventory1">${drugs[cardNumber][0]} Inventory: ${drugInventory}</div>`,
            `</div>`,
            `</div>`
        ].join('');

        let getEleId = 'cardrow' + cardRowNo; //get row element
        // console.log('getEleId ' + getEleId); // Debug
        var parentElement = document.getElementById(getEleId); //Append Card to HTML
        parentElement.appendChild(cardElement);

         // console.log(cardElement.innerHTML); //Debug
        
    }

}

function nextDay(){
    
    dayNumber ++;

}


function main() { //this runs only the first time - Obviously.
    
    todayStatus(dayNumber);
    travelTo("Manhattan");
    drugCard(1,45,0,100,40,true);  //Card Number, Drug Price, Inventory, trenchcoat, cash, available?
    drugCard(2,55,0,100,40,false);
    drugCard(3,654,0,100,40,true);
    drugCard(4,75,0,100,40,false);
    drugCard(5,85,0,100,40,true);
    drugCard(6,95,0,100,40,false);
    drugCard(7,105,0,100,40,true);
    drugCard(8,115,0,100,40,false);
    drugCard(9,125,0,100,40,true);
    //drugCard(2,345,405,100,20,false);
    }
        


main(); 

