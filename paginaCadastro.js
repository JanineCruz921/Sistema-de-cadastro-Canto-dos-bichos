//ainda é preciso resolver a problemática de exibir os dados do dono de um respectivo cachorro separada dos
// dados dele, de modo que as mesmas só apareçam ao cliclar um botão. Ainda é preciso trabalhar a estrutura 
//html dessa parte do projeto.


const pets = [];
const donos = [];

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
    constructor(nomePet, especie, raca, idade, peso, altura) {
        this.nomePet = nomePet
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
}

function adicionarPet() {
    //essa parte do código tenta solucionar a problemática de adicionar 
    //os novos dados no array e em um banco de dados local para uso posterior
    var nomePet =    document.querySelector("#nomePet").value
    var especie = document.querySelector("#especiePet").value;
    var raca = document.querySelector("#racaPet").value;
    var idade = document.querySelector("#idadePet").value;
    var peso = document.querySelector("#pesoPet").value;
    var altura = document.querySelector("#alturaPet").value;
    let novoPet = new Pet(nomePet, especie, raca, idade, peso, altura);
    pets.push(novoPet)
    console.log(pets)

    if (localStorage.petsArr) {
   // pets = JSON.parse(localStorage.getItem(`petsArr`))
    }
    localStorage.petsArr = JSON.stringify(pets)
}

function exibirPet() {
    //Essa parte do código tenta:
    // percorrer o banco de dados e exibir os dados armazenados
    //criar uma nova celula na tabela para adicionar o novo dado nela
    //criar botões referentes ao novo dado adicionado no final da nova celula
    //pra fazer essa parte do código assita o vídeo de adicionar dados de um array numa tabela

    if (localStorage.petsArr) {
        var arr = JSON.parse(localStorage.getItem(`petsArr`));
    }
    for (let i = 0; i < pets.length; i++) {
        let tBody = document.querySelector("#tBody")
        tBody.innerText = "";
        let tr = tBody.insertRow();
        let TdNome = tr.insertCell();
        let TdEspecie = tr.insertCell();
        let TdRaca = tr.insertCell();
        let TdIdade = tr.insertCell();
        let TdPeso = tr.insertCell();
        let TdAltura = tr.insertCell();

        TdNome.innerText = arr [i].nomePet;
        TdEspecie.innerText = arr [i].especie;
        TdRaca.innerText = arr [i].raca;
        TdIdade.innerText = arr [i].idade;
        TdPeso.innerText = arr [i].peso;
        TdAltura.innerText = arr [i].altura;

        let novoBotaoDono = document.createElement("button");
        let Td_btnDono = tr.insertCell();
        novoBotaoDono.innerText = "Dados do Dono"
        Td_btnDono.append(novoBotaoDono)

        let novoBotaoEditar = document.createElement("button");
        let Td_btnEditar = tr.insertCell();
        novoBotaoEditar.innerText = "Editar"
        Td_btnEditar.append(novoBotaoEditar)

        let novoBotaoExcluir = document.createElement("button");
        let Td_btnExcluir = tr.insertCell();
        novoBotaoExcluir.innerHTML = "Excluir"
        Td_btnExcluir.append(novoBotaoExcluir);
    }
}


class Dono {
    constructor(nomeDono, endereco, cep, contato, email, cpf) {
        this.nomeDono = nomeDono
        this.endereco = endereco
        this.cep = cep
        this.contato = contato
        this.email = email
        this.cpf = cpf
    }
}

function adicionarDono() {
    var nomeDono = document.querySelector("#nomeDono").value
    var endereco = document.querySelector("#enderecoDono").value
    var cep = document.querySelector("#cepDono").value
    var contato= document.querySelector("#contatoDono").value
    var email = document.querySelector("#emailDono").value
    var cpf = document.querySelector("#cpfDono").value
    let novoDono = new Dono(nomeDono, endereco, cep, contato, email, cpf);
    donos.push(novoDono)
    console.log(donos)
}





