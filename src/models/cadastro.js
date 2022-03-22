
export class Usuario {

    static usuarioCadastrado(event) {
        
        event.preventDefault();
        const inputs = event.target;
        const usuario = {};
        
        for(let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            if(name){
                usuario[name] = value.trim();
            }
        }
        return usuario
    }

}