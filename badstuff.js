
//Need a function to examine all 3 bad stats, then choose the correct function to handle the ones that are bad.
// Like > if crime, do crime() if sick, do sick(), so forth, and then if crime && sick, do crime_sick(), and so forth.
//BadChecker >>>> CrimeResolver / SickResolver / DamageResolver


//Handles the crime, medical, and maintenance problems

let genericMultiWarning = "Multiple departments are in need of personnel."

let crimeAndSick = "Security and Medical are both reporting insufficient staff. Conditions are deteriorating."
let crimeAndDamage = "Security and Maintenance are both reporting insufficient staff. The station is deteriorating rapidly."
let damageAndSick = "Medical and Maintenance are both reporting insufficient staff. Conditions are deteriorating."

let crimelvl1 = [
    "Security reports indicate theft is on the rise.",
    "Reports of fights and thefts are increasing.",
    "The bar areas are getting unruly.",]

let crimelvl2 = [
    "Crime is getting out of hand. Hire additional security personnel.",
    "Visitors and staff are being targeted frequently. Hire additional security personnel.",
    "There was a ship-board robbery yesterday. Hire additional security personnel."]

let crimelvl3 = [
    "The station is getting out of control. Hire security personnel immediately.",
    "Habitation Zone B has turned into a warzone. Hire security personnel immediately.",
    "Pirates are openly taking what they want. Hire security personnel immediately."]

let sicklvl1 = [
    "There are very long lines at the clinic.",
    "The clinic is requesting additional staff.",
    "The Medical Director has requested another doctor for a new clinic.",]

let sicklvl2 = [
    "Quite a few people are sick and cannot get treatment. Hire Medical staff.",
    "A visitor died today because he didn't receive first aid in time. Hire Medical staff.",
    "The sick and injured are having to leave the station. Hire Medical staff."]

let sicklvl3 = [
    "Several patients are in critical condition without proper care. Inrease Healthcare workers immediately.",
    "A strange disease has begun to spread. Hire additional medical staff immediately.",
    "Multiple fatalities have been reported over the past week. Inrease Healthcare workers immediately."]
    
let damagelvl1 = [
    "Wear and tear on the station and ships is getting excessive.",
    "A ship has been inoperable for over a week. Increase maintenance staff.",
    "Visitors and staff are complaining about broken machinery and services.",]

let damagelvl2 = [
    "Visitors are avoiding Dock A due to unsafe conditions. Increase maintennace staff.",
    "Life Support in the cafeteria has failed. The area is being evacuated and locked down.",
    "A fuel pump exploded earlier, causing several injuries. Additional maintenance personnel required."]

let damagelvl3 = [
    "Several areas are inhospitable and most services are offline. Increase maintenance immediately.",
    "The station is at risk of significant damage or destruction due to multiple hazards.",
    "There are multiple unsafe conditions putting visitors and staff at risk. Increase maintenance immediately."]
  


    
function CrimeChecker(){
    if (crime >= 3 && crime <= 5) {
   
        document.getElementById("status").innerHTML = "Crime is happening!";
      } else if (crime >= 6 && crime <= 10) {
      
        
      } else if (crime >= 11) {
       
        
      }
      setTimeout(CrimeChecker, 1000)
}