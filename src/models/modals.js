import { Api } from "./Api.js";
import { Usuario } from "./cadastro.js";
import { Vitrine } from "./vitrine.js";
const ulVitrine = document.querySelector('.main__vitrine__produtos ul')

export class Modal {

    static modalCadastro() {
        const modalCadastro = document.querySelector(".modal__cadastro");
        modalCadastro.classList.toggle('hidden');
    }

    static async filtros(categoria){
        const arrayFiltro = []
        const arrayProdutos = await Api.pegarProdutosPublico()
        arrayProdutos.forEach(produto =>{
            if(produto.categoria == categoria){
                arrayFiltro.push(produto)
            }
            
        })
        console.log(arrayFiltro)
        Vitrine.montarVitrinePorudos(arrayFiltro, ulVitrine)

    }

    static async filtroTodos(){
        const produtosVitrine = await Api.pegarProdutosPublico()
        Vitrine.montarVitrinePorudos(produtosVitrine, ulVitrine)
    }

    static filtroPanificadora(event){
        let click = event.target.innerText
        if(click == '🥖 Panificadora'){
            click = 'Panificadora'
        }
        Modal.filtros(click)
    }

    static filtroFrutas(event){
        let click = event.target.innerText
        if(click == '🥝 Frutas'){
            click = 'Frutas'
        }
        Modal.filtros(click)
    }

    static filtroBebidas(event){
        let click = event.target.innerText
        if(click == '🍷 Bebidas'){
            click = 'Bebidas'
        }
        Modal.filtros(click)
    }


    
    static modalCarrinho() {
        const modalCarrinho = document.querySelector(".section__carrinhoModal");
        modalCarrinho.style.display = "flex"
    }

    static modalCarrinhoFechar() {
        const botaoFechar = document.querySelector(".section__carrinhoModal");
        botaoFechar.style.display = "none"
    }

}


// window.innerHigh || innerWidth = 1
