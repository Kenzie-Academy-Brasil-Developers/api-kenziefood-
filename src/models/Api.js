

export class Api {
  static async createUser(data) {
    const response = await fetch(
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

    return response;
  }

  static async login(data) {
    const response = await fetch(
      "https://kenzie-food-api.herokuapp.com/auth/login",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data), 
      })
      .then((res) => res.json())
      .then((response) => {

        const token = response

        window.localStorage.clear()

        window.localStorage.setItem('token', response)
        // window.localStorage.setItem('userId', userId)

      })
      .catch((error) => error);
  
      ;
  }

  static token = localStorage.getItem('token')
  static userId = localStorage.getItem('userId')

  static async getPublic() {
    const response = await fetch(`https://kenzie-food-api.herokuapp.com/products`)
      .then(res => res.json())
      .then(res => res)

    return console.log(response)
  }




}