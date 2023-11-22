let num1 = prompt ("Digite um número:");

let num2 = prompt ("Digite outro número:");


let op = prompt("Digite operação matemática:");

let soma;

if (op == "+"){
    soma = Number(num1) + Number(num2);   
}else if(op == "-"){
    soma = Number(num1) - Number(num2);
}else if(op == "*"){ 
    soma = Number(num1) * Number(num2);  
}else if(op == "/"){ 
    soma = Number(num1) / Number(num2);
}else{
    alert ('Informe uma op válida');
}

alert ('O resultado da op é'+soma);
    
    

