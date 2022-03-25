import { Api } from "./Api.js";
import { Vitrine } from "./vitrine.js";

const produtosVitrine = await Api.pegarProdutosPublico()
const campoBusca = document.querySelector('.pesquisa__produtos')
const ulVitrine = document.querySelector('.main__vitrine__produtos ul')
export class BuscandoProduto {

    static async filtroBusca() {

        let produtosFiltrados = []

        const onKeyUp = (event) =>{
            
            const caracters = 3

            if(event.target.value.length >= caracters){

                produtosVitrine.map((produto) =>{ 

                    if(produto.nome.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())){
                        produtosFiltrados.push(produto)
                        Vitrine.montarVitrineProdutos(produtosFiltrados, ulVitrine)
                        produtosFiltrados = []

                    }
                })
                
            }else{

                Vitrine.montarVitrineProdutos(produtosVitrine, ulVitrine)

            } 
        }
        campoBusca.addEventListener('keyup', onKeyUp)
    }
}
