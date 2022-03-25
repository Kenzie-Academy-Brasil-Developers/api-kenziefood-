import { Api } from "./Api.js"
import { ModalADM } from "./modalADM.js"

const form = document.querySelector('form')
export class PegarFormulario {
  static gerarData(event) {
    event.preventDefault()
    const inputs = event.target
    
    const data = {}

    for (let i = 0; i < inputs.length; i++){
      if(inputs[i].name) {
        data[inputs[i].name] = inputs[i].value
      }
    }
    console.log(data)
    
    if(form.id === "form__cadastro" || form.id === "formCadastro"){
      console.log(data)
      Api.criarUsuario(data)
    } else if (form.id === "modal__loginForm") {
      // console.log(data)
      Api.login(data)
    }
    else if(form.id === "form__cadastroProduto"){
      console.log(data)
      Api.criarProduto(data)
    }else if(form.id === "form__editarProduto"){
      console.log(ModalADM.idProdutoEdicao.bind(ModalADM))
      Api.atualizarProduto(data, ModalADM.idProdutoEdicao)

    }

    
  }

}