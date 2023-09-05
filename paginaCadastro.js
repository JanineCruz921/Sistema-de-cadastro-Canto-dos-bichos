const pets = [];

const paginaIntroducao = document.querySelector("#paginaIntroducao")
const paginaNovoCadastro = document.querySelector("#paginaNovoCadastro")
const paginaCadastros = document.querySelector("#paginaCadastros")

var btnNovoCadastro = document.querySelector("#btnNovoCadastro")
var btnCadastros = document.querySelector("#btnCadastros")

function trocaDePagina1() {
    paginaIntroducao.style.display = "none"
    paginaNovoCadastro.style.display = "flex"
    paginaCadastros.style.display = "none"
}

function trocaDePagina2() {
    paginaIntroducao.style.display = "none"
    paginaNovoCadastro.style.display = "none"
    paginaCadastros.style.display = "flex"
}

class Pet {
    constructor(nome, especie, raca, idade, peso, altura, nomeDono, endereco, contato, email) {
        this.nome = nome
        this.especie = especie
        this.raca = raca
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.nomeDono = nomeDono
        this.endereco = endereco
        this.contato = contato
        this.email = email

    }
}
//ainda é preciso resolver a problemática de exibir os dados do dono de um respectivo cachorro separada dos dados dele, de modo que as 
//mesmas só apareçam ao cliclar um botão. Ainda é preciso trabalhar a estrutura html dessa parte do projeto.
function adicionarPet() {
    //essa parte do código tenta solucionar a problemática de adicionar os novos dados em um banco de dados para deixá-los salvos
    if (localStorage.petsArr) {
        pets = JSON.parse(localStorage.getItem('petsArr'))
    }

    var nomePet = document.querySelector("#nomePet").value
    var especiePet = document.querySelector("#especiePet").value
    var racaPet = document.querySelector("#racaPet").value
    var idadePet = document.querySelector("#idadePet").value
    var pesoPet = document.querySelector("#pesoPet").value
    var alturaPet = document.querySelector("#alturaPet").value
    var nomeDono = document.querySelector("#nomeDono").value
    var enderecoDono = document.querySelector("#enderecoDono").value
    var contatoDono = document.querySelector("#contatoDono").value
    var emailDono = document.querySelector("#emailDono").value
    let novoPet = new Pet(nomePet, especiePet, racaPet, idadePet, pesoPet,
        alturaPet, nomeDono, enderecoDono, contatoDono, emailDono)
    pets.push(novoPet)
    console.log(pets)

    localStorage.petsArr = JSON.stringify(pets)
}

function exibirPet() {
    //Essa parte do código tenta percorrer esse banco de dados, mostrar o que tem nele e exibir o novo dado adicionado
    //pra fazer essa parte do código assita o vídeo de adicionar dados de um array numa tabela
    paginaCadastros.innerHTML = "";
    if (localStorage.petsArr) {
        arr = JSON.parse(localStorage.getItem('petsArr'));
    }
    for (var i = 0; i < pets.length; i++) {
        let novoLinha = document.createElement("tr");
        novoLinha.innerHTML = pets[i];
        paginaCadastros.append(novoParagrafo);
    }

    var table = document.querySelector("#tableCadastros")
    let novaTr = document.createElement("tr")
    let novaTd = document.createElement("td")
    table.append(novaTr)
    novaTr.append(novaTd)
    var novoBotaoDono = document.createElement("button")
    novaTd.append(novoBotaoDono)
    var novoBotaoEditar = document.createElement("button")
    novaTd.append(novoBotaoEditar)
    var novoBotaoExcluir = document.createElement("button")
    novaTd.append(novoBotaoExcluir)
}


