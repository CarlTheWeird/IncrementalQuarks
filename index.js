let quark = document.querySelector(".quark_amount");
let parsedQuark = parseFloat(quark.innerHTML);

let accelCost = document.querySelector(".accel_cost");
let parsedAccelCost = parseFloat(accelCost.innerHTML);
let accelLevel = document.querySelector(".accel_level");
let accelIncrease = document.querySelector(".accel_increase");
let parsedAccelIncrease = parseFloat(accelIncrease.innerHTML);

let nucleus = document.querySelector('#nucleus');
let nucleusCost = document.querySelector(".nucleus_cost");
let parsedNucleusCost = 5000;
let nucleusLevel = document.querySelector(".nucleus_level");
let nucleusIncrease = document.querySelector(".nucleus_increase");
let parsedNucleusIncrease = parseFloat(nucleusIncrease.innerHTML);

let atom = document.querySelector('#atom');
let atomCost = document.querySelector(".atom_cost");
let parsedAtomCost = 10000000;
let atomLevel = document.querySelector(".atom_level");
let atomIncrease = document.querySelector(".atom_increase");
let parsedAtomIncrease = parseFloat(atomIncrease.innerHTML);

let molecule = document.querySelector('#molecule');
let moleCost = document.querySelector(".mole_cost");
let parsedMoleCost = 10000000000;
let moleLevel = document.querySelector(".mole_level");
let moleIncrease = document.querySelector(".mole_increase");
let parsedMoleIncrease = parseFloat(atomIncrease.innerHTML);

let intervalID = setInterval(gameLoop, 1);
let intervalID1 = setInterval(oneSecondLoop, 1000);

let qpc = 1;
let qps = 0;
let aps = 0;

let prestige = document.querySelector(".prestige");
let prestige_cost = 10000000000;
let prestige_amount = 0;
let multiplier = 1;

function gameLoop(){
    if(parsedQuark >= 1000000000000){
        quark.innerHTML = (parsedQuark/1000000000000).toFixed(2) + "T";
    } else if(parsedQuark >= 1000000000){
        quark.innerHTML = (parsedQuark/1000000000).toFixed(2) + "B";
    } else if(parsedQuark >= 1000000){
        quark.innerHTML = (parsedQuark/1000000).toFixed(2) + "M";
    } else if(parsedQuark >= 1000){
        quark.innerHTML = (parsedQuark/1000).toFixed(2) + "K";
    } else {
        quark.innerHTML = Math.round(parsedQuark);
    }

    if(parsedQuark >= prestige_cost){
        prestige.style.display = "block";
    }
}

function oneSecondLoop(){
    quark.innerHTML = Math.round(parsedQuark += qps);
    for(i = 0; i < aps; i++){
        accelLevel.innerHTML ++;
        qpc += parsedAccelIncrease*2*multiplier;
        parsedAccelIncrease = parseFloat((parsedAccelIncrease).toFixed(2));
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

        qpc += parsedAccelIncrease*multiplier;
        
        if(accelLevel.innerHTML >= 250){
            parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.2).toFixed(2));
        } else {
            parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.07).toFixed(2));
        }
        
        if(parsedAccelIncrease >= 1000000){
            accelIncrease.innerHTML = (parsedAccelIncrease/1000000).toFixed(2) + "M";
        } else if(parsedAccelIncrease >= 1000){
            accelIncrease.innerHTML = (parsedAccelIncrease/1000).toFixed(2) + "K";
        } else {
            accelIncrease.innerHTML = parsedAccelIncrease;
        }

        parsedAccelCost *= 1.2;
        if(parsedAccelCost >= 1000000000000){
            accelCost.innerHTML = (parsedAccelCost/1000000000000).toFixed(2) + "T";
        } else if(parsedAccelCost >= 1000000000){
            accelCost.innerHTML = (parsedAccelCost/1000000000).toFixed(2) + "B";
        } else if(parsedAccelCost >= 1000000){
            accelCost.innerHTML = (parsedAccelCost/1000000).toFixed(2) + "M";
        } else if(parsedAccelCost >= 1000){
            accelCost.innerHTML = (parsedAccelCost/1000).toFixed(2) + "K";
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

        qps += parsedNucleusIncrease*multiplier;
        if(parsedNucleusIncrease <= 5000){
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 3).toFixed(2));
        } else {
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 1.1).toFixed(2));
        }

        if(parsedNucleusIncrease >= 1000000){
            nucleusIncrease.innerHTML = (parsedNucleusIncrease/1000000).toFixed(2) + "M";
        } else if(parsedNucleusIncrease >= 1000){
            nucleusIncrease.innerHTML = (parsedNucleusIncrease/1000).toFixed(2) + "K";
        } else {
            nucleusIncrease.innerHTML = parsedNucleusIncrease;
        }

        parsedNucleusCost *= 1.2;
        if(parsedNucleusCost >= 1000000000000){
            nucleusCost.innerHTML = (parsedNucleusCost/1000000000000).toFixed(2) + "T";
        } else if(parsedNucleusCost >= 1000000000){
            nucleusCost.innerHTML = (parsedNucleusCost/1000000000).toFixed(2) + "B";
        } else if(parsedNucleusCost >= 1000000){
            nucleusCost.innerHTML = (parsedNucleusCost/1000000).toFixed(2) + "M";
        } else if(parsedNucleusCost >= 1000){
            nucleusCost.innerHTML = (parsedNucleusCost/1000).toFixed(2) + "K";
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

        aps += 1*multiplier;

        parsedAtomCost *= 1.35;
        if(parsedAtomCost >= 1000000000000){
            atomCost.innerHTML = (parsedAtomCost/1000000000000).toFixed(2) + "T";
        } else if(parsedAtomCost >= 1000000000){
            atomCost.innerHTML = (parsedAtomCost/1000000000).toFixed(2) + "B";
        } else if(parsedAtomCost >= 1000000){
            atomCost.innerHTML = (parsedAtomCost/1000000).toFixed(2) + "M";
        } else if(parsedAtomCost >= 1000){
            atomCost.innerHTML = (parsedAtomCost/1000).toFixed(2) + "K";
        } else {
            atomCost.innerHTML = Math.round(parsedAtomCost);
        }
    }
}

function buyMolecule(){
    if(parsedQuark >= parsedMoleCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedMoleCost);

        moleLevel.innerHTML ++;

        nps += 1*multiplier;

        parsedMoleCost *= 2;
        if(parsedMoleCost >= 1000000000000){
            moleCost.innerHTML = (parsedMoleCost/1000000000000).toFixed(2) + "T";
        } else if(parsedMoleCost >= 1000000000){
            moleCost.innerHTML = (parsedMoleCost/1000000000).toFixed(2) + "B";
        } else if(parsedMoleCost >= 1000000){
            atomCost.innerHTML = (parsedMoleCost/1000000).toFixed(2) + "M";
        } else if(parsedMoleCost >= 1000){
            moleCost.innerHTML = (parsedMoleCost/1000).toFixed(2) + "K";
        } else {
            moleCost.innerHTML = Math.round(parsedMoleCost);
        }
    }
}

function resetLevels(){
    accelLevel.innerHTML = 0;
    nucleusLevel.innerHTML = 0;
    atomLevel.innerHTML = 0;
    qpc = 1;
    qps = 0;
    aps = 0;
}

function doPrestige(){
    if(prestige_amount < 5){
        prestige.style.display = "none";
        prestige_amount++;
        parsedQuark = 0;
        resetLevels();
        prestige_cost*10;
        for(i = 0; i < prestige_amount; i++){
            multiplier*1.1;
        }
    } else {
        window.location = "game_over.html";
    }
}
