function calcular(){
    let calcular = true;
    while(calcular){
        const num1 = parseFloat(prompt("Ingrese el primer numero"));
        const num2 = parseFloat(prompt("Ingrese el segundo numero"));
        const opera = prompt("Ingrese un de los siguientes signos (+, -, *, /)");
        let resultado;
        switch(opera){
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
            break;
            case "*":
                resultado = num1 * num2;
            break;
            case "/":
                resultado = num1 / num2;
            break;
            default:
                console.log("el operador ingresado es incorrecto");
                break;
        }
        console.log(`el resultado de  ${num1} ${opera} ${num2} es: ${resultado}`);
        calcular = confirm("Desea continuar con otra operacion");
    }
}
calcular();