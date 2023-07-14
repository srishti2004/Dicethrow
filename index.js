var randomnumber1 = Math.floor(Math.random()*6);
var randomnumber2 = Math.floor(Math.random()*6);
    const dice  = ["images/dice1.png" ,"images/dice2.png" ," images/dice3.png" ,"images/dice4.png" ,"images/dice5.png" ,"images/dice6.png"]  
    var a = dice[randomnumber1];  
    var b = dice[randomnumber2];
  document.querySelector("img.img1").setAttribute("src" ,a);
  document.querySelector("img.img2").setAttribute("src" ,b);

  if (randomnumber1 <randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
  }
else if(randomnumber1> randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML = "draw!";
}