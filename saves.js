(
    var saveQuark = 1;
    var saveAC = parsedAccelCost;
    var saveAI = parsedAccelIncrease;
    var saveAL = accelLevel.innerHTML;
    var saveNC = parsedNucleusCost;
    var saveNI = parsedNucleusIncrease;
    var saveNL = nucleusLevel.innerHTML;
    var saveAtC = parsedAtomCost;
    var saveAtI = parsedAtomIncrease;
    var saveAtL = atomLevel.innerHTML;
    var saveMC = parsedMoleCost;
    var saveMI = parsedMoleIncrease;
    var saveML = moleLevel.innerHTML;
    var saveQpc = qpc;
    var saveQps = qps;
    var saveAps = aps;
    var saveNpfs = npfs;
    var saveMCon = mole_control;
    var saveShowMP = show_mole_poss;
    var savePC = prestigeCost;
    var savePA = prestigeAmount;
    var saveMult = multiplier;
)

var state = {
    "quark": saveQuark;
}

var SAVE_KEY = 'save';

function save(){
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    alert("Saved!");
}

function load(){
    var load_state = JSON.parse(window.localStorage.getItem(SAVE_KEY));
    
    for(i = -1; i < load_state.length; i++){
        state = load_state;
    }
}
