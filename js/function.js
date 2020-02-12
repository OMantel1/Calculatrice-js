let input = "";


function displayValue(btn) {
    input = input + btn.value;
    document.getElementById("display").innerHTML = input;
};


function result() {
    document.getElementById("display").innerHTML = eval(input);
};


function reset() {
    document.getElementById("display").innerHTML = "0";
    input = "";
};

function erase(btn) {
    input  = input.slice(0, input.length-1);
    document.getElementById("display").innerHTML = input;
};
