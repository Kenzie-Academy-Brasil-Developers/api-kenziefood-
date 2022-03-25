import { Usuario } from "./models/cadastro.js";
import { Modal } from "./models/modals.js";
import { Carrinho } from "./models/carrinho.js";
import { Vitrine } from "./models/vitrine.js";
import { BuscandoProduto } from "./models/pesquisarProduto.js";
import { Api } from "./models/Api.js";
import { PegarFormulario } from "./models/PegarFormulario.js";


//VITRINE PRINCIPAL
const produtosVitrine = await Api.pegarProdutosPublico()
const ulVitrine = document.querySelector('.main__vitrine__produtos ul')
Vitrine.montarVitrineProdutos(produtosVitrine, ulVitrine)

//carrinho localStorage
const ul = document.querySelector(".section__carrinhoUl")
Carrinho.templateCarrinho(Carrinho.carrinhoProdutos)

// filtro produtos barra pesquisa
BuscandoProduto.filtroBusca()

//modal de cadastro

const formCadastro = document.querySelector(".modal__cadastroForm");
// const botaoEnviarCadastro = document.getElementById('btn__enviar__cadastro')
formCadastro.addEventListener("submit", Usuario.CadastroNovoUsuario)

const modalBtnRegistro = document.querySelector('.btn__registro')
modalBtnRegistro.addEventListener('click', Modal.modalLoginTransicao)

const botaoCadastro = document.getElementById("btn__cadastro")
botaoCadastro.addEventListener("click", Modal.loginAuto.bind(Modal))

const botaoRemoverModallogin = document.querySelector(".btn__sair__modal__login")
botaoRemoverModallogin.addEventListener("click", Modal.modalLoginSair)

const botaoRemoverModalcadastro = document.querySelector(".btn__sair__modal__cadastro")
botaoRemoverModalcadastro.addEventListener("click", Modal.modalCadastro)

//pegar formulario login
const form = document.querySelector('form')
form.addEventListener('submit', PegarFormulario.gerarData.bind(PegarFormulario))

//modal filtros
const botaoFiltro = document.querySelector('.button__filtroTodos')
botaoFiltro.addEventListener('click', Modal.filtroTodos)

const botaoPanificadora = document.querySelector('.button__filtroPanificadora')
botaoPanificadora.addEventListener('click', Modal.filtroPanificadora)

const botaoFrutas = document.querySelector('.button__filtroFrutas')
botaoFrutas.addEventListener('click',Modal.filtroFrutas)

const botaoBebidas = document.querySelector('.button__filtroBebidas')
botaoBebidas.addEventListener('click',Modal.filtroBebidas)


//modal do carrinho
const botaoAbrirCarrinho = document.querySelector(".section__carrinhoAbrir");
botaoAbrirCarrinho.addEventListener("click", Modal.modalCarrinho);

const botaoFecharCarrinho = document.querySelector(".section__carrinhoFechar");
botaoFecharCarrinho.addEventListener("click", Modal.modalCarrinhoFechar)

// Carrinho.excluir()
const carrinhoUl = document.querySelector(".section__carrinhoUl");
carrinhoUl.addEventListener("click", Carrinho.interceptarEventoExcluirProduto)

//Carrinho.incluir()
const vitrineUl = document.querySelector('.main__vitrine__produtos ul')
vitrineUl.addEventListener("click", Carrinho.interceptarEventoCompra)