import { Api } from "./Api.js";

const produtosVitrine = await Api.pegarProdutosPublico()
const ul = document.querySelector(".section__carrinhoUl")
const spanTotal = document.querySelector(".section__carrinhoSpanTotal")
const spanQuantidade = document.querySelector(".section__carrinhoSpanQuantidade")

export class Carrinho {
    static localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'))
    static carrinhoProdutos = localStorage.getItem('produtosCarrinho') !== null ? this.localStorageCarrinho : []

    static templateCarrinho(listaDoCarrinho) {
        ul.innerHTML = ""
        
        listaDoCarrinho.forEach(produtos => {
            const li = document.createElement("li")
            li.className = "section__carrinhoLi"

            li.innerHTML = `
            <div class="section__carrinhoDivImg">
            <img src="${produtos.imagem}" alt="${produtos.nome}" class="section__carrinhoLiImg">
            </div>

            <div class="section__carrinhoDivNomes">
            <p class="section__carrinhoLiNome">${produtos.nome}</p>
            <p class="section__carrinhoLiCategoria">${produtos.categoria}</p>
            <p class="section__carrinhoLiPreco">R$${produtos.preco.toFixed(2).toString().replace(".", ",")}</p>
            </div>
            <button id="${produtos.id}"class="section__carrinhoExcluir"><img class="section__carrinhoFecharImg" src="./src/svgs/trash-solid.svg"></button>
            `
            ul.appendChild(li);
        });

        const somaTotal = this.somarValorTotalCarrinho(listaDoCarrinho).toFixed(2).toString().replace(".", ",")

        spanTotal.innerText = `R$${somaTotal}`
        spanQuantidade.innerText = listaDoCarrinho.length
    }

    static somarValorTotalCarrinho(listaCarrinho){
        return listaCarrinho.reduce((acc, total) => {
            return acc + total.preco
        }, 0);
    }

    static interceptarEventoCompra(event){
        const botaoAdicionarCarrinho = event.target
        if(botaoAdicionarCarrinho.className == "btn__carrinho" || botaoAdicionarCarrinho.className == "icone__carrinho"){
            const idProduto = botaoAdicionarCarrinho.id
            Carrinho.adicionarProdutoCarrinho(idProduto)
        }
    }

    static interceptarEventoExcluirProduto(event){
        const botaoExcluirProdutoCarrinho = event.target
        if(botaoExcluirProdutoCarrinho.className == "section__carrinhoExcluir" || botaoExcluirProdutoCarrinho.className == "section__carrinhoFecharImg"){
            const idProduto = botaoExcluirProdutoCarrinho.id
            Carrinho.excluirProdutoCarrinho(idProduto)
        }
    }

    static adicionarProdutoCarrinho(idProduto){
        const produtoFiltrado = produtosVitrine.find((produto) => produto.id == idProduto)
        this.carrinhoProdutos.push(produtoFiltrado)
        this.updateLocalStorage()
        this.templateCarrinho(this.carrinhoProdutos)
    }

    static excluirProdutoCarrinho(idProduto) {
        const indice = this.carrinhoProdutos.indexOf((produto) => produto.id == idProduto)
        this.carrinhoProdutos.splice(indice, 1)
        this.updateLocalStorage()
        this.templateCarrinho(this.carrinhoProdutos)
        
    }

    static updateLocalStorage = () =>{
        localStorage.setItem('produtosCarrinho', JSON.stringify(this.carrinhoProdutos)) 
    }
}