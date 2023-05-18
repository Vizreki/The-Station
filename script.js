let cred = 3000000;
let fuel = 100;
let habs = 1;
let goods = 50;
let ships = 1;
let pop = 1;
let newh = 3;
let vis = 0;
let docks = 1;
let adm = 1;
let sec = 0;
let med = 0;
let log = 0;
let mer = 0;
let mnt = 0;

let hiringInterval = 10000;

let tstaff = 1;
let maxCap = habs * 6;

let glam = 3;

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
  setTimeout(VisGen, 5000);
  setTimeout(VisLeave, 10000);
  setTimeout(GoodsEcon, 1000);
  setTimeout(FuelEcon, 1000);
  setTimeout(AddNewh, 10000)
  setTimeout(CrimeChecker, 1000)
}

function Intervals(){
  setInterval(DisplayNums, 100)
  setInterval(PayRoll, 10000)
  setInterval(StaffWork, 1000)
}

//UI Updater
function DisplayNums(){
    let commaCred = cred.toLocaleString();
    document.getElementById("staff").innerHTML = "Staff: " + tstaff;
    document.getElementById("cd").innerHTML = "Credits ᖬ: " + commaCred;
    document.getElementById("fl").innerHTML = "Fuel: " + fuel;
    document.getElementById("hb").innerHTML = "Habs: " + habs;
    document.getElementById("gd").innerHTML = "Goods: " + goods;
    document.getElementById("sh").innerHTML = "Ships: " + ships;
    document.getElementById("dk").innerHTML = "Docks: " + docks;
    document.getElementById("po").innerHTML = "Population: " + pop;
    document.getElementById("nh").innerHTML = "Applicants: " + newh;
    document.getElementById("vi").innerHTML = "Visitors: " + vis;
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

function PayRoll(){
    cred -= tstaff * 2000;
}

function VisGen() {
  if (glam >= 1 && glam <= 5) {
    const randomIncrement = Math.floor(Math.random() * 6) + 1;
    vis += randomIncrement;
  } else if (glam >= 6 && glam <= 10) {
    const randomIncrement = Math.floor(Math.random() * 10) + 10; 
    vis += randomIncrement;
  } else if (glam > 11 && glam <= 15) {
    const randomIncrement = Math.floor(Math.random() * 32) + 22;
    vis += randomIncrement;
  } else if (glam >= 16) {
    const randomIncrement = Math.floor(Math.random() * 32) + 32;
    vis += randomIncrement;
  }
  const randomInterval = Math.floor(Math.random() * (18000 - 10000 + 1)) + 10000;
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
      const randomIncrement = Math.floor(Math.random() * 30) + 20;
      vis -= randomIncrement;
    } else if (glam >= 16) {
      const randomIncrement = Math.floor(Math.random() * 30) + 30;
      vis -= randomIncrement;
    } else if (glam < 0) {vis = Math.floor(Math.random() * 14) + 1;}


    
  
  const randomInterval = Math.floor(Math.random() * (19000 - 11000 + 1)) + 11000;
  setTimeout(VisLeave, randomInterval);
}

function StaffWork(){
//Logistics
goods += log * 3;
goods += mer * 10;
}

function GoodsEcon(){
  if (goods > 0){
  let multiplier = Math.floor(Math.random() * (1.4 - 0.05)) + 0.05;
  let randCred = Math.floor(vis * multiplier);
  cred += randCred;
  goods -= Math.floor(randCred * .5);}
  if (goods < 0) {goods = 0};
  setTimeout(GoodsEcon, 1000);
}

function FuelEcon(){
  if (fuel > 0){
  let fuelBuy = Math.floor(Math.random() * 4) - 1;
  let fuelAmount = Math.floor(Math.random() * 4);
  if (fuelBuy > 0 && fuel >= (fuelAmount * 10)){
  fuel -= Math.floor(fuelAmount * 10);
  cred += Math.floor(fuelAmount * 250)}}
  if (fuel < 0) {fuel = 0;}
  setTimeout(FuelEcon, 1000);
}


//New Hire Generator
function AddNewh(){if (newh < 6 && tstaff < maxCap)newh++;setTimeout(AddNewh, hiringInterval)}

//Staff Assignment Buttons
function AsgnAdm(){if (newh !== 0 && tstaff < maxCap){adm++;newh--;
  hiringInterval -= 2000;
  crime--;damage--;}}



function AsgnSec(){if (newh !== 0 && tstaff < maxCap){sec++;newh--;glam++;crime -= 3;}}


function AsgnMed(){if (newh !== 0 && tstaff < maxCap){med++;newh--;sick -= 3;glam++}}


function AsgnLog(){if (newh !== 0 && tstaff < maxCap){log++;newh--;damage--;}}


function AsgnMer(){if (newh !== 0 && tstaff < maxCap){mer++;newh--;glam++}}


function AsgnMnt(){if (newh !== 0 && tstaff < maxCap){mnt++;newh--;damage -= 3;}}

function BuildHab(){if (cred >= 15000){{habs++;cred-= 15000;glam++;sick++}}}
function BuildDock(){if (cred >= 30000){{docks++;cred-= 30000;glam += 3; crime +=3;sick++}}}
function BuyFuel(){if (cred >= 1000){{fuel+= 100;cred-= 1000;}}}
function BuyShip(){if (cred >= 50000){{ships++;cred-= 50000;glam += 5;damage += 3}}}









function Rename() {
  newName = document.getElementById("myInput").value;
  document.getElementById("title").innerHTML = newName + " Station"
  document.getElementById("myInput").value = "";
  localStorage.setItem('newName', newName);
}
