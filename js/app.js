    let totalGeral = 0; 
    limpar ();

// 1º  recuperar valores (nome, qdt e valor)
   function adicionar () {
        let produto = document.getElementById ('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];
        let quantidade = document.getElementById('quantidade').value;
 // 2°  calcular o preço    
        let preco = quantidade * valorUnitario;
// 3°  adicionar o produto no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML  + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
      </section>`;
// 4°  atualizar o valor total
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;
      
    }

    function limpar () {
        totalGeral = 0; 
        document.getElementById('lista-produtos').innerHTML = '';   
        document.getElementById('valor-total').textContent = 'R$ 0';
   
    }