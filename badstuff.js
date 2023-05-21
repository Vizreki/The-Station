
//Need a function to examine all 3 bad stats, then choose the correct function to handle the ones that are bad.
// Like > if crime, do crime() if sick, do sick(), so forth, and then if crime && sick, do crime_sick(), and so forth.
//BadChecker >>>> CrimeResolver / SickResolver / DamageResolver

let allgood = [
    "All systems operational.",
    "Everything is running smoothly.",
    "Visitors and staff are enjoying the station.",]

let genericmultiwarning = "Multiple departments are in need of personnel."

let crimeandsick = "Security and Medical are both reporting insufficient staff. Conditions are deteriorating."
let crimeanddamage = "Security and Maintenance are both reporting insufficient staff. The station is deteriorating rapidly."
let damageandsick = "Medical and Maintenance are both reporting insufficient staff. Conditions are deteriorating."

let crimelvl1 = [
    "Security is reporting that theft is on the rise.",
    "Reports of fights and thefts are increasing.",
    "Some areas of the station are getting unruly.",]

let crimelvl2 = [
    "Crime is getting out of hand. Hire additional security personnel.",
    "Visitors and staff are being targeted by criminals often. Hire additional security personnel.",
    "There was a ship-board robbery at the station yesterday. Hire additional security personnel."]

let crimelvl3 = [
    "Crime on the station is getting out of control. Hire security personnel immediately.",
    "There is a shootout near the upper level lounge. Hire security personnel immediately.",
    "Pirates are openly taking what they want and killing travelers. Hire security personnel immediately."]

let sicklvl1 = [
    "There are very long lines at the clinic.",
    "The clinic is requesting additional staff.",
    "The Medical Director has requested another doctor to open a new clinic.",]

let sicklvl2 = [
    "Quite a few people are sick and cannot get treatment. Hire Medical staff.",
    "A visitor died today because he didn't receive first aid in time. Hire Medical staff.",
    "The sick and injured are having to leave the station. Hire Medical staff."]

let sicklvl3 = [
    "Several patients are in critical condition without proper care. Inrease Healthcare workers immediately.",
    "A strange disease has begun to spread. Hire additional medical staff immediately.",
    "Multiple fatalities have been reported over the past week. Inrease Healthcare workers immediately."]
    
let damagelvl1 = [
    "Wear and tear on the station is getting excessive. Time for some repairs.",
    "A ship has been inoperable for over several days. Increase maintenance staff.",
    "Visitors and staff are complaining about broken machinery and services.",]

let damagelvl2 = [
    "Visitors are beginning to avoid the station due to unsafe conditions. Increase maintennace staff.",
    "Life Support in the cafeteria has failed. The area is being evacuated.",
    "A fuel pump exploded earlier, causing several injuries. Additional maintenance personnel required."]

let damagelvl3 = [
    "Many services are offline and Dock A is barely functional. Increase maintenance immediately.",
    "The station is at risk of significant damage or destruction due to multiple hazards.",
    "There are multiple unsafe conditions putting visitors and staff at risk. Increase maintenance immediately."]
  
//document.getElementById("status").innerHTML = allgood[Math.floor(Math.random() * allgood.length)];


function badChecker(){
    if (crime > 1 || sick  > 1 || damage >1){
        let worst = Math.max(crime, sick, damage);
        if (worst === crime){
            switch (crime){
                case 2:
                case 3:
                    document.getElementById("status").innerHTML = crimelvl1[Math.floor(Math.random() * crimelvl1.length)];
            }
        }
    }










    else {document.getElementById("status").innerHTML = allgood[Math.floor(Math.random() * allgood.length)];}
    setTimeout(badChecker, 20000)
}
