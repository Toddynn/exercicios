document.querySelector("#adicionar").addEventListener("click", calculaIMC);

function criaModal(){
    var buttonModal = document.createElement("button");
        buttonModal.setAttribute('type', 'button');
        buttonModal.setAttribute('id', 'open-modal')
        buttonModal.setAttribute('class', 'btn-primary');
        buttonModal.setAttribute('data-bs-toggle', 'modal');
        buttonModal.setAttribute('data-bs-target', '#exampleModal');
        
        var modal = document.createElement("div");                          
        modal.setAttribute('class', 'modal');
        modal.setAttribute('id', 'exampleModal');
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-labelledby', 'exampleModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        var modalDialog = document.createElement("div");
        modalDialog.setAttribute('class', 'modal-dialog');

        var modalContent = document.createElement("div");
        modalContent.setAttribute('class', 'modal-content');

        var modalHeader = document.createElement("div");
        modalHeader.setAttribute('class', 'modal-header');

        var titleModal = document.createElement("h5");
        titleModal.setAttribute = ('class', 'modal-title');
        titleModal.setAttribute = ('id', 'exampleModalLabel');
        titleModal.textContent = "Warning";

        var modalBody = document.createElement("div");
        modalBody.setAttribute('class', 'modal-body');
        modalBody.textContent =  `Hey ${nome.value}, você esqueceu de preencher algum campo`;

        var modalFooter = document.createElement("div");
        modalFooter.setAttribute('class', 'modal-footer');

        var footerClose = document.createElement("button");
        footerClose.setAttribute('type', 'button');
        footerClose.setAttribute('id', 'close-modal');
        footerClose.setAttribute('class', 'btn btn-danger');
        footerClose.setAttribute('data-bs-dismiss', 'modal');
        footerClose.textContent = "Fechar";

        var closeModal = document.createElement("button");
        closeModal.setAttribute('type', 'button');
        closeModal.setAttribute('id', 'close-modal');
        closeModal.setAttribute('class', 'btn-close');
        closeModal.setAttribute('data-bs-dismiss', 'modal');

        modal.appendChild(modalDialog);
            modalDialog.appendChild(modalContent);
                modalContent.appendChild(modalHeader);
                    modalHeader.appendChild(titleModal);
                    modalHeader.appendChild(closeModal);
                modalContent.appendChild(modalBody);
                modalContent.appendChild(modalFooter);
                    modalFooter.appendChild(footerClose);
        buttonModal.appendChild(modal);

        document.querySelector("#appearsModal").appendChild(buttonModal);

        $(function () {
            $('#open-modal').trigger('click');
        });

        return criaModal;
}

const nome = document.getElementById("inputName");
const email = document.getElementById("inputEmail");
const dataNasc = document.getElementById("inputDate");

const validarEmail = /\S+@\S+.\S+/;

function calculaIMC(event){
    event.preventDefault();

    let idade = moment().diff(dataNasc.value, 'years');
    let circunf = document.getElementById("inputCircunf").value;
    let select = document.getElementById("inputSexo");
    let sexo = select.options[select.selectedIndex].value;
    let altura = Number(document.getElementById("inputAltura").value);
    let peso = Number(document.getElementById("inputPeso").value);

    if(nome.value === '' || !email.value.match(validarEmail) || dataNasc.value === '' || circunf === '' || sexo === '' || altura === '' || peso === ''){
        criaModal();
    }else{
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
                estado = "Pré Obesidade";
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
                            Confira a imagem abaixo do seu IMC.`;
        
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

        document.querySelector("#apresenta").appendChild(linha);
        document.querySelector("#apresenta").appendChild(linha2);
    }
}