x = 17;
y = 9;
z = 11;
// potencia 2 elevado a 3
console.log(Math.pow(2, 3));
// arredonda
console.log(Math.round(.6));
// arredonda para cima
console.log(Math.ceil(.6));
// arredonda para baixo
console.log(Math.floor(.99));
// retorna o valor absoluto, sem o sinal - e +
console.log(Math.abs(-5));
// retorna o maior valor
console.log(Math.max(x, y, z));
// retorna o menor valor
console.log(Math.min(x, y, z));
// retorna um numero aleatório entre 1 e 0
console.log(Math.random());
// retorna o valor total do PI
console.log(Math.PI);
// retorna a raiz quadrada
console.log(Math.sqrt(25));
// retorna a potência, segundo numero é o elevado
console.log(Math.pow(3,2));
// gerando numero aleatorio de 1 a 100
console.log(Math.ceil(Math.random() * 100));
// calculos com ponto flutuante em js, valor falso
var x= .3 - .2;
var y= .2 - .1;

console.log(x);
console.log(y);
console.log(x == y);

// retorna data, mas hora zerada
var then = new Date(2010, 0, 1);
// retorna horario de hora
var later = new Date(2010, 0, 1, 17, 10, 30);
// não pode usar apenas o ano, ele retorna
var later1 = new Date(2010);
// pega a hora atual do pc
var now = new Date();

console.log(then);
console.log(later);
console.log(later1);
console.log(now);

console.log(later.getFullYear());
console.log(later.getMonth());
console.log(later.getDate());
console.log(later.getHours());
console.log(later.getUTCHours());
// barra de scape para printar " ' usa-se o \\
console.log("\"caixa d'agua\"");

// declarado msm variável com vários valores 
// var x = 'juninho';
// console.log(x);
// var x = 2.7;
// console.log(x);  
// declarando variavel com let não permite criar outra igual
// let x1 = 'juninho2';
// console.log(x1);

// declarando uma variavel e printando a quatidade de caracteres dele
let a = "Jurema Tereza Rufina Vaz";
console.log(a.trim().length);
// caractere de scape
console.log(`"Joana D'ark"`);
//caractere igual
console.log(5 == '5');
//valor igual
console.log(5 === 5);
//declarando valor
console.log(x = 5);

let c = "maçã, banana, morango";
console.log(c.slice(-15, -9));
console.log(c.substring(6, 12));
// replace troca o primeiro valor pelo segundo
let d = "maracuja";
console.log(d.replace("maracuja", "manga"));
//
let e = "2";
console.log(e);
// preenche com 0 Start -> antes End -> depois só aceita String
console.log(e.padStart(2,"0"));
console.log(e.padEnd(2,"0"));

// localiza o ultimo caractere e mostra sua posição do vetor
let f = "maçã, banana, morango";
console.log(f.lastIndexOf("a"));
console.log(f.indexOf("a"));
// se não tiver no vetor ele printa -1
console.log(f.indexOf("y"));