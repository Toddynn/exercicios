var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual o seu salário? \n", function(answer){
    let variavel = parseInt(answer);
    let valor;

    if(variavel >= 3550){
        valor = variavel + (variavel * 0.1);
    }else if (variavel >= 2400){
        valor = variavel + (variavel * 0.15);
    }else if (variavel >= 1200){
        valor = variavel + (variavel * 0.2);
    }else if (variavel > 800){
        valor = variavel + (variavel * 0.25);
    }else{
        valor = variavel + (variavel * 0.3);
    }

    console.log("Com o seu aumento, ficará: R$" + valor);
    leitor.close();
});
