let cred = 5000;
let fuel = 100;
let habs = 1;
let goods = 50;
let ships = 0;
let pop = 0;
let newh = 0;
let vis = 0;
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
  Population();
  setTimeout(VisGen, 10000);
  setTimeout(VisLeave, 10000);
  setTimeout(GoodsEcon, 10000);
  setTimeout(FuelEcon, 10000);
  setTimeout(AddNewh, 5000)
  setTimeout(PayRoll, 29000)
  setTimeout(StaffWork, 10000)
  delStart();
  badTracker();
  started = true;
}

function Intervals(){
  setInterval(DisplayNums, 100)
  setInterval(BadChecker, 10000)
  setInterval(Population, 15000)
}

function badTracker(){
  {console.log("Crime: " + crime)}{console.log("Sick: " + sick)}{console.log("Dmg: " + damage)}
  setTimeout(badTracker, 5000)}

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

    if (fuel === 0){document.getElementById("fl").style.color = "rgb(255,0,0)";}
    else document.getElementById("fl").style.color = "rgb(255,255,255)";

    if (goods === 0){document.getElementById("gd").style.color = "rgb(255,0,0)";}
    else document.getElementById("gd").style.color = "rgb(255,255,255)";

    if (vis === maxvis){document.getElementById("dk").style.color = "rgb(255,255,0)";}
    else document.getElementById("dk").style.color = "rgb(255,255,255)";

}
    
function Updater(){
  tstaff = adm + sec + med + log + mer + mnt;
  maxcap = habs * 6;
  maxvis = docks * 300;
  if (vis < 0) {vis = 0};
  if (vis > maxvis){vis = maxvis}};

function PayRoll(){cred -= tstaff * 500;blip();setTimeout(PayRoll, 29000)}

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
    if (glam >= 1 && glam <= 3) {
      const randomIncrement = Math.floor(Math.random() * 6) + 2;
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >= 4 && glam <= 6) {
    const randomIncrement = Math.floor(Math.random() * 9) + 4; 
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >= 7 && glam <= 14) {
    const randomIncrement = Math.floor(Math.random() * 9) + 9;
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >= 15 && glam <= 25) {
    const randomIncrement = Math.floor(Math.random() * 13) + 18;
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >=26  && glam <= 50) {
    const randomIncrement = Math.floor(Math.random() * 18) + 28;
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >= 51 && glam <= 70) {
    const randomIncrement = Math.floor(Math.random() * 21) + 38;
    vis -= randomIncrement;
  } else if (vis <= maxvis && glam >= 71) {
    const randomIncrement = Math.floor(Math.random() * 28) + 45;
    vis -= randomIncrement;
  } else if (glam < 0) {vis = Math.floor(Math.random() * 14) + 1;}
  const randomInterval = Math.floor(Math.random() * (16000 - 11000 + 1)) + 11000;
  setTimeout(VisLeave, randomInterval);
}

function StaffWork(){
goods += log * 5;
goods += mer * Math.floor(vis * .3);
cred += ships * (vis * 4)
if (goods > 0){cred += vis * (mer * 15)}
setTimeout(StaffWork, 14000)
}

function GoodsEcon(){
  if (goods > 0){
  let multiplier = Math.floor(Math.random() * (1.8 - 0.08)) + 0.05;
  let randCred = Math.floor(vis * multiplier);
  cred += randCred + 200 + (180 * mer);
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
  cred += Math.floor(fuelAmount * 400)}}
  if (fuel < 0) {fuel = 0;}
  setTimeout(FuelEcon, 7000);
}

//New Hire Generator
function AddNewh(){if (newh < 3 && tstaff < maxcap)newh++;
  setTimeout(AddNewh, hiringInterval)}

function Population(){if (vis > 50 && pop < maxres - 4) {pop+= Math.floor(Math.random() * 4) + 1;}
    cred += 350 * pop;
}

//Staff Assignment Buttons
function AsgnAdm(){if (newh !== 0 && tstaff < maxcap && started){adm++;newh--;hiringInterval-= 10000;crime--;damage--;admSound();}}
function AsgnSec(){if (newh !== 0 && tstaff < maxcap&& started){sec++;newh--;crime -= 20;secSound();}}
function AsgnMed(){if (newh !== 0 && tstaff < maxcap&& started){med++;newh--;sick -= 3;glam++;medSound();}}
function AsgnLog(){if (newh !== 0 && tstaff < maxcap&& started){log++;newh--;damage--;logSound();}}
function AsgnMer(){if (newh !== 0 && tstaff < maxcap&& started){mer++;newh--;glam++;merSound();}}
function AsgnMnt(){if (newh !== 0 && tstaff < maxcap&& started){mnt++;newh--;damage -= 3;mntSound();}}

function BuildHab(){if (cred >= 10000 && started){{habs++;cred-= 10000;sick++;habSound();}}}
function BuildApartment(){if (cred >= 35000 && started){{apt++;cred-= 35000;sick+= 2;crime+= 2;damage+= 1;habSound();}}}
function BuildLounge(){if (cred >= 5000 && started){{loungeSound();cred-= 5000;sick++;glam+= 2;}}}
function BuildDock(){if (cred >= 15000 && started){{docks++;cred-= 15000;glam += 2; crime +=2;sick++;damage+=2;dockSound();}}}
function BuyFuel(){if (cred >= -5000 && started){{fuel+= 100;cred-= 1000;fuelSound();}}}
function BuyShip(){if (cred >= 20000 && started){{ships++;cred-= 20000;glam += 4;crime+= 2;damage += 3;shipSound();}}}

function fireAdm(event) {if (event.key === 'Delete' && started) {if (adm > 0)adm--;fired();}}
function fireSec(event) {if (event.key === 'Delete' && started) {if (sec > 0)sec--;fired();}}
function fireMed(event) {if (event.key === 'Delete' && started) {if (med > 0)med--;fired();}}
function fireLog(event) {if (event.key === 'Delete' && started) {if (log > 0)log--;fired();}}
function fireMer(event) {if (event.key === 'Delete' && started) {if (mer > 0)mer--;fired();}}
function fireMnt(event) {if (event.key === 'Delete' && started) {if (mnt > 0)mnt--;fired();}}

function Rename() {
  blip();
  newName = document.getElementById("myInput").value;
  document.getElementById("title").innerHTML = newName + " Station"
  document.getElementById("myInput").value = "";
  localStorage.setItem('newName', newName);
}

function delStart(){document.getElementById("startbutton").remove();}