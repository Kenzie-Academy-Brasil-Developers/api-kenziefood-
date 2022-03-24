export class Vitrine{

     static async montarVitrineProdutos(listaDeProdutos, caminho){
        caminho.innerHTML = ""
        for(let i = 0; i < listaDeProdutos.length; i++){
            const cardProduto = document.createElement('li')

            const divImagem = document.createElement('div')
            const img = document.createElement('img')

            const nomeProduto = document.createElement('h3')
            const descricaoProduto = document.createElement('p')
            const categoriaProduto = document.createElement('p')
            const divPreco = document.createElement('div')
            const preco = document.createElement('h4')
            const divBtnCarrinho = document.createElement('div')
            const iconeCarrinho = document.createElement('img')

            cardProduto.className = "card__produto"
            divImagem.className = "div__imagem--produto"
            img.className = "imagem__produto"
            nomeProduto.className = "nome__produto"
            descricaoProduto.className = "descricao__produto"
            categoriaProduto.className = "categoria__produto"
            divPreco.className = "div__preco--produto"
            preco.className = "preco__produto"
            iconeCarrinho.className = "icone__carrinho"
            divBtnCarrinho.className = "btn__carrinho"

            img.src = listaDeProdutos[i].imagem
            img.alt = "imagem do produto"
            nomeProduto.innerText = listaDeProdutos[i].nome
            descricaoProduto.innerText = listaDeProdutos[i].descricao
            categoriaProduto.innerText = listaDeProdutos[i].categoria
            preco.innerText = `R$${listaDeProdutos[i].preco.toFixed(2).toString().replace(".", ",")}`
            iconeCarrinho.src = "./src/svgs/cart.svg"
            iconeCarrinho.id = listaDeProdutos[i].id
            divBtnCarrinho.id = listaDeProdutos[i].id

            divImagem.appendChild(img)

            divBtnCarrinho.appendChild(iconeCarrinho)
            divPreco.appendChild(preco)
            divPreco.appendChild(divBtnCarrinho)

            cardProduto.appendChild(divImagem)
            cardProduto.appendChild(nomeProduto)
            cardProduto.appendChild(descricaoProduto)
            cardProduto.appendChild(categoriaProduto)
            cardProduto.appendChild(divPreco)

            caminho.appendChild(cardProduto)
        }
     }
}