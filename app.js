//Challenge AMIGO SECRETO

//Neste desafio, você desenvolverá uma aplicação que permita aos usuários inserir nomes de amigos em uma lista para, 
//em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

//Funcionalidades:
//1.Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista 
//visível ao clicar em "Adicionar".
//2.Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//3.Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//4.Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e 
//exibido na página.

//Lista para receber os nomes dos participantes.
let amigos = [];


//Função para adicionar amigos.
function adicionarAmigo(){
    
    //Recebendo o texto digitado na entrada.
    let addAmigo = document.getElementById("amigo");
    let nomeAmigo = addAmigo.value;

    //Validando a entrada para não receber um valor vazio.
    if(!nomeAmigo){
        alert("Por favor, insira um nome.")
        return;
    }

    //Insere o nome do amigo na lista após validação.
    amigos.push(nomeAmigo);
    console.log(amigos); //Exibindo no console.
    addAmigo.focus();

    //Limpar o campo de entrada
    addAmigo.value = ""

    //chamando a função que atualiza a lista.
    atualizarLista();

}

    //Função para atualizar a lista.
    function atualizarLista(){
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for(let i = 0; i < amigos.length; i++){
            let item = document.createElement("li");
            item.textContent = amigos[i];
            listaAmigos.appendChild(item);
        }
    }