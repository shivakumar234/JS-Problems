function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
        case "x":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        case "%":
            return num1 % num2;
        default:
            return "Invalid operator";
    }
}


console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));  
