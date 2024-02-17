let quark = document.querySelector(".quark_amount");
let parsedQuark = parseFloat(quark.innerHTML);

let accelCost = document.querySelector(".accel_cost");
let parsedAccelCost = parseFloat(accelCost.innerHTML);
let accelLevel = document.querySelector(".accel_level");
let accelIncrease = document.querySelector(".accel_increase");
let parsedAccelIncrease = parseFloat(accelIncrease.innerHTML);

let nucleus = document.querySelector('#nucleus');
let nucleusCost = document.querySelector(".nucleus_cost");
let parsedNucleusCost = parseFloat(nucleusCost.innerHTML);
let nucleusLevel = document.querySelector(".nucleus_level");
let nucleusIncrease = document.querySelector(".nucleus_increase");
let parsedNucleusIncrease = parseFloat(nucleusIncrease.innerHTML);

let atom = document.querySelector('#atom');
let atomCost = document.querySelector(".atom_cost");
let parsedAtomCost = parseFloat(atomCost.innerHTML);
let atomLevel = document.querySelector(".atom_level");
let atomIncrease = document.querySelector(".atom_increase");
let parsedAtomIncrease = parseFloat(atomIncrease.innerHTML);

let intervalID;

let qpc = 1;
let qps = 0;
let aps = 0;

function incrementQuark(){
    quark.innerHTML = Math.round(parsedQuark += qpc);
}

function buyAccel(){
    if(parsedQuark >= parsedAccelCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedAccelCost);

        accelLevel.innerHTML ++;

        parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.07).toFixed(2));
        accelIncrease.innerHTML = parsedAccelIncrease;
        qpc += parsedAccelIncrease;

        parsedAccelCost *= 1.2;
        accelCost.innerHTML = Math.round(parsedAccelCost);

        if(accelLevel.innerHTML >= 10){
            nucleus.style.cssText = "display: flex;";
        }
    }
}

function buyNucleus(){
    if(parsedQuark >= parsedNucleusCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedNucleusCost);

        nucleusLevel.innerHTML ++;

        qps += 1;
        clearInterval(intervalID);
        intervalID = setInterval(nucleusLoop, 1000);

        parsedNucleusCost *= 1.18;
        nucleusCost.innerHTML = Math.round(parsedNucleusCost);

        if(nucleusLevel.innerHTML >= 10){
            atom.style.cssText = "display: flex;";
        }
    }
}

function buyAtom(){
    if(parsedQuark >= parsedAtomCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedAtomCost);

        atomLevel.innerHTML ++;

        aps += 1;
        clearInterval(intervalID);
        intervalID = setInterval(atomLoop, 1000);

        parsedAtomCost *= 1.5;
        atomCost.innerHTML = Math.round(parsedAtomCost);
    }
}

function nucleusLoop(){
    quark.innerHTML = Math.round(parsedQuark += qps);
}

function atomLoop(){
    for(i = 0; i < atomLevel.innerHTML; i++){
        buyAccel();
    }
}
