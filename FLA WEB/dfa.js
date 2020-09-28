function addInput() {
    inputs.push(document.getElementById('input').value);
    document.getElementById('inputs').innerHTML = inputs
    console.log(inputs.length);
}
function createNewElement2() {
    var txtNewInputBox2 = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox2'>";
    document.getElementById("newElementId2").appendChild(txtNewInputBox2);
}
function createNewElement3() {
    var txtNewInputBox3 = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox3'>";
    document.getElementById("newElementId3").appendChild(txtNewInputBox3);
}

let inputs = [];
