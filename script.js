let cred = 5000;
let fuel = 100;
let habs = 1;
let goods = 50;
let ships = 0;
let pop = 1;
let newh = 0;
let vis = 0;
let docks = 1;
let adm = 1;
let sec = 0;
let med = 0;
let log = 0;
let mer = 0;
let mnt = 0;

let hiringInterval = 60000;

let tstaff = 1;
let maxCap = habs * 6;
let maxVis = docks * 400;

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
  document.getElementById("status").innerHTML = "Status: ";
  DisplayNums();
  Intervals();
  setTimeout(VisGen, 10000);
  setTimeout(VisLeave, 10000);
  setTimeout(GoodsEcon, 10000);
  setTimeout(FuelEcon, 10000);
  setTimeout(AddNewh, 5000)
  setTimeout(CrimeChecker, 30000)
  music();
}

function Intervals(){
  setInterval(DisplayNums, 100)
  setInterval(PayRoll, 29000)
  setInterval(StaffWork, 10000)
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
    document.getElementById("dk").innerHTML = "Docks: " + docks;
    document.getElementById("po").innerHTML = "Population: " + pop;
    document.getElementById("nh").innerHTML = "Applicants: " + newh;
    document.getElementById("vi").innerHTML = "Visitors: " + commaVis;
    document.getElementById("ad").innerHTML = "Admin: " + adm;
    document.getElementById("sc").innerHTML = "Security: " + sec;
    document.getElementById("md").innerHTML = "Medical: " + med;
    document.getElementById("lg").innerHTML = "Logistics: " + log;
    document.getElementById("mr").innerHTML = "Merchants: " + mer;
    document.getElementById("mt").innerHTML = "Maintenance: " + mnt;

    Updater();

    if (tstaff === maxCap){newh = 0}

    }
    
function Updater(){
  tstaff = adm + sec + med + log + mer + mnt;maxCap = habs * 6;if (vis < 0) {vis = 0}}

function PayRoll(){cred -= tstaff * 500;blip();}

function VisGen() {
  if (glam >= 1 && glam <= 5) {
    const randomIncrement = Math.floor(Math.random() * 6) + 2;
    vis += randomIncrement;
  } else if (glam >= 6 && glam <= 10) {
    const randomIncrement = Math.floor(Math.random() * 10) + 12; 
    vis += randomIncrement;
  } else if (glam > 11 && glam <= 15) {
    const randomIncrement = Math.floor(Math.random() * 22) + 22;
    vis += randomIncrement;
  } else if (glam >= 16) {
    const randomIncrement = Math.floor(Math.random() * 20) + 32;
    vis += randomIncrement;
  }
  const randomInterval = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;
  setTimeout(VisGen, randomInterval);
}

function VisLeave() {
    if (glam >= 1 && glam <= 5) {
      const randomIncrement = Math.floor(Math.random() * 6) + 1;
      vis -= randomIncrement;
    } else if (glam >= 6 && glam <= 10) {
      const randomIncrement = Math.floor(Math.random() * 8) + 8; 
      vis -= randomIncrement;
    } else if (glam >= 11 && glam <= 15) {
      const randomIncrement = Math.floor(Math.random() * 20) + 20;
      vis -= randomIncrement;
    } else if (glam >= 16) {
      const randomIncrement = Math.floor(Math.random() * 20) + 30;
      vis -= randomIncrement;
    } else if (glam < 0) {vis = Math.floor(Math.random() * 14) + 1;}
  const randomInterval = Math.floor(Math.random() * (16000 - 11000 + 1)) + 11000;
  setTimeout(VisLeave, randomInterval);
}

function StaffWork(){
goods += log * 5;
goods += mer * 20;
}

function GoodsEcon(){
  if (goods > 0){
  let multiplier = Math.floor(Math.random() * (1.8 - 0.08)) + 0.05;
  let randCred = Math.floor(vis * multiplier);
  cred += randCred + 100 + (100 * mer);
  console.log(randCred);
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
  cred += Math.floor(fuelAmount * 350)}}
  if (fuel < 0) {fuel = 0;}
  setTimeout(FuelEcon, 7000);
}

//New Hire Generator
function AddNewh(){if (newh < 3 && tstaff < maxCap)newh++;setTimeout(AddNewh, hiringInterval)}

//Staff Assignment Buttons
function AsgnAdm(){if (newh !== 0 && tstaff < maxCap){adm++;newh--;hiringInterval -= 5000;crime--;damage--;admSound();}}
function AsgnSec(){if (newh !== 0 && tstaff < maxCap){sec++;newh--;crime -= 3;secSound();}}
function AsgnMed(){if (newh !== 0 && tstaff < maxCap){med++;newh--;sick -= 3;glam++;medSound();}}
function AsgnLog(){if (newh !== 0 && tstaff < maxCap){log++;newh--;damage--;logSound();}}
function AsgnMer(){if (newh !== 0 && tstaff < maxCap){mer++;newh--;glam++;merSound();}}
function AsgnMnt(){if (newh !== 0 && tstaff < maxCap){mnt++;newh--;damage -= 3;mntSound();}}

function BuildHab(){if (cred >= 10000){{habs++;cred-= 10000;glam++;sick++;habSound();}}}
function BuildLounge(){if (cred >= 6000){{loungeSound();cred-= 6000;glam+= 2;}}}
function BuildDock(){if (cred >= 30000){{docks++;cred-= 30000;glam += 3; crime +=3;sick++;dockSound();}}}
function BuyFuel(){if (cred >= -5000){{fuel+= 100;cred-= 1000;fuelSound();}}}
function BuyShip(){if (cred >= 50000){{ships++;cred-= 50000;glam += 8;damage += 5;shipSound();}}}


function Rename() {
  blip();
  newName = document.getElementById("myInput").value;
  document.getElementById("title").innerHTML = newName + " Station"
  document.getElementById("myInput").value = "";
  localStorage.setItem('newName', newName);
}