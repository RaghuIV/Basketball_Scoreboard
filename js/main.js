let soundEl = document.querySelector(".sound");
let textEl = document.querySelector("#text");
let sumh = 0;
let sumg = 0;
let onehEl = document.querySelector(".oneh");
let twohEl = document.querySelector(".twoh");
let threehEl = document.querySelector(".threeh");
let onegEl = document.querySelector(".oneg");
let twogEl = document.querySelector(".twog");
let threegEl = document.querySelector(".threeg");
let scoreEl = document.querySelector(".scoreh");
let scoreGl = document.querySelector(".scoreg")
let btEl = document.querySelector(".bt");
let player = "off";


soundEl.addEventListener("click", () => {
    textEl.textContent = "Start Playing !!";
    soundEl.style.display = "none";
    btEl.style.display = "inline-block";
    player = "on";
});

btEl.addEventListener("click", ()=> {
    if(sumg>sumh)
    {
        textEl.textContent = "Guest Team Won, start a new game!"
        soundEl.style.display = "inline-block";
        btEl.style.display = "none";
        
    }else if(sumg<sumh)
    {
        textEl.textContent = "Home Team Won, start a new game!"
        soundEl.style.display = "inline-block";
        btEl.style.display = "none";

    }else{
        textEl.textContent = "It's a Draw, start a new game!"
        soundEl.style.display = "inline-block";
        btEl.style.display = "none";
    }
    sumg=0;
    sumh=0;
    scoreEl.textContent= sumh;
    scoreGl.textContent= sumg;
    player = "off";
});


onehEl.addEventListener("click", function() {
    if(player==="on")
    {sumh += + 1;
    scoreEl.textContent= sumh;}
    else (
        textEl.textContent = "Please start game."
    )
});

twohEl.addEventListener("click", function() {
    if(player==="on")
    {sumh += + 2;
    scoreEl.textContent=sumh;}
    else (
        textEl.textContent = "Please start game."
    )

});

threehEl.addEventListener("click", function() {
    if(player==="on")
    {sumh += + 3;
    scoreEl.textContent=sumh;}
    else (
        textEl.textContent = "Please start game."
    )
});

onegEl.addEventListener("click", function() {
    if(player==="on")
    {sumg += + 1;
    scoreGl.textContent= sumg;}
    else (
        textEl.textContent = "Please start game."
    )
});

twogEl.addEventListener("click", function() {
    if(player==="on")
    {sumg += + 2;
    scoreGl.textContent=sumg;}
    else (
        textEl.textContent = "Please start game."
    )
});

threegEl.addEventListener("click", function() {
    if(player==="on")
    {sumg += + 3;
    scoreGl.textContent=sumg;}
    else (
        textEl.textContent = "Please start game."
    )
});