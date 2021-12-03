//função declarativa
function soma(a,b){return a+b}
console.log(soma(50,9))
//Expressões de funções
let podeVotar = function(idade){
    if(idade > 18){
        console.log("pode votar")
    } else {
        console.log("Não pode votar")
    }
}
podeVotar(15)

//arraw function
let natural = (n) => {
    if(n >0 ){
        console.log("É um número natural")
    } else {
        console.log("Não é um número natural")
    }
}
natural(8)
natural(-5)