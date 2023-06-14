// 1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function numeroPrimo(numero) {
    for (var i = 2; i < numero; i++)
        if (numero % i === 0) {
            return false
        }

    return true
}

for (var i = 2; i < 1000; i++)
    if (numeroPrimo(i)) {
        console.log(i)
    };


//2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

function validarSenha(s) {

    var letraMaiuscula = /[A-Z]/.test(s)
    var letraMinuscula = /[a-z]/.test(s)
    var numero = /[0-9]/.test(s)

    if (s.length < 8) {
        return false
    }

    if (!letraMaiuscula || !letraMinuscula || !numero) {
        return false
    }

    return true
}

var s = "OtavioIsTheBestTeacher22k"

if (validarSenha(s)) {
    alert("senha valida")
}
else {
    alert("senha invalida")
}




//3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.


function fatorial(numero) {

    if (numero < 0) {
        return -1
    }
    else if (numero == 0) {
        return 1
    }
    else {
        return (numero * fatorial(numero - 1))
    }

}
for (var i = 1; i <= 10; i++) {
    console.log(`fatorial de ${i}: ${fatorial(i)}`)
}




//4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

function calcularRaiz(numero) {
    if (numero < 0) {
        return false
    }

    return Math.sqrt(numero) % 1 === 0

}
