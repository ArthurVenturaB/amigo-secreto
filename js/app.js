let listaDeNomes = [];

function adicionar(){
    let nomeSelecionado = document.getElementById('nome-amigo');
    if(nomeSelecionado.value == ''){
        alert('Informe o nome a ser adicionado')
        return;
    }

    if(listaDeNomes.includes(nomeSelecionado.value)){
        alert('Nome já adicionado');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    
    listaDeNomes.push(nomeSelecionado.value);

    if(lista.textContent == ''){
        lista.textContent = nomeSelecionado.value;
    }else lista.textContent = lista.textContent + ', ' + nomeSelecionado.value;

    nomeSelecionado.value = '';
    console.log(listaDeNomes)
}

function sortear(){
    if(listaDeNomes.length < 4){
        alert('Adicione pelo meno quatro nomes para o sorteio.');
        return;
    }
    let sorteio = document.getElementById('lista-sorteio')
    for(let i = 0; i < listaDeNomes.length; i++){

        if(i == listaDeNomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[0] + '<br>'
        }else{sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[i +1] + '<br>'
    }
    } 

}

function embaralhar(listaDeNomes) {
    for (let indice = listaDeNomes.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaDeNomes[indice - 1], listaDeNomes[indiceAleatorio]] = [listaDeNomes[indiceAleatorio], listaDeNomes[indice - 1]];
    }

}

function reiniciar(){
    listaDeNomes = [];
    document.getElementById('nome-amigo').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}