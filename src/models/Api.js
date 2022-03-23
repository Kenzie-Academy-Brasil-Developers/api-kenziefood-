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
      .then((res) => res)
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
        const token = resposta

        window.localStorage.clear()
        window.localStorage.setItem('token', token)
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
      "https://api-blog-m2.herokuapp.com/my/products",
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

  static async atualizarProduto(data, idProduto) {
    const resposta = await fetch(
      `https://kenzie-food-api.herokuapp.com/my/products${idProduto}`,
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