import { Api } from "./Api.js"
import { PegarFormulario } from "./PegarFormulario.js"
import { VitrineAdm } from "./vitrineAdm.js"

const arrayProdutosNosso = await Api.pegarMeusProdutos()

const vitrine = document.querySelector(".vitrine__produtosTemplate");

let idProduto = ''
export class ModalADM{
    static async filtrosADM(categoria){
        const arrayFiltro = []
        
        arrayProdutosNosso.forEach(produto =>{
            if(produto.categoria == categoria){
                arrayFiltro.push(produto)
                VitrineAdm.vitrineProdutos(arrayFiltro, vitrine)
            }
            
        })
        console.log(arrayFiltro)
        
        
    }

    static async filtroTodosADM(){
        VitrineAdm.vitrineProdutos(arrayProdutosNosso, vitrine)
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
    
    static editarProdutoApiModal(event){
        const botaoEditar = event.target;
        if(botaoEditar.className === "vitrine__produtosImgPath"){
            const modalEditarProduto = document.querySelector(".sectionModal__alterarProduto");
            modalEditarProduto.style.display = "flex"
        }
    }

    static fecharEditarProdutoApiModal(){
        const modalEditarProduto = document.querySelector(".sectionModal__alterarProduto");
        modalEditarProduto.style.display = "none"
    }

    static excluirProdutoAbrir(event) {
        const botaoExcluirProdutoCarrinho = event.target
        console.log(botaoExcluirProdutoCarrinho)
        if(botaoExcluirProdutoCarrinho.className == "vitrine__produtosImgDelete"){
            const modalExcluirProduto = document.querySelector(".sectionModal__excluirProduto");
            modalExcluirProduto.style.display = "flex";
            idProduto = botaoExcluirProdutoCarrinho.id
            console.log(idProduto)
            console.log(modalExcluirProduto)
            
        }
    }

    static excluirProdutoAbrirFechar(){
        const modalExcluirProduto = document.querySelector(".sectionModal__excluirProduto");
        modalExcluirProduto.style.display = "none"
    }

    static async exclusaoConfirmada(event){
        event.preventDefault()
        Api.deletarMeuProduto(idProduto)
        ModalADM.modalCadastrodeProduto()
        
    }

    static async modalCadastrodeProduto(){
        const arrayProdutosNosso = await Api.pegarMeusProdutos()
        VitrineAdm.vitrineProdutos(arrayProdutosNosso, vitrine)
    }

}

/*const arrayProdutosNosso = await Api.pegarMeusProdutos()    
            Api.deletarMeuProduto(idProduto)
            VitrineAdm.vitrineProdutos(arrayProdutosNosso, vitrine)*/