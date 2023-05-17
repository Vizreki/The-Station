let cred = 100;
let fuel = 100;
let habs = 1;
let goods = 0;
let ships = 1;
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

let glam = 40;

let crime = 0;
let sick = 0;
let damage = 0;


let newName = localStorage.getItem('newName') || '';

console.log("This is a management game. Other intro text to follow.");

document.addEventListener('DOMContentLoaded', function() {var input = document.getElementById('myInput');
  input.addEventListener('keyup', function(event) {if (event.key === 'Enter') {event.preventDefault();
  document.getElementById('renamebutton').click();}});});

window.onload = function() {
  newName = localStorage.getItem('newName') || '';
  document.getElementById("title").innerHTML = newName + " Station";
  DisplayNums();
  DisplayIntervals();
  setTimeout(VisGen, 5000);
  setTimeout(VisLeave, 10000);
};

//UI Updater
function DisplayNums(){
    let commaCred = cred.toLocaleString();
    document.getElementById("status").innerHTML = "No issues reported.";
    document.getElementById("cd").innerHTML = "Credits: " + commaCred;
    document.getElementById("fl").innerHTML = "Fuel: " + fuel;
    document.getElementById("hb").innerHTML = "Habs: " + habs;
    document.getElementById("gd").innerHTML = "Goods: " + goods;
    document.getElementById("sh").innerHTML = "Ships: " + ships;
    document.getElementById("dk").innerHTML = "Docks: " + docks;
    document.getElementById("po").innerHTML = "Population: " + pop;
    document.getElementById("nh").innerHTML = "New Hires: " + newh;
    document.getElementById("vi").innerHTML = "Visitors: " + vis;
    document.getElementById("ad").innerHTML = "Admin: " + adm;
    document.getElementById("sc").innerHTML = "Security: " + sec;
    document.getElementById("md").innerHTML = "Medical: " + med;
    document.getElementById("lg").innerHTML = "Logistics: " + log;
    document.getElementById("mr").innerHTML = "Merchants: " + mer;
    document.getElementById("mt").innerHTML = "Maintenance: " + mnt;
    }
    
function DisplayIntervals(){
    setInterval(DisplayNums, 200)
    setInterval(AddNewh, 40000);
}

/*
function Gen() {
  const randomInterval = Math.floor(Math.random() * (2000 - 8000 + 1)) + 8000;
  cred += 100;
  setTimeout(Gen, randomInterval);
}
*/

function VisGen() {
  if (glam >= 1 && glam <= 5) {
    const randomIncrement = Math.floor(Math.random() * 7) + 1;
    vis += randomIncrement;
  } else if (glam >= 6 && glam <= 12) {
    const randomIncrement = Math.floor(Math.random() * 13) + 1; 
    vis += randomIncrement;
  } else if (glam > 13 && glam <= 19) {
    const randomIncrement = Math.floor(Math.random() * 19) + 1;
    vis += randomIncrement;
  } else if (glam >= 20) {
    const randomIncrement = Math.floor(Math.random() * 11) + 20;
    vis += randomIncrement;
  }
  const randomInterval = Math.floor(Math.random() * (10000 - 18000 + 1)) + 18000;
  setTimeout(VisGen, randomInterval);
}

function VisLeave() {
  if (vis > 20) {
    if (glam >= 1 && glam <= 5) {
      const randomIncrement = Math.floor(Math.random() * 3) + 1;
      vis -= randomIncrement;
    } else if (glam >= 6 && glam <= 12) {
      const randomIncrement = Math.floor(Math.random() * 7) + 1; 
      vis -= randomIncrement;
    } else if (glam >= 13 && glam < 20) {
      const randomIncrement = Math.floor(Math.random() * 10) + 1;
      vis -= randomIncrement;
    } else if (glam >= 20) {
      const randomIncrement = Math.floor(Math.random() * 15) + 1;
      vis -= randomIncrement;
    }
  }
  const randomInterval = Math.floor(Math.random() * (11000 - 20000 + 1)) + 20000;
  setTimeout(VisLeave, randomInterval);
}





//Staff Assignment Buttons
function AddNewh(){newh++;}

function AsgnAdm(){if (newh !== 0){{adm++;newh--;}}}
function AsgnSec(){if (newh !== 0){{sec++;newh--;}}}
function AsgnMed(){if (newh !== 0){{med++;newh--;}}}
function AsgnLog(){if (newh !== 0){{log++;newh--;}}}
function AsgnMer(){if (newh !== 0){{mer++;newh--;}}}
function AsgnMnt(){if (newh !== 0){{mnt++;newh--;}}}

function BuildHab(){if (cred >= 15000){{habs++;cred-= 15000;}}}
function BuildDock(){if (cred >= 30000){{docks++;cred-= 30000;}}}
function BuyFuel(){if (cred >= 1000){{fuel+= 100;cred-= 1000;}}}
function BuyShip(){if (cred >= 50000){{ships++;cred-= 50000;}}}








  function Rename() {
    newName = document.getElementById("myInput").value;
    document.getElementById("title").innerHTML = newName + " Station"
    document.getElementById("myInput").value = "";
    localStorage.setItem('newName', newName);
  }
