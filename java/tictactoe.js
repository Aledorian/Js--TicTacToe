var tab = document.getElementById('tableau');
var cells = tab.getElementsByTagName('td');
for(var i=0; i<9; i++){
  cells[i].onclick = tour;
}
var t = 0;

function tour(e){
  if (t === 0 || t === 2 || t === 4 || t === 6 || t === 8) {
    document.getElementById('joueur').innerHTML = "P1";
    e.target.className = 'player1';
  }
  else if (t === 1 || t === 3 || t === 5 || t === 7){
    document.getElementById('joueur').innerHTML = "P2";
    e.target.className = 'player2';
  }
  else{
    document.getElementById('joueur').innerHTML = "Fin";
  }
  t++;
  console.log(t);
}

if
