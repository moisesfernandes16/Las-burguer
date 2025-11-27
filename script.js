const modal = document.getElementById('modalProduto');
const titulo = document.getElementById('tituloProduto');
const imagem = document.getElementById('imgProduto');
const descricao = document.getElementById('descProduto');
const search = document.getElementById('campoPesquisa');
const resultados = document.querySelector('.resultadosPesquisa')
const produto = document.querySelectorAll('.produtos')
const buttons = document.querySelectorAll('.resultLanche0 button, #laCremoso button,#comboCasal button,.resultLanche1 button, .resultDrinks button, .resultPorção button');
const produtosInfo = Array.from(produto).map(produto => ({
    nome: produto.dataset.nome,
    descricao: produto.dataset.descricao,
    botao: produto
}));

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
produto.forEach(produto => {
    produto.addEventListener('click', () => {
        titulo.textContent = produto.dataset.nome;
        descricao.textContent = produto.dataset.descricao;
        imagem.src = produto.dataset.foto || produto.querySelector('img').src;
        modal.style.display = "block";
    });
});

search.addEventListener('input', (event) => {
    const value = formatString(event.target.value);
    let hasResults = false

    
    buttons.forEach(btn => {
        let nome = btn.querySelector('h4') ? btn.querySelector('h4').textContent : btn.textContent;
        nome = formatString(nome);



        if (nome.indexOf(value) !== -1) {
            btn.style.display = "block"
            hasResults = true;
            return;
        }
        else {
            btn.style.display = "none"
        }

    })
    if (value && hasResults) {
        resultados.style.display = "flex";
        return;
    } else {
        resultados.style.display = "none";
    }
})

resultados.addEventListener('click', (event) => {
        const btn = event.target.closest('button')
        const nome = btn.querySelector('h4')?.textContent || "";
        const imgSrc = btn.querySelector('img')?.src || "";
        if (!btn) return;

        titulo.textContent = nome;
        imagem.src = imgSrc;

        const produtoOriginal = Array.from(produto).find(p => p.dataset.nome === nome);
        if (produtoOriginal) {
            nome.textContent = produtoOriginal.dataset.nome;
            descricao.textContent = produtoOriginal.dataset.descricao;
            modal.style.display = "block"
        }
    })
function formatString(str) {
    return str
        .toLowerCase() //e para deixar tudo minusculo
        .trim()// Para tirar os espaços
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}