var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bisc = 2.5;
const trento = 2;
const bala = 0.5;
const bombom = 1.5;
const pacoca = 1;

    console.log("_________________________________________________________________");
    console.log("Bem vindo a cantina, informe o que deseja de acordo com a tabela: ");
    console.log("tecle 1 para Biscoito: 2,5");
    console.log("tecle 2 para Trento: 2,00");
    console.log("tecle 3 para Bala: 3 por 0,50");
    console.log("tecle 4 para Sonho de valsa: 1,50");
    console.log("tecle 5 para Paçoca: 3 por 1,00");
    console.log("tecle 0 para finalizar a compra");


    leitor.question("Qual produto deseja? \n", function(answer){
    let variavel = parseInt(answer);
    let valor = 0;
    let bla = variavel;
    
    while(bla != 0){
        if(variavel != 0){
            switch(variavel){
            case 0: 
                return;
            case 1: 
                valor = valor + bisc;
                break;
            case 2: 
                valor = valor + trento;
                break;
            case 3:
                valor = valor + bala;
                break;
            case 4:
                valor = valor + bombom;
                break;
            case 5:
                valor = valor + pacoca;
                break;
            default:
                console.log("valor inválido");    
            }
        }

        console.log("O valor de venda será de: R$" + valor);
        leitor.close();
    } 
});
