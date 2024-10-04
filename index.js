let vitorias = 293
let derrotas = 222

function quantidadeVitoria (vitorias, derrotas){
  saldoVitorias = vitorias - derrotas
  return saldoVitorias
}

function nivel(saldoVitorias){
  if (saldoVitorias <= 10){
    nivel = " Ferro"
  }else if(saldoVitorias <= 20){
    nivel = " Bronze"
  }else if(saldoVitorias <= 50){
    nivel = " Prata"
  }else if(saldoVitorias <= 80){
    nivel = " Ouro"
  }else if(saldoVitorias <= 90){
    nivel = " Diamante"
  }else if(saldoVitorias <= 100){
    nivel = " Lendário"
  }else{
    nivel = " Imortal"
  }
}

quantidadeVitoria(vitorias, derrotas)
nivel(saldoVitorias)

console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível" + nivel + ".")