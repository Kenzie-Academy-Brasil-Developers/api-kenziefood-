import { Api } from "./Api.js";

export class VitrineAdm {

    static async vitrineProdutos() {

        const data = await Api.pegarProdutosPublico();
        const vitrine = document.querySelector(".vitrine__produtosTemplate");
        
        data.forEach(produtos => {

            const li = document.createElement("li");
            li.className = "vitrine__produtosTemplateLi";
            li.innerHTML = `
            <div class="vitrine__produtosTemplateDivImg">
            <img class="vitrine__produtosTemplateImg" src="${produtos.imagem}" alt="${produtos.nome}">
            <span class="vitrine__produtosTemplateSpanImg">${produtos.nome}</span>
            </div>

            <div class="vitrine__produtosTemplateDivCategoria">
            <button class="vitrine__produtosTemplateSpanCategoria">${produtos.categoria}</button>
            </div>

            <div class="vitrine__produtosTemplateDivDescricao">
            <span class="vitrine__produtosTemplateSpanDescricao">${produtos.descricao}</span>
            </div>

            <div class="vitrine__produtosTemplateDivBotoes">

            <button id="${produtos.id}"class="vitrine__produtosTemplateBotaoPath">
            <img class="vitrine__produtosImgPath" src="../svgs/pen-to-square-solid.svg"> 
            </button>

            <button id="${produtos.id}"class="vitrine__produtosTemplateBotaoDelete">
             <img class="vitrine__produtosImgDelete" src="../svgs/trash-solid.svg">
            </button>

            </div>
            `;
            vitrine.appendChild(li);
        });

    }














}