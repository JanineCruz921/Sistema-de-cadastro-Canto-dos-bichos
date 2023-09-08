var pets = [];
var donos = [];

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
    constructor(id, nomePet, especie, raca, idade, peso, altura) {
        this.id = id;
        this.nomePet = nomePet
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
}


function adicionarPet() {
    if (localStorage.petsArr) {
        pets = JSON.parse(localStorage.getItem(`petsArr`));
    }
    var id = pets.length + 1;
    var nomePet = document.querySelector("#nomePet").value
    var especie = document.querySelector("#especiePet").value;
    var raca = document.querySelector("#racaPet").value;
    var idade = document.querySelector("#idadePet").value;
    var peso = document.querySelector("#pesoPet").value;
    var altura = document.querySelector("#alturaPet").value;
    let novoPet = new Pet(id, nomePet, especie, raca, idade, peso, altura);
    pets.push(novoPet)

    document.querySelector("#nomePet").value = "";
    document.querySelector("#especiePet").value = "";
    document.querySelector("#racaPet").value = "";
    document.querySelector("#idadePet").value = "";
    document.querySelector("#pesoPet").value = "";
    document.querySelector("#alturaPet").value = "";

    console.log(pets)

    localStorage.petsArr = JSON.stringify(pets);
}

//Essa parte do código tenta:
// percorrer o banco de dados e exibir os dados armazenados
//criar uma nova celula na tabela para adicionar o novo dado nela
//criar botões referentes ao novo dado adicionado no final da nova celula
//pra fazer essa parte do código assita o vídeo de adicionar dados de um array numa tabela

function exibirPet() {
    if (localStorage.petsArr) {
        pets = JSON.parse(localStorage.getItem(`petsArr`));
    }
    for (let i = 0; i < pets.length; i++) {
        let tBody = document.querySelector("#tBody")
        let tr = tBody.insertRow();
        let TdNome = tr.insertCell();
        let TdEspecie = tr.insertCell();
        let TdRaca = tr.insertCell();
        let TdIdade = tr.insertCell();
        let TdPeso = tr.insertCell();
        let TdAltura = tr.insertCell();
        let Td_btns = tr.insertCell();

        TdNome.innerText = pets[i].nomePet;
        TdEspecie.innerText = pets[i].especie;
        TdRaca.innerText = pets[i].raca;
        TdIdade.innerText = pets[i].idade;
        TdPeso.innerText = pets[i].peso;
        TdAltura.innerText = pets[i].altura;

        let novoBotaoDono = document.createElement("button");
        novoBotaoDono.innerText = "Dados do Dono"
        novoBotaoDono.addEventListener("click", exibirDono())
        Td_btns.append(novoBotaoDono)

        let novaImgEditar = document.createElement("img");
        novaImgEditar.src = "./assets/ícones/icone_edicao.png"
        novaImgEditar.setAttribute("onclick", "editar("+pets[i].id+")")
        Td_btns.append(novaImgEditar)

        let novaImgExcluir = document.createElement("img");
        novaImgExcluir.src = "./assets/ícones/icone_Exclusao.png";
        novaImgExcluir.setAttribute("onclick", "deletar("+pets[i].id+");")
        Td_btns.append(novaImgExcluir);
    }
    
}

function deletar(id) {
    //alert('deletando id '+ id)
    for(let i= 0; i< pets.length; i++){
        if(pets[i].id == id){
            pets.splice(i, 1);
            tBody.deleteRow(i);
            localStorage.removeItem([i])
        }
        localStorage.petsArr = JSON.stringify(pets);
    }
}
function editar() {
    alert("editando")
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
    var contato = document.querySelector("#contatoDono").value
    var email = document.querySelector("#emailDono").value
    var cpf = document.querySelector("#cpfDono").value
    let novoDono = new Dono(nomeDono, endereco, cep, contato, email, cpf);
    donos.push(novoDono)
    console.log(donos)
}

function exibirDono() {
    var PopUpDono = document.querySelector(".divDadosDono")
    PopUpDono.style.display = "flex"
}


