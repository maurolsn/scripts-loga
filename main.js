var capturar = "";
var nomeCli = "";
var dtVencBoleto = "";
var txtScript = "";
var txtTel = "";

function scriptTXT(){
    capturar = document.getElementById('slcAtendimento').value;
    nomeCli = document.getElementById('nomeCliente').value;
    txtTel = document.getElementById('tel').value;
    //encerramento Chamado Técnico
    if (capturar == "ch_Tec"){
        txtScript = "Aplicado Restory, em seguida aplicadas todas as configurações padrões." + 
            "&#013;No teste realizado pelo cliente o mesmo informa que a conexão foi normalizada."+
            "&#013;Cliente: " + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;

    }
    //encerramento Chamado Técnico Field Geral
    if (capturar == "ch_TecFielLos"){
        txtScript = "Reclamação: Cliente reclama que está sem internet."+
            "&#013;Motivo da necessidade de tratativa in-loco:Será necessário ir ao local pois a ONU apresenta LED LOSS aceso, possível rompimento."+
            "&#013;Ações efetuadas pelo Analista:Verificado que não há falha massiva na região, somente esse cliente está fora na caixa."+ 
            "&#013;Cliente: " + nomeCli +
            "&#013;Telefone: " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;

    }
    if (capturar == "ch_TecTrocaOnuDef"){
        txtScript = "Foi verificado que cliente possui ONU AN5506-02-F, modelo defeituoso."+ 
        "&#013;Por gentileza, efetuar a troca do equipamento por um de modelo diferente. " + 
        "&#013;Cliente: " + nomeCli +
        "&#013;Telefone: " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;

    }
    //encerramento chamado técnico Huawey
    if (capturar == "ch_TecHuawey"){
        txtScript = "Aplicado Reprovisionamento no ONU."+
        "&#013;No teste realizado pelo cliente o mesmo informa que a conexão foi normalizada."+
        "&#013;Cliente: " + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;

    }
    //encerramento chamado financeiro 2 via de boleto
    if (capturar == "chFin_2ViaBoleto"){
        dtVencBoleto = document.getElementById('dtvencBol').value.substr(0, 10).split('-').reverse().join('/');
        txtScript = "Cliente solicita a segunda via do boleto com vencimento " + dtVencBoleto + 
        ".&#013;Boleto enviado para o cliente via e-mail, junto com o boleto foram passadas" + 
        "instruções de como acessar o boleto via site da LOGA.&#013;Cliente confirmou o recebimento.&#013;Cliente: "
         + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;
    }
    //encerramento chamado financeiro informe de pagamento com sucesso
    if (capturar == "chFin_InfPag"){
        dtVencBoleto = document.getElementById('dtvencBol').value.split('-').reverse().join('/');
        txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
        ".&#013;Informe de pagamento efetuado com sucesso!&#013;Cliente: "   + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript; 
    }
    //encerramento chamado financeiro informe de pagamento não disponível
    if (capturar == "chFin_InfPagNaoDisp"){
        dtVencBoleto = document.getElementById('dtvencBol').value.split('-').reverse().join('/');
        txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
        ".&#013;Não foi possível aplicar o informe de pagamento. Cliente orientado a aguardar a compensação"+
        " bancária que pode ocorrer em até 2 dias úteis.&#013;Cliente: "   + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript; 
    }
}
function salvar(){
    // let blob = new Blob([txtScript],
    //     {
    //         type: "text/plain;charset=utf-8"
    //     });
    //     saveAs(blob, capturar + ".txt");
}
function saveTextAsFile()
{
    var textToSave = document.getElementById("valorDigitado").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("nomeCliente").value;
    var fileCpfCnpjToSaveAs = document.getElementById("cpfCnpj").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs + " - " + fileCpfCnpjToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
