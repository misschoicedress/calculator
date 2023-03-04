// Define function to perform calculation
function calculate() {
    // Get input values
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
  
    // Perform calculation based on operator
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
  
    // Update result element with calculated value
    document.getElementById("result").innerHTML = result;
  }
  
  // Add event listener to trigger calculation on button click
  document.getElementById("calculateBtn").addEventListener("click", calculate);
  