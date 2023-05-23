
//Need a function to examine all 3 bad stats, then choose the correct function to handle the ones that are bad.
// Like > if crime, do crime() if sick, do sick(), so forth, and then if crime && sick, do crime_sick(), and so forth.
//BadChecker >>>> CrimeResolver / SickResolver / DamageResolver

let allgood = [
    "Report: All systems operational.",
    "Report: Everything is running smoothly.",
    "Report: Visitors and staff are enjoying the station.",]

let genericwarning = "Report: One or more departments could use additional staff."

let crimelvl1 = [
    "Report: Security is reporting that theft is on the rise.",
    "Report: Fights and theft seem to be increasing.",
    "Report: Visitors are avoiding parts of the station due to crime.",]

let crimelvl2 = [
    "Report: Crime is getting out of hand. Hire additional security personnel.",
    "Report: Visitors and staff are being targeted by criminals often. Hire additional security personnel.",
    "Report: There was a ship-board robbery at the station yesterday. Hire additional security personnel."]

let crimelvl3 = [
    "Report: Crime on the station is out of control. Hire security personnel immediately.",
    "Report: There is a shootout near the upper level lounge. Hire security personnel immediately.",
    "Report: Pirates are openly taking what they want and killing travelers. Hire security personnel immediately."]

let sicklvl1 = [
    "Report: There are very long lines at the clinic.",
    "Report: The clinic is requesting additional staff.",
    "Report: The Medical Director has requested another doctor to open a new clinic.",]

let sicklvl2 = [
    "Report: Quite a few people are sick and cannot get treatment. Hire Medical staff.",
    "Report: A visitor died today because he didn't receive first aid in time. Hire Medical staff.",
    "Report: The sick and injured are having to leave the station. Hire Medical staff."]

let sicklvl3 = [
    "Report: Several patients are in critical condition without proper care. Inrease Healthcare workers immediately.",
    "Report: A strange disease has begun to spread. Hire additional medical staff immediately.",
    "Report: Multiple fatalities have been reported over the past week. Inrease Healthcare workers immediately."]
    
let damagelvl1 = [
    "Report: Wear and tear on the station is getting excessive. Time for some repairs.",
    "Report: A ship has been inoperable for over several days. Increase maintenance staff.",
    "Report: Visitors and staff are complaining about broken machinery and services.",]

let damagelvl2 = [
    "Report: Visitors are beginning to avoid the station due to unsafe conditions. Increase maintennace staff.",
    "Report: Life Support in the cafeteria has failed. The area is being evacuated.",
    "Report: A fuel pump exploded earlier, causing several injuries. Additional maintenance personnel required."]

let damagelvl3 = [
    "Report: Many services are offline and Dock A is barely functional. Increase maintenance immediately.",
    "Report: The station is at risk of significant damage or destruction due to multiple hazards.",
    "Report: There are multiple unsafe conditions putting visitors and staff at risk. Increase maintenance immediately."]
  
function Theft1(){stolen = vis * Math.floor(Math.random() * 8) + 4;cred -= stolen;}
function Theft2(){stolen = vis * Math.floor(Math.random() * 10) + 5;cred -= stolen;}
function Theft3(){stolen = vis * Math.floor(Math.random() * 12) + 10;cred -= stolen;}

function Sickness1(){vis -= Math.floor(vis * .2);}
function Sickness2(){vis -= Math.floor(vis * .4);}
function Sickness3(){vis -= Math.floor(vis * .6);}

function Damages1(){vis -= Math.floor(vis * .1);glam--;}
function Damages2(){vis -= Math.floor(vis * .25);glam--;}
function Damages3(){vis -= Math.floor(vis * .5);glam-= 2;}

function BadChecker(){
    if (crime > 1 || sick  > 1 || damage >1){
        let worst = Math.max(crime, sick, damage);
        if (worst === crime){
            if (crime >= 2 && crime <= 3){
            document.getElementById("status").innerHTML = crimelvl1[Math.floor(Math.random() * crimelvl1.length)];Theft1();
            } else if (crime >= 4 && crime <= 7){
                document.getElementById("status").innerHTML = crimelvl2[Math.floor(Math.random() * crimelvl2.length)];
                document.getElementById("status").style.color = "rgb(255, 255, 0)";Theft2();
            } else if (crime >= 8){
                document.getElementById("status").innerHTML = crimelvl3[Math.floor(Math.random() * crimelvl3.length)];
                document.getElementById("status").style.color = "rgb(255, 0, 0)";Theft3();}}
        
        if (worst === sick){
            if (sick >= 2 && sick <= 3){
            document.getElementById("status").innerHTML = sicklvl1[Math.floor(Math.random() * sicklvl1.length)];Sickness1();
            } else if (sick >= 4 && sick <= 7){
                document.getElementById("status").innerHTML = sicklvl2[Math.floor(Math.random() * sicklvl2.length)];
                document.getElementById("status").style.color = "rgb(255, 255, 0)";Sickness2();
            } else if (sick >= 8){
                document.getElementById("status").innerHTML = sicklvl3[Math.floor(Math.random() * crimelvl3.length)];
                document.getElementById("status").style.color = "rgb(255, 0, 0)";Sickness3();}}
                
        if (worst === damage){
            if (damage >= 2 && damage <= 3){
            document.getElementById("status").innerHTML = damagelvl1[Math.floor(Math.random() * damagelvl1.length)];Damages1();
            } else if (damage >= 4 && damage <= 7){
                document.getElementById("status").innerHTML = damagelvl2[Math.floor(Math.random() * damagelvl2.length)];
                document.getElementById("status").style.color = "rgb(255, 255, 0)";Damages2();
            } else if (damage >= 8){
                document.getElementById("status").innerHTML = damagelvl3[Math.floor(Math.random() * damagelvl3.length)];
                document.getElementById("status").style.color = "rgb(255, 0, 0)";Damages3();}}

            }

    else if (crime === 1 || sick  === 1 || damage === 1){
        {document.getElementById("status").innerHTML = genericwarning;}
    } else document.getElementById("status").innerHTML = allgood[Math.floor(Math.random() * allgood.length)]        
    }


    
