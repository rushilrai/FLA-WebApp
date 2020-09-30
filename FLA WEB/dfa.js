let normalInput;
let normalStates = [];
var letters = /^[a-zA-Z]+$/;
var str_n = "Normal states consists of : ";

function addNormal() {
    normalInput = document.getElementById('normalstate').value;
    newnormal = normalInput.toUpperCase();
    if (newnormal == 'A' || normalStates.includes(newnormal) || !(newnormal.match(letters))) {
        alert("Each new state has to be Unique & an Alphabet");
    }
    else {
        normalStates.push(newnormal);
        document.getElementById('normalOutput').innerHTML = str_n + normalStates;
    }

}

let finalInput;
let finalStates = [];
var letters = /^[a-zA-Z]+$/;
var str_f = "Final states consists of : ";
function addFinal() {
    finalInput = document.getElementById('finalstate').value;
    newfinal = finalInput.toUpperCase();
    if (newfinal == 'A' || normalStates.includes(newfinal) || finalStates.includes(newfinal) || !(newfinal.match(letters))) {
        alert("Final state has to be UNIQUE from one another and only UPPERCASE letters");
    }
    else {
        finalStates.push(newfinal);
        // console.log('Normal:');
        // console.log(normalStates);
        // console.log('Final');
        document.getElementById('finalOutput').innerHTML = str_f +  finalStates + " ";
    }
}

let str_init = "A";
document.getElementById('initial').innerHTML = str_init;

let inputString;
let InputStates = [];
var num = /^[0-1]+$/;
var input_str = "Input String is : ";
function addInput(){
        inputString = document.getElementById('stringvalue').value;
        if(!(inputString.match(num))){
            alert("Should be a string of 0's and 1's");
        }
        else{
            InputStates.push(inputString);
            // console.log('Normal:');
            // console.log(normalStates);
            // console.log('Final');
            // console.log(finalStates);
            document.getElementById('inputStringOutput').innerHTML = input_str + InputStates;

        }
}




let transitions = [];
let transitionsCode = [];
//A: [d]

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

let apiTransitions;
let transitionsObject = {};
//A: [B, C]

function convert() {
    var allKeys = normalStates + finalStates;
    console.log(allKeys);
    allKeys.unshift('A');
    console.log(transitions);
    //A0B, A1C
    console.log(allKeys);
    //A, b, C
    var temp = [];
    for (let index = 0; index < transitions.length; index++) {
        for (let j = 0; j < allKeys.length; j++) {
            if (transitions[index][0] == allKeys[j]) {
                if (transitions[index][1] == 0) {
                    temp.unshift(transitions[index][2]);
                }
                else {
                    temp.push(transitions[index][2]);
                }
                transitionsObject[transitions[index][0]] = [temp];
            }
        }
    }
    console.log(transitionsObject);
}