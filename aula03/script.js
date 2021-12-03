// let array = ['String', 1, true]
// console.log(array)
// let familia = ["Pai", "Mae", ["filho", "esposa", "filho1", "filho"], "vizinho"]
// console.log(familia)

// familia.forEach((item, index) => {
//     console.log(`${item} ${index}`)
// });
// console.log("Verificar Número par");
// let numeros = [1,2,6,9,8,7,10,53,68,77,85,101,2036,2,025,3,4,5]
// //mostrar numeros pares
// let numerosPares = numeros.forEach((item)=>{
//     if(item % 2 === 0){
//         console.log(item)
//     }
// })


// let frutas = ['Maça', 'Laranja']
// frutas.push('Cacau')
// console.log(frutas)
// frutas.pop()
// console.log(frutas)
// frutas.shift()
// console.log(frutas)
// frutas.unshift("Abacaxi", "Abacate", "Mamão", "Cacau")
// console.log(frutas)
// console.log(frutas.indexOf("Mamão"))
// console.log(frutas.splice(0, 2))
// console.log(frutas.slice(0,2))
function maiorIdade(x){
    if(x>18){
        return true
    } else {
        return false
    }
}
let Rafael = {
    nome: 'Rafael Lima',
    idade: 24,
    altura: 1.70,
    maior: maiorIdade(24)
}
// let maior = Rafael.maior
// console.log(maior)

/*desistruturando o objeto */
let nome = Rafael.nome
let idade = Rafael.idade

console.log(`Nome: ${nome} idade: ${idade}`)

let {altura, maior} = Rafael

console.log(`altuara: ${altura}; Maior de idade: ${maior}`)
