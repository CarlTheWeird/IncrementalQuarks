var quark = document.querySelector(".quark_amount");
var parsedQuark = parseFloat(quark.innerHTML);

var accelCost = document.querySelector(".accel_cost");
var parsedAccelCost = parseFloat(accelCost.innerHTML);
var accelLevel = document.querySelector(".accel_level");
var accelIncrease = document.querySelector(".accel_increase");
var parsedAccelIncrease = parseFloat(accelIncrease.innerHTML);

var nucleus = document.querySelector('#nucleus');
var nucleusCost = document.querySelector(".nucleus_cost");
var parsedNucleusCost = 5000;
var nucleusLevel = document.querySelector(".nucleus_level");
var nucleusIncrease = document.querySelector(".nucleus_increase");
var parsedNucleusIncrease = parseFloat(nucleusIncrease.innerHTML);

var atom = document.querySelector('#atom');
var atomCost = document.querySelector(".atom_cost");
var parsedAtomCost = 10000000;
var atomLevel = document.querySelector(".atom_level");
var atomIncrease = document.querySelector(".atom_increase");
var parsedAtomIncrease = parseFloat(atomIncrease.innerHTML);

var molecule = document.querySelector('#molecule');
var moleCost = document.querySelector(".mole_cost");
var parsedMoleCost = 10000000000;
var moleLevel = document.querySelector(".mole_level");
var moleIncrease = document.querySelector(".mole_increase");
var parsedMoleIncrease = parseFloat(atomIncrease.innerHTML);

setInterval(gameLoop, 1);
setInterval(oneSecondLoop, 1000);

var qpc = 1;
var qps = 0;
var aps = 0;
var npfs = 0;

var mole_control = 0;
var show_mole_poss = false;

var prestige = document.querySelector(".prestige");
var prestigeCost = document.querySelector("#prestige_cost");
var parsedPrestigeCost = 10000000000;
var prestigeInfo = document.querySelector(".prestige_info");
var prestigeAmount = document.querySelector(".prestigeAmount");
var parsedPrestigeAmount = 0;
var multiplier = document.querySelector(".multiplier");
var parsedMultiplier = 1;

function quantify(x){
    if(x >= 1000000000000000000){
        return (x / 1000000000000000000).toFixed(2) + "Qt";
    } else if(x >= 1000000000000000){
        return (x / 1000000000000000).toFixed(2) + "Qa";
    } else if(x >= 1000000000000){
        return (x / 1000000000000).toFixed(2) + "T";
    } else if(x >= 1000000000){
        return (x / 1000000000).toFixed(2) + "B";
    } else if(x >= 1000000){
        return (x / 1000000).toFixed(2) + "M";
    } else if(x >= 1000){
        return (x / 1000).toFixed(2) + "K";
    } else {
        return (x).toFixed(2);
    }
}

function gameLoop(){
    quark.innerHTML = quantify(parsedQuark);

    if(parsedQuark >= parsedPrestigeCost){
        prestige.style.display = "block";
    }

    if(parsedPrestigeAmount > 0){
        prestigeInfo.style.display = "block";
    }
}

function oneSecondLoop(){
    if(qps > 0){
        quark.innerHTML = Math.round(parsedQuark += qps);
    }

    for(i = 0; i < aps; i++){
        accelLevel.innerHTML ++;
        qpc += parsedAccelIncrease*2*parsedMultiplier;
    }

    if(moleLevel > 0){
        mole_control++;
        if(mole_control == 5){
            for(i = 0; i < npfs; i++){
                nucleusLevel.innerHTML++;
                qps += parsedNucleusIncrease*parsedMultiplier;
            }
            mole_control = 0;
        }
    }
}

function incrementQuark(){
    more_quarks = parsedQuark += qpc;
    quark.innerHTML = quantify(more_quarks);
}

