/*
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
    


let num1 = prompt ("Qual a KM percorrida:");

let num2 = prompt ("Quantos dias foi alugado:");

let soma;

soma = (Number(num1)*0.20) + (Number(num2)*90);

alert ('O resultado da op é' +soma);


let dist = prompt ("Qual a KM que deseja percorrer:");

let total;

if (dist <=200){
    total = Number(dist)*0.50;    
}else{
    total = Number(dist)*0.45;
}

  

alert ('Total a pagar'+total);

 


let n1 = prompt ("Nota 1:");

let n2 = prompt ("Nota 2:");

media = (Number(n1) + Number(n2)) /2;

if (media < 4.9){
    alert("Reprovado");    
}else if
    (media >=5 && conv<6.9){
    alert("Recuperação");    
}else{ 
    alert("Aprovado");
}     
  */ 

let nome = prompt("Digite seu nome:");
let sal = prompt("Digite seu salário:");
let temp = prompt("Digite há quantos anos você trabalha na empresa:");
let conv, salf;
 
if(temp <= 3){
    conv =  Number(sal) * 0.03;
}
else if (temp >= 4 && temp <= 10){
    conv = Number(sal) * 0.125;
}
else{
    conv = Number(sal) * 0.2;
}
    salf = Number(conv) + Number(sal);
 
alert(nome + " seu salário teve um aumento de: " + conv + "R$" + " e seu novo salário é de: " + salf + " R$");
  



