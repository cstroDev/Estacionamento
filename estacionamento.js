import prompt from 'prompt-sync';
let ler = prompt();

let cont = true;
let qtdVeiculosAtuais = 0;
let capacidadeEstacionamento = 50;

do {
    console.log(`Atualmente tem ${qtdVeiculosAtuais} veículos no estacionamento.`)
    console.log("Digite a quantidade de veículos que entraram no estacionamento na última hora:");
    let qtdVeiculosUltimaHora = Number(ler());
    console.clear()

    if (qtdVeiculosUltimaHora == 0) {
        cont = false;
        console.clear();
        console.log("Muito obrigado por usar nosso sistema!");

    } else if (qtdVeiculosUltimaHora < 0) {
        console.log("Número inválido!");
        console.clear();

    } else {
        qtdVeiculosAtuais += qtdVeiculosUltimaHora;

        if (qtdVeiculosAtuais > capacidadeEstacionamento) {
            qtdVeiculosAtuais -= qtdVeiculosUltimaHora;
            console.clear();
            console.log("Não é possível estacionar tantos veículos!");

        } else if (qtdVeiculosAtuais == capacidadeEstacionamento) {
            console.clear();
            console.log("Muito obrigado por usar nosso sistema! O estacionamento encheu!");
            cont = false;
        }
    }
} while (cont)