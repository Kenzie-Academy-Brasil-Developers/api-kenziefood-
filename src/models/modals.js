import { Usuario } from "./cadastro.js";

export class Modal {

    static modalCadastro() {
        const modalCadastro = document.querySelector(".modal__cadastro");
        modalCadastro.classList.toggle('hidden');
    }

    static modalCarrinho() {
        const modalCarrinho = document.querySelector(".section__carrinhoModal");
        modalCarrinho.classList.toggle('hidden');
    }

}