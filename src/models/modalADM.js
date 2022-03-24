import { Api } from "./Api.js"
import { PegarFormulario } from "./PegarFormulario.js"

export class ModalADM{
    static async filtrosADM(categoria){
        const arrayFiltro = []
        const arrayProdutos = await Api.pegarProdutosPublico()
        arrayProdutos.forEach(produto =>{
            if(produto.categoria == categoria){
                arrayFiltro.push(produto)
            }
            
        })
        console.log(arrayFiltro)
        
        
    }

    static async filtroTodosADM(){
        const produtosVitrine = await Api.pegarProdutosPublico()
        console.log(produtosVitrine)
    }

    static filtroPanificadoraADM(event){
        let click = event.target.innerText
        if(click == '🥖 Panificadora'){
            click = 'Panificadora'
        }
        ModalADM.filtrosADM(click)
    }

    static filtroFrutasADM(event){
        let click = event.target.innerText
        if(click == '🥝 Frutas'){
            click = 'Frutas'
        }
        ModalADM.filtrosADM(click)
    }

    static filtroBebidasADM(event){
        let click = event.target.innerText
        if(click == '🍷 Bebidas'){
            click = 'Bebidas'
        }
        ModalADM.filtrosADM(click)
    }

    static abrirAdicionarProdutoModal(){
        const modalAdicionarProduto = document.querySelector(".sectionModal__cadastroProduto");
        modalAdicionarProduto.style.display = "flex"
    }

    static fecharAdicionarProdutoModal(){
        const modalAdicionarProduto = document.querySelector(".sectionModal__cadastroProduto");
        modalAdicionarProduto.style.display = "none"
    }

   
}