import { Api } from "./models/Api.js";
import { ModalADM } from "./models/modalADM.js";
import { PegarFormulario } from "./models/PegarFormulario.js";


import { VitrineAdm } from "./models/vitrineAdm.js";
const vitrine = document.querySelector(".vitrine__produtosTemplate");
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

const form = document.querySelector('form')
form.addEventListener('submit', PegarFormulario.gerarData)
//vitrine editar produto
const arrayProdutosNosso = await Api.pegarMeusProdutos()


VitrineAdm.vitrineProdutos(arrayProdutosNosso, vitrine);
const botaoEditar = document.querySelector(".vitrine__produtosTemplate");
botaoEditar.addEventListener("click", ModalADM.interceptarEventoExcluirProduto);

const botaoEditarFechar = document.querySelector(".modal__alterarProdutoFechar");
botaoEditarFechar.addEventListener("click", ModalADM.fecharEditarProdutoApiModal)

//vitrine excluir produto
const botaoExcluirProduto = document.querySelector(".vitrine__produtosTemplate");
botaoExcluirProduto.addEventListener("click", ModalADM.interceptarEventoExcluirProduto);

const botaoExcluirProdutoFechar = document.querySelector(".modal__excluirProdutoBotao");
botaoExcluirProdutoFechar.addEventListener("click", ModalADM.excluirProdutoAbrirFechar);

