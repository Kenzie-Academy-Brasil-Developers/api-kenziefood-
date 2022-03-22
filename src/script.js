import { Usuario } from "./models/cadastro.js";
import { Modal } from "./models/modals.js";


//pegando dados do form de cadastro
const formCadastro = document.querySelector(".modal__cadastroForm");
formCadastro.addEventListener("submit", Usuario.usuarioCadastrado);

//modal de cadastro
const botaoCadastro = document.getElementById("btn__cadastro");
botaoCadastro.addEventListener("click", Modal.modalCadastro);
const botaoRemoverModal = document.querySelector(".modal__cadastroButton");
botaoRemoverModal.addEventListener("click", Modal.modalCadastro);



