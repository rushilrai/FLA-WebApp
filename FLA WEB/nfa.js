let normalInput;
let normalStates = [];
var letters = /^[A-Z]+$/;

function addNormal() 
{
    normalInput = document.getElementById('normalstate').value;
    let newnormal = normalInput.toUpperCase();
    if (normalInput == 'A' || normalStates.includes(newnormal) || !(normalInput.match(letters)))
     {
        alert("Each new state has to be unique");
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
    if (finalInput == 'A' || normalStates.includes(finalInput) || finalStates.includes(finalInput) || !(finalInput.match(letters)))
     {
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