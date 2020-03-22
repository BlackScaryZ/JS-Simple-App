let allvalues = [];
let newvalue = 0;
let lastvalue = 0;
let lastmc = 0;
let count = 0;
let bigseq = [];
let actualseq = [];
let isOn = false;
let x;
function moyenne(xxx) {
    if(xxx === undefined) {
        newvalue = Number(document.getElementById("nombreentier").value);
    } else {
        newvalue = Number(xxx);
    }
    if(Number.isInteger(newvalue)== true) {
    allvalues.push(newvalue);
    const total = allvalues.reduce((a, b) => a + b);
    document.getElementById("value1").innerHTML = allvalues.length;
    document.getElementById("value2").innerHTML = total;
    document.getElementById("value3").innerHTML = Math.max.apply(null, allvalues);
    document.getElementById("value4").innerHTML = Math.min.apply(null, allvalues);
    document.getElementById("value5").innerHTML = total / allvalues.length;
    document.getElementById("value6").innerHTML = allvalues;
    if(newvalue > lastvalue) {count = count + 1;actualseq.push(newvalue);} else {count = 1;actualseq = [newvalue];}
    if(count > lastmc) { lastmc = count;bigseq = actualseq; }
    document.getElementById("value7").innerHTML = bigseq;
    lastvalue = newvalue;
  } else {
    alert("Veuillez entrer un nombre entier");
  }
}
function reset() {
	allvalues = [];
	newvalue = 0;
	lastvalue = 0;
	lastmc = 0;
	count = 0;
    bigseq = [];
    actualseq = [];
    isOn = false;
    clearTimeout(x);
    Array.from(document.querySelectorAll(".result")).forEach((rat) => rat.innerHTML = '0');
    document.getElementById("auto").innerHTML = 'Activer le mode automatique';
}
function randomnumb() {
    if(isOn) {
        clearTimeout(x);
        isOn = false;
        document.getElementById("auto").innerHTML = 'Activer le mode automatique';
    } else {
        x = setInterval(function(){ moyenne(Math.floor(Math.random() * 100)) }, 100);
        isOn = true;
        document.getElementById("auto").innerHTML = 'Arrêter le mode automatique';
    }
}