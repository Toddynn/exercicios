let valor;

var readline = require('readline');
var resp = "";
var variavel = ""

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    console.log("_______________________________________________");
    console.log("informe o que deseja de acordo com a tabela: ");
    console.log("tecle 1 para converter de Celsius para Farenheit e Kelvin");
    console.log("tecle 2 para converter de Kelvin para Celsius e Farenheit");
    console.log("tecle 3 para converter de Farenheit para Celsius e Kelvin");

    leitor.question("Qual deseja? \n", function(answer){
        variavel = parseInt(answer);
        leitor.close();

        switch(variavel){
            case 0: 
                ;
            case 1:
                var leitorC = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorC.question("Qual a temperatura Celsius?: \n", function(resp){
                    valor = parseInt(resp);
                    let res = (1.8*valor + 32);
                    let res2 = valor + 273.15;
                console.log("A temperatura em Farenheit é: " + res + "ºF");
                console.log("A temperatura em Kelvin é: " + res2 + "K");
                leitorC.close();
                });
                break;
            case 2: 
                var leitorK = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorK.question("Qual a temperatura Kelvin?: \n", function(resp){
                    valor = parseInt(resp);
                    let res = valor - 273.15;
                    let res2 = ((valor - 273.15) * 9/5) + 32;
                console.log("A temperatura em Celsius é: " + res + "ºC");
                console.log("A temperatura em Farenheité: " + res2 + "ºF");
                leitorK.close();
                });
                break;
            case 3:
                var leitorF = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorF.question("Qual a temperatura Farenheit?: \n", function(resp){
                    valor = parseInt(resp);
                    let res = ( (valor-32)*5/9 );
                    let res2 = ((valor - 32) * 5/9) + 273.15;
                console.log("A temperatura em Celsius é: " + res + "ºC");
                console.log("A temperatura em Kelvin é: " + res2 + "ºK")
                leitorF.close();
                });
                break;
            default:
                console.log("valor inválido");    
        }
    });
