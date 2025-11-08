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

fechar.addEventListener("click", () => {
    modal.style.display = "none"
})

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
function mostrarResultados(busca) {
  resultados.innerHTML = '';

  if (busca.length < 2) {
    resultados.style.display = 'none';
    return;
  }

  const achados = produtosInfo.filter(prod => 
    (prod.nome && prod.nome.toLowerCase().includes(busca)) ||
    (prod.descricao && prod.descricao.toLowerCase().includes(busca))
  );

  if (achados.length === 0) {
    resultados.innerHTML = "<div>Nenhum produto encontrado</div>";
    resultados.style.display = "block";
    return;
  }

  achados.forEach(prod => {
    const linha = document.createElement("div");
    linha.innerHTML = `<strong>${prod.nome}</strong> 
      <small style="opacity:.7;">${prod.descricao.slice(0, 50)}...</small>`;
    linha.onclick = () => {
      prod.botao.click();
      resultados.style.display = "none";
      barra.value = "";
    };
    resultados.appendChild(linha);
  });
  resultados.style.display = "block";
}
barra.addEventListener ("input", () =>{
    mostrarResultados(barra.value.trim().toLowerCase());
})
barra.addEventListener("Keydown",(event) =>{ 
    if (event.key === "Enter") {
        const primeira = resultados.querySelector("div")
        if(primeira){
            primeira.click()
        }
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