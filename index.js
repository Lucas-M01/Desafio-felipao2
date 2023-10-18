let vitorias = 52
let derrotas = 37
let rank

function ranking(number = saldoVitorias(vitorias, derrotas)) {
    if(number < 10){
        rank = "Ferro"
        return rank
    } else if(number >= 11 && number <= 20){
        rank = "Bronze"
        return rank
    } else if(number >= 21 && number <= 50){
        rank = "Prata"
        return rank
    } else if(number >= 51 && number <= 80){
        rank = "Ouro"
        return rank
    } else if(number >= 81 && number <= 90){
        rank = "Diamante"
        return rank
    } else if(number >= 91 && number <= 100){
        rank = "Lendário"
        return rank
    } else if(number >= 101) {
        rank = "Imortal"
        return rank
    }
}

function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

console.log(`O Herói tem de saldo de ${saldoVitorias(vitorias, derrotas)} está no nível de ${ranking()}`)