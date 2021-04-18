function addValue(){
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    var result1 = val1 + val2;
    document.getElementById("alltext").value = result1;
}

function multiplyValue() {
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    var result2 = val1 * val2;
    document.getElementById("alltext").value = result2;
}

function divideValue() {
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    var result3 = val1/val2;
    document.getElementById("alltext").value = result3;
}
function clearValue() {
    var result4 = "";
    document.getElementById("alltext").value = result4;
    document.getElementById("inp1").value = result4;
    document.getElementById("inp2").value = result4;
}
 