import { ModalADM } from "./models/modalADM.js";

const botaoFiltro = document.querySelector('.button__filtroTodos')
botaoFiltro.addEventListener('click', ModalADM.filtroTodosADM)

const botaoPanificadora = document.querySelector('.button__filtroPanificadora')
botaoPanificadora.addEventListener('click', ModalADM.filtroPanificadoraADM)

const botaoFrutas = document.querySelector('.button__filtroFrutas')
botaoFrutas.addEventListener('click',ModalADM.filtroFrutasADM)

const botaoBebidas = document.querySelector('.button__filtroBebidas')
botaoBebidas.addEventListener('click',ModalADM.filtroBebidasADM)

const botaoAdicionarProduto = document.querySelector('.button__cadastrarNovoProduto')
botaoAdicionarProduto.addEventListener('click',ModalADM.abrirAdicionarProdutoModal)

const botaoFecharCadastro = document.querySelector('.section__fecharmodal')
botaoFecharCadastro.addEventListener('click',ModalADM.fecharAdicionarProdutoModal)