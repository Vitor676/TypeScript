interface Usuario{
    nome: String;
    dia_nascimento : Number;
    senha: String;
    email: String;
    sexo: String;
}

const usuario01 :Usuario = {
    nome: "Vitor de Sousa",
    dia_nascimento : 25,
    senha: "Coxinha01",
    email: "vitin89@email.com",
    sexo: "Masculino"
}

const usuario02 :Usuario = {
    nome: "Thais da Silva",
    dia_nascimento : 14,
    senha: "Manga17",
    email: "thaythay0147@email.com",
    sexo: "Feminino"
}

console.log(usuario01, usuario02)