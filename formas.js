let base;
let baseM;
let lado;
let diagonal;
let diagonalM;
let alt;
let raio;

var readline = require('readline');
var variavel = "";
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    console.log("___________________________________________________________________");
    console.log("Calculo de Área. Informe o que deseja de acordo com a tabela: ");
    console.log("tecle 1 para Triângulo");
    console.log("tecle 2 para Quadrado");
    console.log("tecle 3 para Retângulo");
    console.log("tecle 4 para Trapézio");
    console.log("tecle 5 para Losango");
    console.log("tecle 6 para Círculo");
    console.log("tecle 0 para finalizar");

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
                leitorB.question("Digite o tamanho da base: \n", function(resp){
                    base = parseInt(resp);
                
                });
                leitorB.close();

                var leitorH = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                leitorH.question("digite a altura: \n", function(resp2){
                    alt = parseInt(resp2);
                    console.log((base * alt)/2);
                leitorH.close();
                });
                break;
            case 2: 
                
                break;
            case 3:
                
                break;
            case 4:
                
                break;
            case 5:
                
                break;
            case 6:
                var leitorC = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                leitorC.question("digite o valor do raio: \n", function(resp){
                    raio = parseInt(resp);
                    pi = Math.PI;
                    console.log(pi * (raio * raio));
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