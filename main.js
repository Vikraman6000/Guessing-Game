const box = document.getElementById("input");
const butt = document.getElementById("button");
const err = document.getElementById("error");
const again = document.getElementById("play");
const win = document.querySelector(".final");

again.disabled = true;
again.addEventListener('click',()=>{
    window.location.href = "main.html";
});
let num = Math.floor(Math.random()*1000+1);
const validate = (event) => {
  if (event.key == "Enter") guess();
};
const effect = (msg)=>{
  err.textContent = "";
  setTimeout(()=>{
    err.textContent = msg;
  },50);
}
const stop = () => {
  // butt.disabled = true;
  butt.removeEventListener("click", guess);
  // box.disabled = true;
  box.removeEventListener("keypress", validate);
  again.disabled = false;
};

let count = 0;
butt.addEventListener('click',guess);
box.addEventListener("keypress", validate);

function guess(){   
    let value = box.value;
    if(value=="Q"||value=="q"){
        err.textContent = "You have Quit!";
        stop();
    }
    else{
        let comp = Number(value) - num;
        count = count + 1;
        if (isNaN(value)) effect( "Plese enter a valid Number");
        else if (comp > 100) effect( "Your Guess is too High");
        else if (comp > 50) effect( "Your Guess is High");
        else if (comp > 10) effect( "Your Guess is slightly High");
        else if (comp > 5) effect( "Your Guess is just Above");
        else if (comp < -100) effect( "Your Guess is too Low");
        else if (comp < -50) effect( "Your Guess is Low");
        else if (comp < -10) effect( "Your Guess is slightly Low");
        else if (comp < -5) effect( "Your Guess is just Below");
        else if (comp != 0 && comp >= -2 && comp <= 2)
          err.textContent = "Your Guess is almost Near";
        else if (comp != 0 && comp >= -5 && comp <= 5)
          err.textContent = "Your Guess is Near";
        else {
            err.textContent = "";
            win.innerHTML = "<p>Hooray!! You Guessed it Correctly!</p>"+
            "<p>It took "+count+" guesses , Try Faster??</p>";
            stop();          
        }
    }   
}

