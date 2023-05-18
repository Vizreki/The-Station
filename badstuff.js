
//Need a function to compare all 3 bad stats, then choose the correct function to handle the ones that are bad.
// Like > if crime, do crime() if sick, do sick(), so forth, and then if crime && sick, do crime_sick(), and so forth.



//Handles the crime, sickness, and maintenance problems

    //Possible Status Messages
    let crimelvl1 = [
        "A few thefts have been reported recently.",
        "Reports of suspicious activity are increasing.",
        "The bar areas are getting unruly.",
    ]
    let crimelvl2 = [
        "Crime is getting out of hand. Hire additional security personnel.",
        "Visitors and staff do not feel safe. Hire additional security personnel.",
        "There was a ship-board robbery yesterday. Hire additional security personnel."
    ]
    let crimelvl3 = [
        "The station is out of control. Hire security personnel immediately.",
        "Habitation Zone B is a warzone. Hire security personnel immediately.",
        "Pirates are openly taking what they want. Hire security personnel immediately."
    ]


    




function CrimeChecker(){
    if (crime >= 3 && crime <= 5) {
   
        document.getElementById("status").innerHTML = "Crime is happening!";
      } else if (crime >= 6 && crime <= 10) {
      
        
      } else if (crime >= 11) {
       
        
      }
      setTimeout(CrimeChecker, 1000)
}