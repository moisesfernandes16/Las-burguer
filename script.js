const modal = document.getElementById('modalProduto');
const fechar = document.getElementById('fecharModal');
const titulo = document.getElementById('tituloProduto');
const imagem = document.getElementById('imgProduto');
const descricao = document.getElementById('descProduto');
const barra = document.querySelector('#campoPesquisa');
const resultados = document.querySelector('.resultadoPesquisa')
const produto = document.querySelectorAll('.produtos')

const produtosInfo = Array.from(produto).map(produto => ({
    nome: produto.dataset.nome,
    descricao: produto.dataset.descricao,
    botao: produto
}));

document.querySelectorAll('.produtos').forEach(produto => {
    produto.addEventListener('click', () => {
        titulo.textContent = produto.dataset.nome;
        descricao.textContent = produto.dataset.descricao;
        imagem.src = produto.querySelector('img').src;
        imagem.src = produto.dataset.foto || produto.querySelector('img').src;
        modal.style.display = "block";
    });
});
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
document.addEventListener("click", (e) => {
    if (!barra.contains(e.target) && !resultado.contains(e.target)){
        resultados.style.display ="none"
    }
})

produtos.forEach(produto => {
  produto.addEventListener('click', () => {
    titulo.textContent = produto.dataset.nome;
    descricao.textContent = produto.dataset.descricao;
    imagem.src = produto.dataset.foto || produto.querySelector('img').src;
    modal.style.display = "block";
  });
});