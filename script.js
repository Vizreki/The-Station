let cred = 100;
let fuel = 100;
let habs = 1;
let goods = 0;
let ships = 1;
let pop = 1;
let newh = 1;
let vis = 0;
let ports = 1;
let adm = 1;
let sec = 0;
let med = 0;
let log = 0;
let tra = 0;
let mnt = 0;

let crime = 0;
let sick = 0;
let broke = 0;


let newName = localStorage.getItem('newName') || '';

console.log("This is a management game. Other intro text to follow.");

document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('myInput');
  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('renamebutton').click();
    }
  });
});

window.onload = function() {
  newName = localStorage.getItem('newName') || '';
  document.getElementById("title").innerHTML = newName + " Station";
  DisplayNums();
  DisplayStatus();
  DisplayIntervals();
};

//UI Updater
function DisplayNums(){
    let commaCred = cred.toLocaleString();
    document.getElementById("cd").innerHTML = "Credits: " + commaCred;
    document.getElementById("fl").innerHTML = "Fuel: " + fuel;
    document.getElementById("hb").innerHTML = "Habs: " + habs;
    document.getElementById("gd").innerHTML = "Goods: " + goods;
    document.getElementById("sh").innerHTML = "Ships: " + ships;
    document.getElementById("pt").innerHTML = "Ports: " + ports;
    document.getElementById("po").innerHTML = "Population: " + pop;
    document.getElementById("nh").innerHTML = "New Hires: " + newh;
    document.getElementById("vi").innerHTML = "Visitors: " + vis;
    document.getElementById("ad").innerHTML = "Admin: " + adm;
    document.getElementById("sc").innerHTML = "Security: " + sec;
    document.getElementById("md").innerHTML = "Medical: " + med;
    document.getElementById("lg").innerHTML = "Logistics: " + log;
    document.getElementById("td").innerHTML = "Traders: " + tra;
    document.getElementById("mt").innerHTML = "Maintenance: " + mnt;
    }

function DisplayStatus(){
  document.getElementById("status").innerHTML = "No issues reported.";
}
    
function DisplayIntervals(){
    setInterval(DisplayNums, 400)
    setInterval(Addnewh, 15000);
}

//Staff Assignment Buttons
function AddNewh(){newh++;}

function AsgnAdm(){adm++;}
function AsgnSec(){sec++;}
function AsgnMed(){med++;}
function AsgnLog(){log++;}
function AsgnTra(){tra++;}
function AsgnMnt(){mnt++;}

function BuildHab(){habs++;}
function BuildPort(){habs++;}









  function Rename() {
    newName = document.getElementById("myInput").value;
    document.getElementById("title").innerHTML = newName + " Station"
    document.getElementById("myInput").value = "";
    localStorage.setItem('newName', newName);
  }
