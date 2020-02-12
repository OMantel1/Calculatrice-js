

let input="";


function displayValue(btn){
    input = input + btn.value;
    document.getElementById("display").innerHTML= input;
};


function result(){
    document.getElementById("display").innerHTML = eval(input);
};


function reset(){
    document.getElementById("display").innerHTML = "0";
    input="";
};