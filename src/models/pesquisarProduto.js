import { Api } from "./Api.js";

const campoBusca = document.querySelector('.pesquisa__produtos')

class BuscandoProduto {

    static async filtroBusca() {

        const data = await Api.pegarProdutosPublico()

        const NomesProdutos = produtos.filter((produto) => {

            let busca = campoBusca.value
    
            if(busca.toUpperCase() === produto.x.toUpperCase()){
                return produto.x
            }else if(busca.toUpperCase() === produto.y.toUpperCase()){
                return produto.y
            }else if(busca.toUpperCase() === produto.z.toUpperCase()){
                return produto.z
            }
    
        });

        xxx(NomesProdutos);
    }

}