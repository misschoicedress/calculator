
function calculate() {
    
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
  
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
  
    document.getElementById("result").innerHTML = result;
  }
  
   document.getElementById("calculateBtn").addEventListener("click", calculate);
  