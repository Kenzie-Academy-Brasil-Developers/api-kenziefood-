import { Api } from "./Api.js"
import { ModalADM } from "./modalADM.js"


const form = document.querySelector('form')
// No script.js do arquivo da pagina, é necessário que haja um addEventListener ->>
// ex: const form = document.querySelector('form') ->>
// ex: form.addEventListener('submit', PegarFormulario.gerarData.bind(PegarFormulario)) ->>
// Assim, ao clicar no botão do FORM (no qual só deve ter um botão) ->>
// Será enviado para esta função para direcionar as informações daquele FORM ->>
//              ||||||||     
//              vvvvvvvv     

export class PegarFormulario {
  static gerarData(event) {
    event.preventDefault()
    
    const data = {}

    for (let i = 0; i < event.target.length; i++){
      if(event.target[i].name) { // caso haja um name no input
        data[event.target[i].name] = event.target[i].value
        // Aqui que a mágica acontece
        // Ao percorrer o form, ele gera um index com o valor do input.name, com o valor do input.value
        // Assim, aos preencher o formulario e clicar no botão, as infos estão prontas para serem direcionadas
      }
    }

    // Exemplo de direcionamento do objeto 
    if(form.id === "form__cadastro" || form.id === "formCadastro"){
      console.log(data)
      Api.criarUsuario(data)
    } else if (form.id === "modal__loginForm") {
      console.log(data)
      Api.login(data)
    }
    else if(form.id === "form__cadastroProduto"){
      console.log(data)
      Api.criarProduto(data)
      ModalADM.modalCadastrodeProduto()
    }
  }

}