function calculadora(){
    const op = prompt(`Escolha uma operação
    1 - + Soma
    2 - - Subtração
    3 - / Divisão
    4 - * Multiplicação
    5 - % Resta da Divisão
    6 - ** Potenciação`)
     
    let n1 = Number(prompt('insira o primeiro número'))
    let n2 = Number(prompt('Insira o segundo número:'))
    
    let r;
    
    function soma(){
        r = n1 + n2
        alert(`${n1} + ${n2} = ${r}`)
    }
    function subtracao(){
        r = n1-n2
        alert(`${n1} - ${n2} = ${r}`)
    }
    function divisao(){
        r = n1/n2
        alert(`${n1}/${n2} = ${r}`)
    }
    function multiplicao(){
        r = n1*n2
        alert(`${n1}*${n2} = ${r}`)
    }
    function resto() {
        r = n1%n2
        alert(`${n1} % ${n2} = ${r}`)
    }
    function potenciacao(){
        r = n1*n1
        alert(`${n1}*${n1} = ${r}`)

    }
    if(op == 1){
        soma()
    } else if(op == 2 ){
        subtracao()
    } else if(op == 3){
        divisao()
    } else if(op == 4){
        multiplicao()
    } else if(op == 5){
        resto()
    } else if(op == 6 ){
        potenciacao()
    }
}

calculadora()