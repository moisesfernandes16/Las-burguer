const modal = document.getElementById('modalProduto')
const fechar = document.getElementById('fecharModal')
const titulo = document.getElementById('tituloProduto')
const imagem = document.getElementById('imgProduto')
const descricao = document.getElementById('descProduto')

document.querySelectorAll('.produtos').forEach(produto =>{
    produto.addEventListener('click', ()=>{
        titulo.textContent = produto.dataset.nome;
        descricao.textContent = produto.dataset.descricao;
        imagem.src = produto.querySelector('img').src; 
        imagem.src = produto.dataset.foto || produto.querySelector('img').src; 
        modal.style.display = "block";
    });
});

fechar.addEventListener("click", () =>{
    modal.style.display = "none"
})