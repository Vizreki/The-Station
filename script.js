let cred = 5000;
let fuel = 100;
let habs = 1;
let goods = 50;
let ships = 0;
let pop = 0;
let newh = 0;
let vis = Math.floor(Math.random() * 5) + 1;
let apt = 0;
let docks = 1;
let adm = 1;
let sec = 0;
let med = 0;
let log = 0;
let mer = 0;
let mnt = 0;

let statusmessage = "";

let started = false;
let endgame = false;

let hiringInterval = 40000;

let tstaff = 1;
let maxcap = habs * 6;
let maxvis = docks * 100;
let maxres = apt * 30;

let glam = 1;

let crime = 0;
let sick = 0;
let damage = 0;

console.log("This is a management game. Other intro text to follow.");

document.addEventListener('DOMContentLoaded', function() {var input = document.getElementById('myInput');
  input.addEventListener('keyup', function(event) {if (event.key === 'Enter') {event.preventDefault();
  document.getElementById('renamebutton').click();}});});

window.onload = function() {
  newName = localStorage.getItem('newName') || '';
  document.getElementById("title").innerHTML = newName + " Station";
  DisplayNums();
  music();
}

function onStart(){
  BadChecker();
  Intervals();
  setTimeout(VisGen, 10000);
  setTimeout(VisLeave, 10000);
  setTimeout(GoodsEcon, 10000);
  setTimeout(FuelEcon, 10000);
  setTimeout(AddNewh, 5000)
  setTimeout(PayRoll, 29000)
  setTimeout(StaffWork, 10000)
  delStart();
  started = true;
}

// This function is for when a person comes in. 
function Intervals(){
  setInterval(DisplayNums, 100)
  setInterval(BadChecker, 10000)
  setInterval(Population, 15000)
}



//UI Updater
function DisplayNums(){
    let commaCred = cred.toLocaleString();
    let commaFuel = fuel.toLocaleString();
    let commaVis = vis.toLocaleString();
    document.getElementById("staff").innerHTML = "Staff: " + tstaff;
    document.getElementById("rating").innerHTML = "Station Rating: " + glam;
    document.getElementById("cd").innerHTML = "Credits ᖬ: " + commaCred;
    document.getElementById("fl").innerHTML = "Fuel: " + commaFuel;
    document.getElementById("hb").innerHTML = "Habs: " + habs;
    document.getElementById("gd").innerHTML = "Goods: " + goods;
    document.getElementById("sh").innerHTML = "Ships: " + ships;
    document.getElementById("ap").innerHTML = "Apartments: " + apt;
    document.getElementById("dk").innerHTML = "Docks: " + docks;
    document.getElementById("po").innerHTML = "Residents: " + pop;
    document.getElementById("nh").innerHTML = "Applicants: " + newh;
    document.getElementById("vi").innerHTML = "Visitors: " + commaVis;
    document.getElementById("ad").innerHTML = "Admin: " + adm;
    document.getElementById("sc").innerHTML = "Security: " + sec;
    document.getElementById("md").innerHTML = "Medical: " + med;
    document.getElementById("lg").innerHTML = "Logistics: " + log;
    document.getElementById("mr").innerHTML = "Merchants: " + mer;
    document.getElementById("mt").innerHTML = "Maintenance: " + mnt;

    Updater();

    if (tstaff >= maxcap){document.getElementById("nh").style.color = "rgb(80,80,80)";}
    else if (tstaff < maxcap)document.getElementById("nh").style.color = "rgb(255,255,255)";
    
    if (cred < 0){document.getElementById("cd").style.color = "rgb(255,255,80)";}
    else document.getElementById("cd").style.color = "rgb(255,255,255)";

    if (cred < -12000){document.getElementById("cd").style.color = "rgb(255,0,0)";}
    else document.getElementById("cd").style.color = "rgb(255,255,255)";

    if (fuel < 20){document.getElementById("fl").style.color = "rgb(255,0,0)";}
    else document.getElementById("fl").style.color = "rgb(255,255,255)";

    if (goods === 0){document.getElementById("gd").style.color = "rgb(255,0,0)";}
    else document.getElementById("gd").style.color = "rgb(255,255,255)";

    if (vis === maxvis){document.getElementById("dk").style.color = "rgb(255,255,0)";}
    else document.getElementById("dk").style.color = "rgb(255,255,255)";

    if (pop > 1 && pop === maxres){document.getElementById("po").style.color = "rgb(80,80,80)";}
    else document.getElementById("po").style.color = "rgb(255,255,255)";

}
    
