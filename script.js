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
   

let nome = prompt("Digite seu nome:");
let sal = prompt("Digite seu salário:");
let temp = prompt("Digite há quantos anos você trabalha na empresa:");
let conv, salf;
 
if(temp <= 3){
    conv =  Number(sal) * 0.03;
}
else if (temp > 3 && temp <= 10){
    conv = Number(sal) * 0.125;
}
else{
    conv = Number(sal) * 0.2;
}
    salf = Number(conv) + Number(sal);
 
alert(nome + " seu salário teve um aumento de: " + conv + "R$" + " e seu novo salário é de: " + salf + " R$");


let n1 = prompt("Digite a largura do terreno:");

let n2 = prompt("Digite o comprimento do terreno:");

Total = (Number(n1) * Number(n2))

if (Total <= 100){
    alert("Terreno Popular");    
}else if
    (Total > 100 && Total <= 500){
    alert("Terreno Master");    
}else{ 
    alert("Terreno VIP");
}     

  
let temp = prompt("Digite tempo de atividade fisica:");

let conv, salf;

 
if(temp <= 10){
    conv =  Number(temp) * 2;
}
else if (temp > 10 && temp <= 20){
    conv = Number(temp) * 5;
}
else{
    conv = Number(temp) * 10;
}
    val = Number(conv) * Number(0.05);
 
    alert( " Valor a receber é: R$" + val );



let gen = prompt("Digite o seu gênero:");
let sal = prompt("Digite o seu salário:");
let temp = prompt("Digite há quantos anos você trabalha na empresa:");
let conv, salf;
 
if(gen == "m")   
    if(Number(temp) < 20) {
    conv = Number(sal) * 0.03;
}
else if (temp => 20 && temp <= 30){ 
    conv = Number(sal) * 0.13;
}
else{ 
    conv = Number(sal) * 0.25; 
}       

if(gen == "f")
    if(Number(temp) < 15){
    conv = Number(sal) * 0.05;
} 

else if (temp => 15 && temp <= 20){
        conv = Number(sal) * 0.12;
}      
 
else{
    conv = Number(sal) * 0.23; 
}       

salf = Number(conv) + Number(sal);
 
 
alert( " Seu novo salário é: R$" + salf );


let pes = prompt("Digite o seu peso:");
let alt = prompt("Digite a sua altura:");

val = Number(pes) / (Number(alt) * Number(alt));

if(val <= 18.5){
    alert("Abaixo do peso");   
}

else if (val > 18.25 && val <= 25){
    alert("Peso ideal");    
}
else if (val > 25 && val <= 30){
        alert("Sobrepeso");  
}
else if (val > 30 && val <= 40){
            alert("Obesidade"); 
}            

else { 
    alert("Obesidade mórbida");
}     
*/

function mostrarTabuada() {
//cria referencia aos elemntos da pagia
let inNumero = document.getElementById('inNumero');
let outTabuada = document.getElementById('outTabuada');

//converte conteudo do campo inNUmero
let numero = Number(inNumero.value);
    
//cria uma variável do tipo String, que irá concatenar a resposta
let resposta = "";

//cria um laço de repetição
for (let i = 1; i <= 10; i++) {
// a variável resposta vai acumulando os novos conteúdos
resposta = resposta + numero + " x " + i + " = " + numero * i + "\n"
}

// O conteúdo da tag pre é alterado para exibir a tabuada do numero

outTabuada.textContent = resposta;
}
//cria referência ao botão e após associa function ao evento click 

let btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener("click", mostrarTabuada);