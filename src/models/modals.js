import { Api } from "./Api.js";
import { Usuario } from "./cadastro.js";

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
        
        

    }

    static async filtroTodos(){
        const arrayProdutos = await Api.pegarProdutosPublico()
        arrayProdutos.forEach(produto =>{
            console.log(arrayProdutos)
        })
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


    
}