function Updater(){
  tstaff = adm + sec + med + log + mer + mnt;
  maxcap = habs * 6;
  maxvis = docks * 100;
  maxres = apt * 30;
  if (vis < 0) {vis = 0};
  if (vis > maxvis){vis = maxvis}};

function PayRoll(){
  if (endgame === false){
  if (cred > -20000 && tstaff < 13)
    {cred -= tstaff * 650;}
  else if (tstaff >= 13 && tstaff < 25)  
    {cred -= tstaff * 950;}
  else if (tstaff >= 26 && tstaff < 49)  
    {cred -= tstaff * 1200;}
  else if (tstaff >= 49)  
   {cred -= tstaff * 1500;}

     else youLose();

    blip();
    setTimeout(PayRoll, 29000)
}
}

function VisGen() {
  if (vis <= maxvis && glam >= 1 && glam <= 3) {
    const randomIncrement = Math.floor(Math.random() * 6) + 2;
    vis += randomIncrement;
  } else if (vis <= maxvis && glam >= 4 && glam <= 6) {
    const randomIncrement = Math.floor(Math.random() * 10) + 5; 
    vis += randomIncrement;
  } else if (vis <= maxvis && glam >= 7 && glam <= 14) {
    const randomIncrement = Math.floor(Math.random() * 10) + 10;
    vis += randomIncrement;
  } else if (vis <= maxvis && glam >= 15 && glam <= 25) {
    const randomIncrement = Math.floor(Math.random() * 15) + 20;
    vis += randomIncrement;
  } else if (vis <= maxvis && glam >=26  && glam <= 50) {
    const randomIncrement = Math.floor(Math.random() * 20) + 30;
    vis += randomIncrement;
  } else if (vis <= maxvis && glam >= 51 && glam <= 70) {
    const randomIncrement = Math.floor(Math.random() * 28) + 45;
    vis += randomIncrement;
  } else if (vis <= maxvis && glam >= 71) {
    const randomIncrement = Math.floor(Math.random() * 35) + 60;
    vis += randomIncrement;
  }
  const randomInterval = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;
  setTimeout(VisGen, randomInterval);
}

function VisLeave() {
    if (glam == 1) {
      const randomIncrement = Math.floor(Math.random() * 6) + 2;
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >= 2 && glam <= 6) {
    const randomIncrement = Math.floor(Math.random() * 9) + 4; 
    vis -= randomIncrement + (sick + crime + damage * 20);
  } else if (vis <= maxvis && glam >= 7 && glam <= 14) {
    const randomIncrement = Math.floor(Math.random() * 9) + 9;
    vis -= randomIncrement + (sick + crime + damage * 20);
  } else if (vis <= maxvis && glam >= 15 && glam <= 25) {
    const randomIncrement = Math.floor(Math.random() * 13) + 18;
    vis -= randomIncrement + (sick + crime + damage * 20);
  } else if (vis <= maxvis && glam >=26  && glam <= 50) {
    const randomIncrement = Math.floor(Math.random() * 18) + 28;
    vis -= randomIncrement + (sick + crime + damage * 20);
  } else if (vis <= maxvis && glam >= 51 && glam <= 70) {
    const randomIncrement = Math.floor(Math.random() * 21) + 38;
    vis -= randomIncrement + (sick + crime + damage * 20);
  } else if (vis <= maxvis && glam >= 71) {
    const randomIncrement = Math.floor(Math.random() * 28) + 45;
    vis -= randomIncrement + (sick + crime + damage * 20);
  } else if (glam < 0) {vis = Math.floor(Math.random() * 14) + 1;}
    const randomInterval = Math.floor(Math.random() * (16000 - 10000 + 1)) + 10000;
  setTimeout(VisLeave, randomInterval);
}

function StaffWork(){
goods += log * 20;
goods += mer * Math.floor(vis * .35);
cred += ships * (vis * 8 - (crime + sick + damage * 200))
if (goods > 0){cred += vis * (mer * 10 - (crime + sick + damage * 200))}
setTimeout(StaffWork, 14000)
}

