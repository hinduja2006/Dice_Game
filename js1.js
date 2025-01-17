var player1="Player";


document.querySelector("#play").addEventListener("click",function(){

    var audio=new Audio('./audio/click.unknown');
    audio.play();

    
    randomVal1=Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src",`images/${randomVal1}.jpg`);


    randomVal2=Math.floor(Math.random()*6)+1;
    document.querySelector(".img2").setAttribute("src",`images/${randomVal2}.jpg`);


    if(randomVal1>randomVal2)
        {
            document.querySelector("#output").innerHTML=`🎊 ${player1} won 🎊`;
        }
        else if(randomVal1<randomVal2){
            document.querySelector("#output").innerHTML=`🎊 BOT won 🎊`;
        }
        else{
            document.querySelector("#output").innerHTML=`DRAW`;
        }
});


document.querySelector("#change").addEventListener("click",function (){
    player1=prompt("Enter player name:");
   document.querySelector(".p1 p").innerHTML=`${player1}`;
});