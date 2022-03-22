
export class Carrinho {

    static async testeProdutos() {
        const response = await fetch("https://kenzie-food-api.herokuapp.com/products");
        const data = await response.json();
        return data
    }
    
    static async templateCarrinho() {

        const data = await Carrinho.testeProdutos();
        const ul = document.querySelector(".section__carrinhoUl");
        let count = 1;

        data.forEach(produtos => {
            
            const li = document.createElement("li");
            li.className = "section__carrinhoLi";

            li.innerHTML = `
            <div class="section__carrinhoDivImg">
            <img src="${produtos.imagem}" alt="${produtos.nome}" class="section__carrinhoLiImg">
            </div>

            <div class="section__carrinhoDivNomes">
            <p class="section__carrinhoLiNome">${produtos.nome}</p>
            <p class="section__carrinhoLiCategoria">${produtos.categoria}</p>
            <p class="section__carrinhoLiPreco">R$${produtos.preco.toFixed(0)},00</p>
            </div>
            <button class="section__carrinhoExcluir">${count}</button>
            `
            count++
            ul.appendChild(li);
        });
       
        

        const spanQuantidade = document.querySelector(".section__carrinhoSpanQuantidade");
        spanQuantidade.innerText = data.length;

        const spanTotal = document.querySelector(".section__carrinhoSpanTotal");
        const soma = data.reduce((acc, total) => {
            return acc + total.preco
        }, 0);
        const total = soma.toFixed(0)
        spanTotal.innerText = `R$${total},00`;

    }

    static evento(event) {
        const botao = event.target.innerText
        data.splice(botao,1)
    }
    
    
}