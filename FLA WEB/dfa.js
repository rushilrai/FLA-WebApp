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
var array = Array();

function addInput() {
    userInput = document.getElementById('input').value;
    for (i = 0; i < userInput; i++)
     {
        inputs.push(i);
        console.log(output);
    }
//

    /*array[x] = document.getElementById("input").value;
    x++;
    document.getElementById("input").value = "";
    var e = "<br/>";   
       
      for (var y=0; y<array.length; y++)
      {
        e += "Element " + y + " = " + array[y] + "<br/>";
      }
      document.getElementById("inputs").innerHTML = e;*/
}
