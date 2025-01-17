
var randomVal1;
var randomVal2;
var player1="Player 1";
var player2="Player 2";
 document.querySelector("#change").addEventListener("click",function (){
     player1=prompt("enter player 1 name:");
     player2=prompt("enter player 2 name:");
    document.querySelector(".p1 p").innerHTML=`${player1}`;
    document.querySelector(".p2 p").innerHTML=`${player2}`;
    });
    
   



    
    document.querySelector(".btn1").addEventListener("click",function()
    {
        var audio=new Audio('./audio/click.unknown');
        audio.play();
        randomVal1=Math.floor(Math.random()*6)+1;
        document.querySelector(".img1").setAttribute("src",`images/${randomVal1}.jpg`);
    });





    document.querySelector(".btn2").addEventListener("click",function()
    {
        var audio=new Audio('./audio/click.unknown');
        audio.play();
        
        randomVal2=Math.floor(Math.random()*6)+1;
        document.querySelector(".img2").setAttribute("src",`images/${randomVal2}.jpg`);


        if(randomVal1>randomVal2)
            {
                document.querySelector("#output").innerHTML=`🎊 ${player1} won 🎊`;
            }
            else if(randomVal1<randomVal2){
                document.querySelector("#output").innerHTML=`🎊 ${player2} won 🎊`;
            }
            else{
                document.querySelector("#output").innerHTML=`DRAW`;
            }



    });








    
    











