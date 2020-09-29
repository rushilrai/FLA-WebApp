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

let inputs = [];
var x = 0;
var array = Array();

function addInput()
{
 array[x] = document.getElementById("input").value;
 x++;
 document.getElementById("input").value = "";
 var e = "<br/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("inputs").innerHTML = e;
}