function GoodsEcon(){
  if (goods > 0 && vis > 0){
  let multiplier = Math.floor(Math.random() * (1.8 - 0.08)) + 0.06;
  let randCred = Math.floor(vis * multiplier);
  cred += randCred * 50 - (crime + sick + damage * 300);
  goods -= Math.floor(randCred * .5);}
  if (goods < 0) {goods = 0};
  setTimeout(GoodsEcon, 4000);
}

function FuelEcon(){
  if (fuel > 0 && vis > 0){
  let fuelBuy = Math.floor(Math.random() * 8) - 1;
  let fuelAmount = Math.floor(Math.random() * 5);
  if (fuelBuy > 0 && fuel >= (fuelAmount * 10)){
  fuel -= Math.floor(fuelAmount * 10);
  cred += Math.floor(fuelAmount * 400 - (crime + damage * 200))}}
  if (fuel < 0) {fuel = 0;}
  setTimeout(FuelEcon, 7000);
}

//New Hire Generator
function AddNewh(){if (newh < 3 && tstaff < maxcap)newh++;
  setTimeout(AddNewh, hiringInterval)}

function Population(){
  if (vis > 50 && pop < maxres - 4) 
  {pop+= Math.floor(Math.random() * 4) + 1;}
  else if (vis > 300 && pop < maxres - 4)
  {pop+= Math.floor(Math.random() * 5) + 2;}
    cred += 300 * pop - (crime + sick + damage * 300);
}

//Staff Assignment Buttons
function AsgnAdm(){if (newh > 0 && tstaff < maxcap && started){adm++;newh--;hiringInterval*= .3;crime--;damage--;admSound();}}
function AsgnSec(){if (newh > 0 && tstaff < maxcap&& started){sec++;newh--;crime -= 2;secSound();}}
function AsgnMed(){if (newh > 0 && tstaff < maxcap&& started){med++;newh--;sick -= 3;glam++;medSound();}}
function AsgnLog(){if (newh > 0 && tstaff < maxcap&& started){log++;newh--;damage--;logSound();}}
function AsgnMer(){if (newh > 0 && tstaff < maxcap&& started){mer++;newh--;glam++;merSound();}}
function AsgnMnt(){if (newh > 0 && tstaff < maxcap&& started){mnt++;newh--;damage -= 3;mntSound();}}

function BuildHab(){if (cred >= 10000 && started){{habs++;cred-= 10000;sick++;habSound();}}}
function BuildApartment(){if (cred >= 30000 && started){{apt++;cred-= 30000;sick+=2;crime+=2;damage+=1;habSound();}}}
function BuildLounge(){if (cred >= 5000 && started){{loungeSound();cred-= 5000;glam+=2;}}}
function BuildDock(){if (cred >= 15000 && started){{docks++;cred-= 15000;glam +=2; crime +=2;sick+=2;damage+=2;dockSound();}}}
function BuyFuel(){if (cred >= -5000 && started){{fuel+= 100;cred-= 1000;fuelSound();}}}
function BuyShip(){if (cred >= 20000 && started){{ships++;cred-= 20000;glam +=4;crime+=2;damage +=3;shipSound();}}}

function fireAdm(event) {if (event.key === 'Delete' && started) {if (adm > 0)adm--;crime++;damage++;hiringInterval+=5000;fired();}}
function fireSec(event) {if (event.key === 'Delete' && started) {if (sec > 0)sec--;crime+=2;fired();}}
function fireMed(event) {if (event.key === 'Delete' && started) {if (med > 0)med--;sick += 3;glam--;fired();}}
function fireLog(event) {if (event.key === 'Delete' && started) {if (log > 0)log--;damage++;fired();}}
function fireMer(event) {if (event.key === 'Delete' && started) {if (mer > 0)mer--;fired();}}
function fireMnt(event) {if (event.key === 'Delete' && started) {if (mnt > 0)mnt--;damage +=3;fired();}}

function Rename() {
  blip();
  newName = document.getElementById("myInput").value;
  document.getElementById("title").innerHTML = newName + " Station"
  document.getElementById("myInput").value = "";
  localStorage.setItem('newName', newName);
}

function delStart(){document.getElementById("startbutton").remove();}