function buyAccel(){
    if(parsedQuark >= parsedAccelCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedAccelCost);

        accelLevel.innerHTML ++;

        qpc += parsedAccelIncrease*parsedMultiplier;
        
        if(accelLevel.innerHTML >= 250){
            parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.2).toFixed(2));
        } else {
            parsedAccelIncrease = parseFloat((parsedAccelIncrease * 1.07).toFixed(2));
        }
        
        accelIncrease.innerHTML = quantify(parsedAccelIncrease);

        parsedAccelCost *= 1.2;
        accelCost.innerHTML = quantify(parsedAccelCost);
        
        if(accelLevel.innerHTML >= 10){
            nucleus.style.cssText = "display: flex;";
        }
    }
}

function buyNucleus(){
    if(parsedQuark >= parsedNucleusCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedNucleusCost);

        nucleusLevel.innerHTML ++;

        qps += parsedNucleusIncrease*parsedMultiplier;
        if(parsedNucleusIncrease <= 10000){
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 3).toFixed(2));
        } else if(parsedNucleusIncrease >= 1000000) {
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 1.001).toFixed(2));
        } else {
            parsedNucleusIncrease = parseFloat((parsedNucleusIncrease * 1.15).toFixed(2));
        }

        nucleusIncrease.innerHTML = quantify(parsedNucleusIncrease);

        parsedNucleusCost *= 1.2;
        nucleusCost.innerHTML = quantify(parsedNucleusCost);

        if(nucleusLevel.innerHTML >= 10){
            atom.style.cssText = "display: flex;";
        }
    }
}

function buyAtom(){
    if(parsedQuark >= parsedAtomCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedAtomCost);

        atomLevel.innerHTML ++;

        aps += 1*parsedMultiplier;

        parsedAtomCost *= 1.35;
        atomCost.innerHTML = quantify(parsedAtomCost);

        if(show_mole_poss){
            if(atomLevel.innerHTML >= 10){
                molecule.style.cssText = "display: flex;";
            }
        }
    }
}

function buyMolecule(){
    if(parsedQuark >= parsedMoleCost){
        quark.innerHTML = Math.round(parsedQuark -= parsedMoleCost);

        moleLevel.innerHTML ++;

        npfs += 1*parsedMultiplier;

        parsedMoleCost *= 2;
        moleCost.innerHTML = quantify(parsedMoleCost);
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

function resetCost(){
    accelCost.innerHTML = 10;
    nucleusCost.innerHTML = 5 + "K";
    atomCost.innerHTML = 10 + "M";
    moleCost.innerHTML = 10 + "B";
    parsedAccelCost = 10;
    parsedNucleusCost = 5000;
    parsedAtomCost = 10000000;
    parsedMoleCost = 10000000000;
}

function resetIncreases(){
    accelIncrease.innerHTML = 1;
    nucleusIncrease.innerHTML = 1;
    atomIncrease.innerHTML = 1;
    moleIncrease.innerHTML = 1;
    parsedAccelIncrease = 1*parsedMultiplier;
    parsedNucleusIncrease = 1*parsedMultiplier;
    parsedAtomIncrease = 1*parsedMultiplier;
    parsedMoleIncrease = 1*parsedMultiplier;
}

function doPrestige(){
    if(parsedQuark >= parsedPrestigeCost){
        if(parsedPrestigeAmount < 4){
            parsedMultiplier *= 1.1;
            multiplier.innerHTML = quantify(parsedMultiplier);
            prestige.style.display = "none";
            nucleus.style.display = "none";
            atom.style.display = "none";
            molecule.style.display = "none";
            parsedPrestigeAmount = parsedPrestigeAmount + 1;
            prestigeAmount.innerHTML = parsedPrestigeAmount;
            parsedQuark = 0;
            resetLevels();
            resetCost();
            resetIncreases();
            parsedPrestigeCost = parsedPrestigeCost*50;
            prestigeCost.innerHTML = quantify(parsedPrestigeCost);
            if(parsedPrestigeAmount > 2){
                show_mole_poss = true;
            }
        } else {
            window.location = "game_over.html";
        }
    }
}
