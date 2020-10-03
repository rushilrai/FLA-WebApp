function noEnter(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
}

function newInput() {
    var tINPUT = document.getElementById('tINPUT');
    var newInput = document.createElement('th');
    newInput.contentEditable = 'true';
    newInput.addEventListener('keydown', (event) => noEnter(event));
    newInput.innerHTML = " ";
    tINPUT.appendChild(newInput);

    var allStates = document.getElementById('transition-table').childNodes[1].childNodes;
    // console.log(allStates);
    for (var i = 1; i < allStates.length; i++) {
        var newTrans = document.createElement('td');
        newTrans.contentEditable = 'true';
        newTrans.addEventListener('keydown', (event) => noEnter(event));
        allStates[i].appendChild(newTrans);
    }
}

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
    // console.log(allStates.length);
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
    // console.log(dfaReq);
    return dfa;
}

function checkString() {
    var dfaReq = buildModel();
    // console.log(dfaReq);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(dfaReq),
    };

    fetch("http://localhost:5000/dfa", requestOptions)
        .then(response => response.json())
        .then(result => displayResult(result))
        .catch(error => console.log('error', error));
}

function displayResult(_json) {
    if (_json.output) {
        alert('String Accepted');
    } else {
        alert('String Rejected');
    }
}