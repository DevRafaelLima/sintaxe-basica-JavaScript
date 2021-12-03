# Sintaxe Básica do JavaScript

Curso Sintaxe básica do JavaScript é um curso que fiz no bootcamp da MRV. Esse curso é ministrado pela Diana Martini. 

Neste processo de conhecimento, foram adiquidos os seguintes conhecimentos da linguagem: conhecimento das formas diferentes de declarar variáveis, vetores e objetos, Estrutura Condicionais e aprofundamento em funções. 

Todos os arquivos gerados no curso estão neste repositório. 
## Aula 01

Foi apresentado resumidamente a história do JavaScript

## Aula 02

Nesta aula foram apresentados os tipos primitivos de variáveis no javaScript (boolean, string, null, number,undenfined, array, object e funtion).

Conceito de variável(responsável por armazenar informações) e as três formas de declará-las (var, let e const). 

E finalizando a aula, dicas de boas práticas de programação

## Aula 03

Na aula 03 estudamos dois tipos de dados muito importantes no JavaScript, arrays e object. 

<b>Array</b>

No JavaScript o array pode armazenar vários tipos de dados e minsturados inclusive. No exempo abaixo temos um array com no índice 1 é uma straig, índice 2 é um number e no índice 3 é boolean.

let array = ['String', 1, true]

O Array também pode armazenar outros array; 

let familia = ["Pai", "Mae", ["filho", "esposa", "filho1", "filho"], "vizinho"]

O tipo de dado array tem várois métodos. 

forEach() - itera um array;
push() - add item ao final do array;
pop() - remove item no final do array;
shift() - remove item no ínicio do array;
unshift() - add item no ínicio do array;
indexOf() - retor no índice de um valor;
splice() - remove ou substitui um item pelo índice;
slice() - retorna uma parte do array existente;

Na pasta da aula03 está vários exemplos utilizando esses métodos. 

<b>Objetos</b>

Objetos no JavaScript é um tipo de dados capaz de armazenar propriedade e valores. Objeto é caracterizado pelas '{}'. A baixo tem um objeto Rafael que tem minhas características e valores. 

let Rafael = {
    "nome": "Rafael Lima",
    "idade": 24,
    "Altura": 1.70,
    "peso": 84,
    "EsporteFavorito": "futebol",
    "fome": verificaFome()
}

Como podemos observar, cada característica tem um índice dois pontos e o valor desse índice. caso o valor seja uma string, então deve-se informalo entre aspas. Outro ponto importante é que se o valor do índice for o mesmo que o contéudo, então não precisa diferenciar o índice do conteúdo, o JavaScript tem a inteligência de perceper esse comportamento.

Pode-se desistruturar os objetos, no arquivo da aula3 tem exemplos de uso. 

## Aula 04 

No dia a dia estamos a todo momento tomando decisões. Qual roupa iremos vestir, se vamos levantar quando despertador tocar ou esperar mais 5 minutos, o que tomar no café da manhã etc. 

Nesta aula aprendemos como tomar decisões no JavaScript.

Além das decisões, temos as consições condicionais, são aquelas decisões que momamos quando nos deparamos com determinada consição. 

Por exemplo, só vou conseguir jogar hoje, se o jogo for marcado. Ou seja, enquanto o jogo não ser marcado, não vou conseguir jogar. 

No JavaScript temos as seguintes estruturas de repetição:

for;
for/in;
For/of;
while;
Do/while;

## Aula 5 e 6

As duas aulas foram voltadas para funções em JavaScript.

<h4>Mas o que seriam funções?</h4>

São blocos de comandos e instruções para executar determinadas tarefas. No exemplo a baixo tem uma função soma, que soma os dois número e retorna o resultado dessa soma.

function soma(a, b){return a+b}

Dentro do JavaScript temos várias formas de declarar funções, por exemplo: funções anônimas, arrow function e a forma padrão de função(funções declarativas), como está no exemplo a cima. 

Uma função pode ou não receber parâmetros. 

No diretório Aula05&06 tem mais exemplos de funções.

Para finalizar o curso, fizemos uma calculadora utilizando paenas JavaScript. 

