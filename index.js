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
let parsedAtomCost = 10000000;
let atomLevel = document.querySelector(".atom_level");
let atomIncrease = document.querySelector(".atom_increase");
let parsedAtomIncrease = parseFloat(atomIncrease.innerHTML);

let intervalID = setInterval(gameLoop, 0.1);
let intervalID1 = setInterval(oneSecondLoop, 1000);

let qpc = 1;
let qps = 0;
let aps = 0;

function gameLoop(){
    if(parsedQuark >= 1000000){
        quark.innerHTML = (parsedQuark/1000000).toFixed(2) + "M";
    }
}

function oneSecondLoop(){
    quark.innerHTML = Math.round(parsedQuark += qps);
    for(i = 0; i < aps; i++){
        accelLevel.innerHTML ++;
        qpc += parsedAccelIncrease;
        parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.07).toFixed(2));
        accelIncrease.innerHTML = parsedAccelIncrease;
    }
}

function incrementQuark(){
    quark.innerHTML = Math.round(parsedQuark += qpc);
}

function buyAccel(){
    if(parsedQuark >= parsedAccelCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedAccelCost);

        accelLevel.innerHTML ++;

        qpc += parsedAccelIncrease;
        parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.07).toFixed(2));
        accelIncrease.innerHTML = parsedAccelIncrease;

        parsedAccelCost *= 1.2;
        if(parsedAccelCost >= 1000000){
            accelCost.innerHTML = (parsedAccelCost/1000000).toFixed(2) + "M";
        } else {
            accelCost.innerHTML = Math.round(parsedAccelCost);
        }
        
        if(accelLevel.innerHTML >= 10){
            nucleus.style.cssText = "display: flex;";
        }
    }
}

function buyNucleus(){
    if(parsedQuark >= parsedNucleusCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedNucleusCost);

        nucleusLevel.innerHTML ++;

        qps += parsedNucleusIncrease;
        if(parsedNucleusIncrease <= 1000){
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 3).toFixed(2));
        } else {
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 1.05).toFixed(2));
        }
        nucleusIncrease.innerHTML = parsedNucleusIncrease;

        parsedNucleusCost *= 1.2;
        if(parsedNucleusCost >= 1000000){
            nucleusCost.innerHTML = (parsedNucleusCost/1000000).toFixed(2) + "M";
        } else {
            nucleusCost.innerHTML = Math.round(parsedNucleusCost);
        }

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

        parsedAtomCost *= 1.5;
        if(parsedAtomCost >= 1000000){
            atomCost.innerHTML = (parsedAtomCost/1000000).toFixed(2) + "M";
        } else {
            atomCost.innerHTML = Math.round(parsedAtomCost);
        }
    }
}
