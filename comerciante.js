var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual o valor do seu produto? \n", function(answer){
    let variavel = parseInt(answer);
    let valor;

    if(variavel >= 20){
        valor = variavel + (variavel * 0.3);
    }else{
        valor = variavel + (variavel * 0.45);
    }

    console.log("O valor de venda será de: R$" + valor);
    leitor.close();
});
