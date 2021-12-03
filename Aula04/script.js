/*Calcular o IMC*/

let pessoa  = {
    nome: "Rafael Lima",
    peso: 82,
    altura: 1.70,
    idade: 24
}
/*IMC = peso / (altura x altura)*/
let {peso, altura, idade} = pessoa
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade")
let IMC = peso / (altura * altura)
console.log(IMC.toFixed(2))

if(IMC  < 18.5){
    console.log("Abaixo do peso")
} else if(IMC >= 18.5 && IMC <= 24.9){
    console.log('Peso Normal')
} else if(IMC >= 25 && IMC <= 29.9){
    console.log("SobrePeso")
} else if(IMC >=30 && IMC <=34.9){
    console.log("Obesidade Grau I")
} else if(IMC >=35 && IMC <= 39.9){
    console.log("Obesidade GrauII")
} else {
    console.log("Obesidade grau III")
}


/*Neste momento descubro que estou sobrePeso :)*/


let numeros = [1,6,58,9,7]
let soma = 0
let numerosObject = {valor1:1, valor2:5, valor3:15}
for(let i=0; i < numeros.length; i++){
    console.log(i)
    soma += numeros[i]
}
for(let i of numeros){
    console.log(i)
}
console.log(`Soma dos numeros do Array numeros = ${soma}`)

for(let i in numerosObject){
    console.log(i)
}