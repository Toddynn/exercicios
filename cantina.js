let quant;
const bisc = 2.5;
const trento = 2;
const bala = 0.5;
const bombom = 1.5;
const pacoca = 1;

var readline = require('readline');
var variavel = "";
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    console.log("_________________________________________________________________");
    console.log("Bem vindo a cantina, informe o que deseja de acordo com a tabela: ");
    console.log("tecle 1 para Biscoito: 2,5");
    console.log("tecle 2 para Trento: 2,00");
    console.log("tecle 3 para Bala: 3 por 0,50");
    console.log("tecle 4 para Sonho de valsa: 1,50");
    console.log("tecle 5 para Paçoca: 3 por 1,00");
    console.log("tecle 0 para finalizar a compra");

    leitor.question("Qual produto deseja? \n", function(answer){
        variavel = parseInt(answer);
        leitor.close();

    function top(){
        switch(variavel){
            case 0: 
                console.log("Você saiu!");
                break;
            case 1:
                var leitorB = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorB.question("Quantos Biscoitos vai querer?: \n", function(resp){
                    quant = parseInt(resp);
                    if(quant > 0){
                        let res = quant * bisc;
                        console.log("O valor da compra fica: R$" + res);
                    }
                    else{
                        console.log("quantidade inválida");
                    }
                leitorB.close();
                });
                break;
            case 2: 
                var leitorT = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorT.question("Quantos Trentos vai querer?: \n", function(resp){
                    quant = parseInt(resp);
                    if(quant > 0){
                        let res = quant * trento;
                        console.log("O valor da compra fica: R$" + res);
                    }
                    else{
                        console.log("quantidade inválida");
                    }
                leitorT.close();
                });
                break;
            case 3:
                var leitorBala = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorBala.question("Quantas Balas vai querer?: \n", function(resp){
                    quant = parseInt(resp);
                    if(quant > 0){
                        let res = quant * (bala / 3);
                        console.log("O valor da compra fica: R$" + res);
                    }
                    else{
                        console.log("quantidade inválida");
                    }
                leitorBala.close();
                });
                break;
            case 4:
                var leitorS = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorS.question("Quantos Sonhos de Valsa vai querer?: \n", function(resp){
                    quant = parseInt(resp);
                    if(quant > 0){
                        let res = quant * bombom;
                        console.log("O valor da compra fica: R$" + res);
                    }
                    else{
                        console.log("quantidade inválida");
                    }
                leitorS.close();
                });
                break;
            case 5:
                var leitorP = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorP.question("Quantas Paçocas vai querer?: \n", function(resp){
                    quant = parseInt(resp);
                    if(quant > 0){
                        let res = quant * (pacoca / 3);
                        console.log("O valor da compra fica: R$" + res);
                    }
                    else{
                        console.log("quantidade inválida");
                    }
                leitorP.close();
                });
                break;
            default:
                console.log("valor inválido");    
        }
    }
    while(variavel != 0){
        return top();
    }
});


