alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enqunato chute não for igual ao n.s.
while(chute != numeroSecreto) {
    chute = prompt('Escolha um numeo entre 1 e 100')
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break 
    } else {
        if (numeroSecreto > chute) {
            alert('O numero secreto é maior que ' + chute);
        } else {
            alert('O numero secreto é menor que ' + chute);
        }
        tentativas++;
    }
}

var palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + palavraTentativa);

//if (tentativas > 1) {

//} else {
//    alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativa');
//}
