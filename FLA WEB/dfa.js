// function addInput() {
//     inputs = document.getElementById('input').value;
//     document.getElementById('inputs').innerHTML = inputs;
//     console.log(inputs.length);
// }
function createNewElement2() {
    var txtNewInputBox2 = document.createElement('div');
    txtNewInputBox2.innerHTML = "<input type='text' id='newInputBox2'>";
    document.getElementById("newElementId2").appendChild(txtNewInputBox2);
}
function createNewElement3() {
    var txtNewInputBox3 = document.createElement('div');
    txtNewInputBox3.innerHTML = "<input type='text' id='newInputBox3'>";
    document.getElementById("newElementId3").appendChild(txtNewInputBox3);
}


// var i = 0;
// var array = [];
// function addInput()
// {
//   num = document.getElementById("input").value;
//   for(i = 0 ; i < num; i+  {
//     array.(i);
//   }
//   document.getElementById('output').innerHTML = array;
// }
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

function addNormal() {
    normalInput = document.getElementById('normalstate').value;
    if (normalInput == 'A' || normalStates.includes(normalInput)) {
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
    if (finalInput == 'A' || normalStates.includes(finalInput) || finalStates.includes(finalInput)) {
        alert("Final state has to be unique");
    }
    else {
        finalStates.push(finalInput);
        console.log('Inputs:')
        console.log(inputs);
        console.log('Normal:');
        console.log(normalStates);
        console.log('Final');
        console.log(finalStates);
    }
}

let transitions = [];

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
    if (!(finalStates.includes(transitionEnd))) {
        alert('Enter a Valid End State');
    } else {
        endValid = true;
    }
    if (startValid == true && endValid == true) {
        transitions.push(transitionStart + transitionInput + transitionEnd);
        console.log(transitions);
    }
}