document.querySelector("#adicionar").addEventListener("click", calculaIMC);

const nome = document.getElementById("inputName");
const email = document.getElementById("inputEmail").value;

function calculaIMC(event){
    event.preventDefault();

    let circunf = document.getElementById("inputCircunf").value;
    let select = document.getElementById("inputSexo");
    let sexo = select.options[select.selectedIndex].value;
    let dataNasc = Number(document.getElementById("inputDate").value);
    let altura = Number(document.getElementById("inputAltura").value);
    let peso = Number(document.getElementById("inputPeso").value);
    var imc = (peso / (altura * altura)).toFixed(2);
    var estado;
    var risco;

    if(sexo == 1){
        if(circunf < 94){
            risco = "Normal";
        }
        else if(circunf >= 94){
            risco = "Elevado"
        }
        else{
            risco = "Crítico"
        }
    }else{
        if(circunf < 80){
            risco = "Normal";
        }
        else if(circunf >= 80){
            risco = "Elevado";
        }
        else{
            risco = "Crítico";
        }
    }

    date = new Date();
    const today = date.getDate();
    var idade = today - dataNasc;

    if(idade<65){
        if(imc > 40){
            estado = "Obesidade Grau III";
        }
        else if(imc >= 35 && imc < 40){
            estado = "Obesidade Grau II";
        }
        else if(imc >= 30 && imc < 35){
            estado = "Obesidade Grau I";
        }
        else if(imc >= 25 && imc < 30){
            estado = "Pré Obesidase";
        }
        else if(imc >= 18.5 && imc < 25){
            estado = "Normal";
        }
        else if(imc >= 17 && imc < 18.5){
            estado = "Magreza Grau I";
        }
        else if(imc >= 16 && imc < 17){
            estado = "Magreza Grau II";
        }
        else{
            estado = "Magreza Grau III";
        }
    }else{
        if(imc > 27){
            estado = "Excesso de Peso";
        }
        else if(imc >= 22 && imc <= 27){
            estado = "Normal";
        }
        else{
            estado = "Baixo Peso";
        }
    }

    var linha = document.createElement("div");
    linha.setAttribute('class', 'row');

    var titulo1 = document.createElement("div");
    titulo1.setAttribute('class', 'col-md-6');
    titulo1.textContent = `Olá ${nome.value}`;

    var titulo2 = document.createElement("div");
    titulo2.setAttribute('class', 'col-md-6');
    titulo2.textContent = `Seu IMC é ${imc}`;

    var linha2 = document.createElement("div");
    linha2.setAttribute('class', 'row');

    var texto = document.createElement("div");
    texto.setAttribute('class', 'col-md-6');
    texto.textContent = `Você tem ${idade} anos e encontra-se em um estado de ${estado}.
                        Seu risco metabólico é ${risco}.
                        Confira a imagem abaixo do seu IMC`;
    
    var texto2 = document.createElement("div");
    texto2.setAttribute('class', 'col-md-6');
    var imagem = document.createElement("img");
    imagem.setAttribute('src', 'istockphoto-1136879179-170667a.jpg');
    imagem.setAttribute('class', 'gordo');

    
    linha.appendChild(titulo1);
    linha.appendChild(titulo2);
    linha2.appendChild(texto);
    linha2.appendChild(texto2);
    texto2.appendChild(imagem);

    document.querySelector("#aqui").appendChild(linha);
    document.querySelector("#aqui").appendChild(linha2);
}
