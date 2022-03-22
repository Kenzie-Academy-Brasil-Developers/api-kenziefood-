import { Usuario } from "./models/cadastro.js";
import { Modal } from "./models/modals.js";
import { Carrinho } from "./models/carrinho.js";


//pegando dados do form de cadastro
const formCadastro = document.querySelector(".modal__cadastroForm");
formCadastro.addEventListener("submit", Usuario.usuarioCadastrado);

//modal de cadastro
const botaoCadastro = document.getElementById("cadastro");
botaoCadastro.addEventListener("click", Modal.modalCadastro);

const botaoRemoverModal = document.querySelector(".modal__cadastroButton");
botaoRemoverModal.addEventListener("click", Modal.modalCadastro);


const botaoFiltro = document.querySelector('.button__filtroTodos')
botaoFiltro.addEventListener('click', Modal.filtroTodos)

const botaoPanificadora = document.querySelector('.button__filtroPanificadora')
botaoPanificadora.addEventListener('click', Modal.filtroPanificadora)

const botaoFrutas = document.querySelector('.button__filtroFrutas')
botaoFrutas.addEventListener('click',Modal.filtroFrutas)

const botaoBebidas = document.querySelector('.button__filtroBebidas')
botaoBebidas.addEventListener('click',Modal.filtroBebidas)
//modal do carrinho
Carrinho.templateCarrinho();
const botaoAbrirCarrinho = document.querySelector(".section__carrinhoAbrir");
botaoAbrirCarrinho.addEventListener("click", Modal.modalCarrinho);

const botaoFecharCarrinho = document.querySelector(".section__carrinhoFechar");
botaoFecharCarrinho.addEventListener("click", Modal.modalCarrinho)

//botao excluir
const carrinhoUl = document.querySelector(".section__carrinhoUl");
carrinhoUl.addEventListener("click", Carrinho.evento)

// Carrinho.excluir()