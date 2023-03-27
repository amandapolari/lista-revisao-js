// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => {
        return a - b;
    });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const apenasPares = array.filter((item) => {
        return item % 2 === 0;
    });
    return apenasPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const apenasPares = array.filter((item) => {
        return item % 2 === 0;
    });
    const paresElevadosADois = apenasPares.map((elemento) => {
        return elemento ** 2;
    });
    return paresElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const novoArray = array.sort(function (a, b) {
        return a - b;
    });
    return novoArray[array.length - 1];
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const numeros = [num1, num2];
    const numerosOrdenados = numeros.sort(function (a, b) {
        return a - b;
    });
    // const maior = numerosOrdenados[1];
    // const menor = numerosOrdenados[0];
    const maiorEhDivisivelPorMenor =
        numerosOrdenados[1] % numerosOrdenados[0] === 0;
    return (objeto = {
        maiorNumero: numerosOrdenados[1],
        maiorDivisivelPorMenor: maiorEhDivisivelPorMenor,
        diferenca: numerosOrdenados[1] - numerosOrdenados[0],
    });
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = [];
    for (let i = 0; i <= n + 1; i++) {
        array.push(i);
    }
    const pares = array.filter((item) => {
        return item % 2 === 0;
    });
    return pares.slice(0, n);
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB) {
        if (ladoB === ladoC) {
            return 'Equilátero';
        } else {
            return 'Isósceles';
        }
    } else if (ladoA === ladoC) {
        return 'Isósceles';
    } else if (ladoB === ladoC) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array);

    const segundoMenor = arrayOrdenado[1];
    const segundoMaior = arrayOrdenado[arrayOrdenado.length - 2];

    return [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let textoElenco = '';

    for (artista of filme.atores) {
        textoElenco = textoElenco + `${artista}, `;
    }

    const textoSemVirgulasEspacoFinal = textoElenco.slice(0, -2);

    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${textoSemVirgulasEspacoFinal}.`;

    return chamada;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: 'ANÔNIMO',
    };
    return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
    });
    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            return pessoa;
        }
    });
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let conta of contas) {
        let gastoTotal = 0;
        for (let compra of conta.compras) {
            gastoTotal = gastoTotal + compra;
        }
        conta.saldoTotal -= gastoTotal;
        conta.compras = [];
    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const consultasOrdenadoAlfabeto = consultas.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        } else if (a.nome < b.nome) {
            return -1;
        } else {
            return 0;
        }
    });
    return consultasOrdenadoAlfabeto
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    // const consultasOrdenadasPorData = consultas.sort((a,b)=>{
    //     const diaA =a.dataDaConsulta.substring();
    // })
}
