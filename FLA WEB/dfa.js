let inputs = [];
let userInput;

function addInput() {
    userInput = document.getElementById('input').value;
    inputs = [];
    for (i = 0; i <= userInput; i++) {

        inputs.push(i);
        console.log(inputs);
        document.getElementById('output').innerHTML = inputs;

    }

}

let normalInput;
let normalStates = [];
var letters = /^[A-Za-z]+$/;

function addNormal() {
    document.getElementById("normalstate").pattern = "[a-zA-Z]+";
    normalInput = document.getElementById('normalstate').value;
    if (normalInput == 'A' || normalStates.includes(normalInput) || !(normalInput.match(letters))) {
        alert("Each new state has to be unique & an Alphabet");
    }
    else {
        normalStates.push(normalInput);
        console.log(normalStates);
    }

}


let finalInput;
let finalStates = [];

function addFinal() {
    finalInput = document.getElementById('finalstate').value;
    if (finalInput == 'A' || normalStates.includes(finalInput) || finalStates.includes(finalInput) || !(normalInput.match(letters))) {
        alert("Final state has to be unique");
    }
    else {
        finalStates.push(finalInput);
        console.log('Normal:');
        console.log(normalStates);
        console.log('Final');
        console.log(finalStates);
    }
}

let transitions = [];
let transitionsCode = [];
//A: [d]
//A: d
//A: e

function addTransition() {
    startValid = false;
    endValid = false;
    inputValid = false;
    transitionStart = document.getElementById('transitionStartState').value;
    transitionInput = document.getElementById('transitionInput').value;
    transitionEnd = document.getElementById('transitionEndState').value;
    if (!(normalStates.includes(transitionStart)) && (transitionStart != 'A')) {
        alert('Enter a Valid Start State');
    } else {
        startValid = true;
    }
    if (!(finalStates.includes(transitionEnd)) && !(normalStates.includes(transitionStart)) && (transitionStart != 'A')) {
        alert('Enter a Valid End State');
    } else {
        endValid = true;
    }
    if (startValid == true && endValid == true) {
        var tryTransition = transitionStart + transitionInput;
        console.log(tryTransition);
        console.log(transitionsCode);

        if (transitionsCode.includes(tryTransition)) {
            alert('Transition already Used');
        } else {
            transitions.push(transitionStart + transitionInput + transitionEnd);
            transitionsCode.push(transitionStart + transitionInput);
            console.log(transitions);
        }


    }
}

