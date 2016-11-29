var tab = document.getElementById('tableau');
var cells = tab.getElementsByTagName('td');
for(var i=0; i<9; i++){
  cells[i].onclick = tour;
}
var t = 0;
var p = 1
var win = document.getElementById('winner')

function tour(e){

  if (e.target.className == "player1" || e.target.className == "player2") {
    return;
  }

  if (p === 1) {
    document.getElementById('joueur').innerHTML = "P1";
    e.target.className = 'player1';
    p++;
  }
  else if (p === 2){
    document.getElementById('joueur').innerHTML = "P2";
    e.target.className = 'player2';
    p--;
  }
  t++;
  console.log(t);

//____________________________________________________Victory ?______________________________________//

  if (cells[0].className == "player1" && cells[1].className == "player1" && cells[2].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[3].className == "player1" && cells[4].className == "player1" && cells[5].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[6].className == "player1" && cells[7].className == "player1" && cells[8].className == "player1") {
    win.className = "winnerp1"
    }
  else if (cells[0].className == "player1" && cells[3].className == "player1" && cells[6].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[1].className == "player1" && cells[4].className == "player1" && cells[7].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[2].className == "player1" && cells[5].className == "player1" && cells[8].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[0].className == "player1" && cells[4].className == "player1" && cells[8].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[2].className == "player1" && cells[4].className == "player1" && cells[6].className == "player1") {
    win.className = "winnerp1"
  }
  else if (cells[0].className == "player2" && cells[1].className == "player2" && cells[2].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[3].className == "player2" && cells[4].className == "player2" && cells[5].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[6].className == "player2" && cells[7].className == "player2" && cells[8].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[0].className == "player2" && cells[3].className == "player2" && cells[6].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[1].className == "player2" && cells[4].className == "player2" && cells[7].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[2].className == "player2" && cells[5].className == "player2" && cells[8].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[0].className == "player2" && cells[4].className == "player2" && cells[8].className == "player2") {
    win.className = "winnerp2"
  }
  else if (cells[2].className == "player2" && cells[4].className == "player2" && cells[6].className == "player2") {
    win.className = "winnerp2"
  }
}

function oust(){
  win.className = "1"
}
