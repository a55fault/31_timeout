function otvetNaVopros (kto1, kto2) {
    console.log (kto1 + kto2);
};
timer = setInterval (otvetNaVopros, 1000, "ty", " molodets");
setTimeout(() => {
    clearInterval (timer)
}, 2000); 


setTimeout(function tick() {
    console.log ("time up!")
    setTimeout (tick, 100);
}, 1000);