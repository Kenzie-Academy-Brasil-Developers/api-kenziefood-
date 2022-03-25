import { Api } from "./Api.js";

const novoUsuario = await Api.criarUsuario()
export class Usuario {

    static CadastroNovoUsuario(event) {

        event.preventDefault();
        const inputs = event.target;
        const usuario = {};
        
        for(let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            if(name){
                usuario[name] = value.trim();
                
            }
        }
        Api.criarUsuario(usuario)
        return usuario
        
    }
}



    