// prevent next line edits for transition table cells
function noEnter(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
}

// add new input to transition table
function newInput() {
    var tINPUT = document.getElementById('tINPUT');
    var newInput = document.createElement('th');
    newInput.contentEditable = 'true';
    newInput.addEventListener('keydown', (event) => noEnter(event));
    newInput.innerHTML = " ";
    tINPUT.appendChild(newInput);

    var allStates = document.getElementById('transition-table').childNodes[1].childNodes;
    for (var i = 1; i < allStates.length; i++) {
        var newTrans = document.createElement('td');
        newTrans.contentEditable = 'true';
        newTrans.addEventListener('keydown', (event) => noEnter(event));
        allStates[i].appendChild(newTrans);
    }
}

// add new state to transition table
function newState() {
    var tTABLE = document.getElementById('transition-table').childNodes[1];
    var newStateRow = document.createElement('tr');
    newStateRow.id = 'tSTATE';
    newStateRow.className = 'tSTATE';

    var allInputs = document.getElementById('tINPUT').childNodes;
    for (var i = 0; i < allInputs.length; i++) {
        var newState = document.createElement('td');
        newState.contentEditable = 'true';
        newState.addEventListener('keydown', (event) => noEnter(event));
        newState.innerHTML = " "
        newStateRow.appendChild(newState);
    }
    tTABLE.appendChild(newStateRow);
}

// build FA model from transition table
function buildModel() {
    var dfa = {
        "model": {
            "inputs": [],
            "inputstate": "",
            "finalstates": [],
            "transit-table": {}
        },
        "input": (document.getElementById('inp-string').value).toString()
    };

    var allInputs = document.getElementsByTagName('th');
    for (var i = 1; i < allInputs.length; i++) {
        dfa.model['inputs'].push(allInputs[i].innerText);
    }

    var allStates = document.getElementsByClassName('tSTATE');
    for (var i = 0; i < allStates.length; i++) {
        if (allStates[i].childNodes[0].innerText[0] == ">") {
            dfa.model["transit-table"][allStates[i].childNodes[0].innerText.slice(1, )] = [];
            dfa.model['inputstate'] = allStates[i].childNodes[0].innerText.slice(1, );
            for (var j = 1; j < allStates[i].childNodes.length; j++) {
                dfa.model["transit-table"][allStates[i].childNodes[0].innerText.slice(1, )].push(allStates[i].childNodes[j].innerText)
            }
        } else if (allStates[i].childNodes[0].innerText[0] == "*") {
            dfa.model["transit-table"][allStates[i].childNodes[0].innerText.slice(1, )] = [];
            dfa.model['finalstates'].push(allStates[i].childNodes[0].innerText.slice(1, ));
            for (var j = 1; j < allStates[i].childNodes.length; j++) {
                dfa.model["transit-table"][allStates[i].childNodes[0].innerText.slice(1, )].push(allStates[i].childNodes[j].innerText)
            }
        } else {
            dfa.model["transit-table"][allStates[i].childNodes[0].innerText] = [];
            for (var j = 1; j < allStates[i].childNodes.length; j++) {
                dfa.model["transit-table"][allStates[i].childNodes[0].innerText].push(allStates[i].childNodes[j].innerText)
            }
        }

    }
    return dfa;
}

// build FA Model check string through API 
function checkString() {
    var dfaReq = buildModel();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(dfaReq),
    };

    fetch("https://sand-fla.azurewebsites.net/dfa", requestOptions)
        .then(response => response.json())
        .then(result => displayResult(result))
        .catch(error => displayError());
}

// display error in result from API
function displayError() {
    document.getElementById('result').innerText = 'Error Model';
    document.getElementById('retr').style.display = 'inline-block';
}

// display successful result from API
function displayResult(_json) {
    if (_json.output) {
        res = 'Accepted';
    } else {
        res = 'Rejected';
    }

    document.getElementById('result').innerText = res;
    document.getElementById('retr').style.display = 'inline-block';
}