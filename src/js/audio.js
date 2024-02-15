let inputSom = document.getElementById('inputSom');
tabelaPeriodica.addEventListener('click', () => {
    // Usando variáveis declaradas no arquivo table.js para declarar os audios
    let audioNomeElemento = new SpeechSynthesisUtterance(nomeElementoTitulo.innerText + nomeElemento.innerText);
    let audioNumeroAtomico = new SpeechSynthesisUtterance(numeroAtomicoTitulo.innerText + numeroAtomico.innerText);
    let audioNumeroMassa = new SpeechSynthesisUtterance(numeroMassaTitulo.innerText + numeroMassa.innerText);
    let audioConfigEletro = new SpeechSynthesisUtterance(configEletronicaTitulo.innerText + configEletronica.innerText);
    let audioNatureza = new SpeechSynthesisUtterance(naturezaElementoTitulo.innerText + naturezaElemento.innerText);
    let audioEstadoFis = new SpeechSynthesisUtterance(estadoFisicoTitulo.innerText + estadoFisico.innerText);
    let audioFamilia = new SpeechSynthesisUtterance(familiaTitulo.innerText + familia.innerText);
    let audios = [audioNomeElemento, audioNumeroAtomico, audioNumeroMassa, audioConfigEletro, audioNatureza, audioEstadoFis, audioFamilia];



    // Tocando os audios
    if (inputSom.checked) {
        for (let i in audios) {
            window.speechSynthesis.speak(audios[i]);
        }
    }
})
