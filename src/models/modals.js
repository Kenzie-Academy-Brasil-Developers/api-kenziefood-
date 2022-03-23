import { Api } from "./Api.js";
import { Usuario } from "./cadastro.js";
import { Vitrine } from "./vitrine.js";
const ulVitrine = document.querySelector('.main__vitrine__produtos ul')

export class Modal {

    static modalLoginTransicao(){
        const modalDivLogin = document.querySelector('.modal__login')
        const modalCadastro = document.querySelector('.modal__cadastro')
        modalDivLogin.style.display = "none"
        modalCadastro.style.display = "flex"
    }

    static modalLogin() {
        const modalLogin = document.querySelector('.modal__login')
        modalLogin.style.display = "flex"

    }

    static modalLoginSair() {
        const modalLogin = document.querySelector('.modal__login')
        modalLogin.style.display = "none"

    }

    static modalCadastro() {
        const modalCadastro = document.querySelector('.modal__cadastro')
        modalCadastro.style.display = "none"
        
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
        Vitrine.montarVitrineProdutos(arrayFiltro, ulVitrine)
        

    }

    static async filtroTodos(){
        const produtosVitrine = await Api.pegarProdutosPublico()
        Vitrine.montarVitrineProdutos(produtosVitrine, ulVitrine)
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
        modalCarrinho.classList.toggle('hidden');
    }


}