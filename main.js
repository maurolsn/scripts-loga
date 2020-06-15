function scriptTXT(){
    capturar = document.getElementById('slcAtendimento').value;
    nomeCli = document.getElementById('nomeCliente').value;
    txtTel = document.getElementById('tel').value;
    //encerramento Chamado Técnico
    if (capturar == "ch_Tec"){
        txtScript = "Sr. " + nomeCli +", entra em contato informando que está com lentidão."+
        "&#013;Acessada ONU, verificado que RX, VLAN e PPPoE estão corretos." +
        "&#013;Realizado reset, reconfigurado DHCP da ONU e cliente informa que conexão foi normalizada." + 
        "&#013;Cliente: " + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;

    }
    //encerramento Chamado Técnico LOSS 
    if (capturar == "ch_TecFiel"){
        txtScript = "Verificado que cliente está com LOSS, possível rompimento. " + 
        "&#013;Efetuado procedimento do cordão óptico, ONU reiniciada, problema persiste."+
        "&#013;Será encaminhado técnico. "+
        "&#013;Cliente: " + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;
    }
    //encerramento Chamado Técnico ch_TecTrocarONUFiel
    if (capturar == "ch_TecTrocarONUFiel"){
        txtScript = "Verificado que cliente está Sem Internet e WIFI intermitente " + 
        "&#013;Efetuado procedimento do cordão óptico, ONU reiniciada, problema persiste."+
        "Foi verificado que cliente possui ONU AN5506-02-F, modelo defeituoso. Por gentileza, efetuar a troca do equipamento por um de MODELO DIFERENTE. " +
        "&#013;Será encaminhado técnico. "+
        "&#013;Cliente: " + nomeCli + " - " + txtTel;
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
        ".&#013;Boleto enviado para o cliente via e-mail, junto com o boleto foram passadas " + 
        "instruções de como acessar o boleto via site da LOGA.&#013;Cliente confirmou o recebimento."+
        "&#013;Cliente: " + nomeCli + " - " + txtTel;
        document.getElementById('valorDigitado').innerHTML = txtScript;
    }
    //encerramento chamado financeiro informe de pagamento com sucesso
    if (capturar == "chFin_InfPag"){
        dtVencBoleto = document.getElementById('dtvencBol').value.split('-').reverse().join('/');
        dtPag = document.getElementById('dtPagBol').value.split('-').reverse().join('/');
        txtBancoPag = document.getElementById('txtBancoPag').value;      

        if (txtBancoPag != "" && dtPag != ""){
            txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ", no dia " + dtPag + " através do banco " + txtBancoPag +
            ".&#013;Informe de pagamento efetuado com sucesso!&#013;" + 
            "Cliente esta ciente do prazo de até 60 minutos para normalização.&#013;" +
            "Cliente: "   + nomeCli + " - " + txtTel;
            document.getElementById('valorDigitado').innerHTML = txtScript; 
        }
        else if (dtPag != ""){
            txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ", no dia " + dtPag +
            ".&#013;Informe de pagamento efetuado com sucesso!&#013;" + 
            "Cliente esta ciente do prazo de até 60 minutos para normalização.&#013;" +
            "Cliente: "   + nomeCli + " - " + txtTel;
            document.getElementById('valorDigitado').innerHTML = txtScript; 
        }
        else {
            txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ".&#013;Informe de pagamento efetuado com sucesso!&#013;"+
            "Cliente esta ciente do prazo de até 60 minutos para normalização.&#013;" +
            "Cliente: "   + nomeCli + " - " + txtTel;
            document.getElementById('valorDigitado').innerHTML = txtScript; 

        }
    }
    //encerramento chamado financeiro informe de pagamento não disponível
    if (capturar == "chFin_InfPagNaoDisp"){
        dtVencBoleto = document.getElementById('dtvencBol').value.split('-').reverse().join('/');
        dtPag = document.getElementById('dtPagBol').value.split('-').reverse().join('/');
        txtBancoPag = document.getElementById('txtBancoPag').value;

        if (txtBancoPag != "" && dtPag != ""){            
            txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ", no dia " + dtPag + " através do banco " + txtBancoPag +
            ".&#013;Não foi possível realizar o informe de pagamento, devido ao histórico de informes realizados." +
            "&#013Cliente orientado a aguardar a compensação bancária que pode ocorrer em até 2 dias úteis." +
            "&#013;Cliente: "   + nomeCli + " - " + txtTel;
            document.getElementById('valorDigitado').innerHTML = txtScript; 
        }
        else if (dtPag != ""){
            txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ", no dia " + dtPag +
            ".&#013;Não foi possível realizar o informe de pagamento, devido ao histórico de informes realizados." +
            "&#013Cliente orientado a aguardar a compensação bancária que pode ocorrer em até 2 dias úteis." +
            "&#013;Cliente: "   + nomeCli + " - " + txtTel;
            document.getElementById('valorDigitado').innerHTML = txtScript; 
        }
        else {
            txtScript = "Cliente informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto +
            ".&#013;Não foi possível realizar o informe de pagamento, devido ao histórico de informes realizados." +
            "&#013Cliente orientado a aguardar a compensação bancária que pode ocorrer em até 2 dias úteis." +
            "&#013;Cliente: "   + nomeCli + " - " + txtTel;
            document.getElementById('valorDigitado').innerHTML = txtScript; 
        }
    }
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
 
