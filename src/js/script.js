const botao = document.querySelectorAll('.botao');

const pagina = document.querySelectorAll('.pagina');

botao.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPagina();

        botao.classList.add("selecionado");
        pagina[index].classList.add("selecionada")
        
    });
});

function desselecionarPagina() {
    const paginaSelecionada = document.querySelector(".pagina.selecionada");
    paginaSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}