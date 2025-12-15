const Erro = document.getElementById("error");
const Main = document.getElementById("main");
const Botao = document.getElementById("Button");

Botao.addEventListener("click", function() {
    const Nome = document.getElementById("Nome").value
    .toLowerCase()
    .replace(/\s+/g, "");
    const Senha = document.getElementById("Senha").value
    .toLowerCase()
    .replace(/\s+/g, "");

    if (Nome === "verde" && Senha === "aceghp") {
        Main.style.display = "flex";
    }
    else if (Nome === "verde" && Senha !== "aceghp") {
        Erro.innerText = "O Texto Em Cuca Legal Está Errado!"
        Erro.style.display = "block";
    }
    else if (Nome !== "verde" && Senha === "aceghp") {
        Erro.innerText = "O Texto Em Pula Macaco Está Errado!"
        Erro.style.display = "block";
    }
    else {
        Erro.innerText = "Tudo Está Errado!"
        Erro.style.display = "block";
    }
});
