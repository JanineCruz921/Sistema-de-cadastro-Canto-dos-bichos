var pets = [];

const paginaIntroducao = document.querySelector("#paginaIntroducao")
const paginaNovoCadastro = document.querySelector("#paginaNovoCadastro")
const paginaCadastros = document.querySelector("#paginaCadastros")

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
    constructor(id, nomePet, especie, raca, idade, peso, altura, nomeDono, contatoDono, editId) {
        this.id = id;
        this.nomePet = nomePet
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.nomeDono = nomeDono;
        this.contatoDono = contatoDono;
        this.editId = editId;
    }
}


function adicionarPet() {
alert("Pet Cadastrado com sucesso, acesse VER PETS CADASTRADOS para ver o novo Pet")
    if (localStorage.petsArr) {
        pets = JSON.parse(localStorage.getItem(`petsArr`));
    }
    var id = pets.length + 1;
    var editId = null;
    var nomePet = document.querySelector("#nomePet").value
    var especie = document.querySelector("#especiePet").value;
    var raca = document.querySelector("#racaPet").value;
    var idade = document.querySelector("#idadePet").value;
    var peso = document.querySelector("#pesoPet").value;
    var altura = document.querySelector("#alturaPet").value;
    var nomeDono = document.querySelector("#nomeDono").value;
    var contatoDono = document.querySelector("#contatoDono").value;

    let novoPet = new Pet(id, nomePet, especie, raca, idade, peso, altura, nomeDono, contatoDono, editId);
    pets.push(novoPet)

    localStorage.petsArr = JSON.stringify(pets);
    limparInput()

}

function limparInput() {
    document.querySelector("#nomePet").value = "";
    document.querySelector("#especiePet").value = "";
    document.querySelector("#racaPet").value = "";
    document.querySelector("#idadePet").value = "";
    document.querySelector("#pesoPet").value = "";
    document.querySelector("#alturaPet").value = "";
    document.querySelector("#nomeDono").value = "";
    document.querySelector("#contatoDono").value = "";
}

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
        let TdNomeDono = tr.insertCell();
        let TdContatoDono = tr.insertCell();
        let Td_btns = tr.insertCell();

        TdNome.innerText = pets[i].nomePet;
        TdEspecie.innerText = pets[i].especie;
        TdRaca.innerText = pets[i].raca;
        TdIdade.innerText = pets[i].idade;
        TdPeso.innerText = pets[i].peso;
        TdAltura.innerText = pets[i].altura;
        TdNomeDono.innerText = pets[i].nomeDono;
        TdContatoDono.innerText = pets[i].contatoDono;


        let novaImgEditar = document.createElement("img");
        novaImgEditar.src = "./assets/ícones/icone_edicao.png";
        novaImgEditar.setAttribute ("onclick", "prepararEdicao()")
        Td_btns.append(novaImgEditar);

        let novaImgExcluir = document.createElement("img");
        novaImgExcluir.src = "./assets/ícones/icone_Exclusao.png";
        novaImgExcluir.setAttribute("onclick", "deletar(" + pets[i].id + ");")
        Td_btns.append(novaImgExcluir);
    }

}

function deletar(id) {
    if (confirm("Deseja mesmo deletar este item")) {
    for (let i = 0; i < pets.length; i++) {
            if (pets[i].id == id) {
                pets.splice(i, 1);
                tBody.deleteRow(i);
                localStorage.removeItem([i])
            }
        }
        localStorage.petsArr = JSON.stringify(pets);
    }
}




