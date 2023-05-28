function youLose(){
    document.body.innerHTML = "";
    var bodyHTML = `<div id="titleandstart">
    <p id="title">The Station</p>
  </div>
  <br><br><br>
  
    </div>
    <br><br>

    <p id="help"><i>You can no longer afford to keep the station going. Refresh page to start a new game.</i></p>`;

  document.body.innerHTML = bodyHTML;
}





function highPop(){
    if (pop >= 60 || vis >= 300 && pop <120 && vis < 600){
        sick+= 2;crime+=2;damage+=1;}
    else if (pop > 120 || vis > 1200){
        sick+= 4;crime+=4;damage+=3;
        setTimeout(highPop, 60000)
    }
    }
