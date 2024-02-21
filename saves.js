var state = {
    quark,
    accelCost,
    accelIncrease,
    accelLevel,
    nucleusCost,
    nucleusIncrease,
    nucleusLevel,
    atomCost,
    atomIncrease,
    atomLevel,
    moleCost,
    moleIncrease,
    moleLevel,
    qpc,
    qps,
    aps,
    npfs,
    mole_control,
    show_mole_poss,
    prestigeCost,
    prestigeAmount,
    multiplier
}

var SAVE_KEY = 'save';

function save(){
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function load(){
    var load_state = JSON.parse(window.localStorage.getItem(SAVE_KEY));
    state = load_state;
}
