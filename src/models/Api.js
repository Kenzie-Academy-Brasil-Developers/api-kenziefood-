export class Api {
  static async criarUsuario(data) {
    
    const resposta = await fetch(
      "https://kenzie-food-api.herokuapp.com/auth/register",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((res) => {
        const modalCadastro = document.querySelector('.modal__cadastro')
        modalCadastro.style.display = "none"
      })
      .catch((error) => error);

    return resposta;
  }

  static async login(data) {
    const resposta = await fetch(
      "https://kenzie-food-api.herokuapp.com/auth/login",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((resposta) => {
        if (typeof resposta === 'string') {
          const token = resposta
          console.log(token)

          window.localStorage.removeItem('token')
          window.localStorage.setItem('token', token)

          window.location.href = '/src/pages/admin.html'
        }

      })
      .catch((error) => error);
  
      ;
  }

  static token = localStorage.getItem('token')

  static async pegarProdutosPublico() {
    const resposta = await fetch(`https://kenzie-food-api.herokuapp.com/products`)
      .then(res => res.json())
      .then(res => res)

      return resposta
  }

  static async pegarMeusProdutos () {
    const resposta = await fetch(
      "https://kenzie-food-api.herokuapp.com/my/products",
      {
        method: "GET", 
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${Api.token}` 
        }
      })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    return resposta;
  }

  static async criarProduto(data) {
    const resposta = await fetch(
      "https://kenzie-food-api.herokuapp.com/my/products",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${Api.token}` 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((res) => {
        const statusConfirmado = document.querySelector('.section__statusConfirmado')
        statusConfirmado.style.display = 'flex'
      })
      .catch((error) => {
        const statusNegado = document.querySelector('.section__statusRecusado')
        statusNegado.style.display = 'flex'
        return error
      });
    return resposta;
  }

  static async atualizarProduto(data, idProduto) {
    const resposta = await fetch(
      `https://kenzie-food-api.herokuapp.com/my/products/${idProduto}`,
      {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${Api.token}` 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    return resposta;
  }

  static async deletarMeuProduto(idProduto) {
    const resposta = await fetch(
      `https://kenzie-food-api.herokuapp.com/my/products/:${idPost}`,
      {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${Api.token}` 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    return resposta;
  }

  static async meuCarrinho () {
      const resposta = await fetch(
        "https://kenzie-food-api.herokuapp.com/cart",
        {
          method: "GET", 
          headers: {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${Api.token}` 
          }
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);
      return resposta;
  }

  static async colocarProdutoCarrinho (data) {
    const resposta = await fetch(
      "https://kenzie-food-api.herokuapp.com/cart",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${Api.token}` 
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    return resposta;
  }

  static async removerProdutoCarrinho(idProduto) {
    const resposta = await fetch(
      `https://kenzie-food-api.herokuapp.com/cart/remove/:${idProduto}`,
      {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${Api.token}` 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    return resposta;
  }

}