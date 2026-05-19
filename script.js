let heading = document.querySelector("h1");
    let btn = document.getElementById("tossBtn");
    let coin = document.getElementById("coin");

    btn.addEventListener("click", () => {
    coin.classList.add("roll");

    setTimeout(() => {
    coin.classList.remove("roll");
    let random = Math.ceil(Math.random() * 2);
    if (random === 1) {
      coin.src = "imgs/head.png";    
      heading.innerText = "HEAD 😍";
    } else {
      coin.src = "imgs/tail.png"; 
      heading.innerText = "TAIL 😜";
    }
  }, 1000);  
});