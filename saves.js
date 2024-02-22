var state = [
    parsedQuark,
    parsedAccelCost,
    parsedAccelIncrease,
    accelLevel.innerHTML,
    parsedNucleusCost,
    parsedNucleusIncrease,
    nucleusLevel.innerHTML,
    parsedAtomCost,
    parsedAtomIncrease,
    atomLevel.innerHTML,
    parsedMoleCost,
    parsedMoleIncrease,
    moleLevel.innerHTML,
    qpc,
    qps,
    aps,
    npfs,
    mole_control,
    show_mole_poss,
    prestigeCost,
    prestigeAmount,
    multiplier
];

var SAVE_KEY = 'save';

function save(){
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    alert("Saved!");
}

function load(){
    var load_state = JSON.parse(window.localStorage.getItem(SAVE_KEY));
    
    for(i = -1; i < load_state.length; i++){
        state[i] = load_state[i];
    }

    initHTML();
}

function initHTML(){
    quark.innerHTML = quantify(parsedQuark);
    accelCost.innerHTML = quantify(parsedAccelCost);
    accelIncrease.innerHTML = quantify(parsedAccelIncrease);
    nucleusCost.innerHTML = quantify(parsedNucleusCost);
    nucleusIncrease.innerHTML = quantify(parsedNucleusIncrease);
    atomCost.innerHTML = quantify(parsedAtomCost);
    atomIncrease.innerHTML = quantify(parsedAtomIncrease);
    moleCost.innerHTML = quantify(parsedMoleCost);
    moleIncrease.innerHTML = quantify(parsedMoleIncrease);
}
