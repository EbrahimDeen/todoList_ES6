
var inputText = document.getElementById("txt"),
items = document.querySelectorAll("#list li"),
tab = [], index;
var alertUser=document.getElementById('alertUser');
var btnAdd= document.getElementById("btnAdd");
//condition for enabling the add button

// get the selected li index using array
// populate array with li values
for(var i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}

// get li index onclick
for(var i = 0; i < items.length; i++){
    
items[i].onclick = function(){
index = tab.indexOf(this.innerHTML);
console.log(this.innerHTML + " INDEX = " + index);
        // set the selected li value into input text
inputText.value = this.innerHTML;
};
    
}

var refreshArray=()=>
{
// clear array
tab.length = 0;
items = document.querySelectorAll("#list li");

// fill array
for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}
}


var editLI=()=>{
   
    // edit the selected li using input text
    try {
        items[index].innerHTML = inputText.value;
        inputText.value = "";
    } catch (error) {
       alert("First Select the Item");
    }
    refreshArray();
}

var deleteLI=()=>{
    
        refreshArray();
        try {
            if(items.length > 0){
                items[index].parentNode.removeChild(items[index]);
                inputText.value = "";
            }
        } catch (error) {
            alert("First Select the Item");
        }
}

var stoppedTyping=()=>{
    if(inputText.value.length > 0) { 
        document.getElementById('btnAdd').disabled = false; 
    } else { 
        document.getElementById('btnAdd').disabled = true;
    }
}
function verify(){
    if(inputText.value==""){
        alert("Put some text in TextBox!")
    }
    else{
        var listNode = document.getElementById("list"),
            textNode = document.createTextNode(inputText.value),
            liNode = document.createElement("LI");
            
            liNode.appendChild(textNode);
            listNode.appendChild(liNode);
            
            refreshArray();
            
            // add event to the new LI
            
            liNode.onclick = ()=>{
                index = tab.indexOf(liNode.innerHTML);
                console.log(liNode.innerHTML + " INDEX = " + index);
                // set the selected li value into input text
                inputText.value = liNode.innerHTML;
            };
                
            
    }
}