

# API-KenzieFood

Nesse trabalho vocês terão que consumir uma API de produtos.

## Rotas

## Criação de usuario

### POST `/auth/register`

### Regras:
- `name` e `password`: precisam ser strings.
- `email`: precisa ser uma string do tipo URL.

```json
{
	"name": "Kenzinho",
	"email": "kenzinho@gmail.com",
	"password": "1234"
}
```
### Resposta: Status 201 Created
```json
{
	"id": 1,
	"name": "Kenzinho",
	"email": "kenzinho@gmail.com",
	"password": "2asd5sa55asdasd4s1d5ads14sd@sda5sd1#sd41as5d", // Criptografado
	"updatedAt": "2022-03-17T21:14:23.987Z",
	"createdAt": "2022-03-17T21:14:23.987Z"
}
```
---
## Autenticação de usuario

### POST `/auth/login`

### Regras:
- `password`: precisam ser strings.
- `email`: precisa ser uma string do tipo URL.

```json
{
	"email": "kenzinho@gmail.com",
	"password": "1234"
}
```
### Resposta: Status 200 OK
```json
"as4sda54asd4as4d5sdasd55asd565as5da5sd5as51da51sd5a5s6d.asd65asdasd5as5d4@as5d5as6d5asd564a65sd65asd54a2sd1ad54as65d1a"

//Token de validação
```

---------------

## Rota publica

### GET `/products`

### Resposta: Status 200

```json
[
	{
		"id": 1,
		"nome": "Mousse de morango com a fruta",
		"preco": 27.5,
		"categoria": "Frutas",
		"descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
		"createdAt": "2022-01-24T16:25:25.401Z",
		"updatedAt": "2022-01-24T16:25:25.401Z"
	},
	{
		"id": 2,
		"nome": "Panqueca de banana com aveia",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
		"createdAt": "2022-01-24T16:26:44.903Z",
		"updatedAt": "2022-01-24T16:26:44.903Z"
	},
	{
		"id": 3,
		"nome": "Pastel de verduras vegano",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png",
		"createdAt": "2022-01-24T16:27:32.190Z",
		"updatedAt": "2022-01-24T16:27:32.190Z"
	},
	...
```
---

## Rotas privadas

Em todas as rotas privadas são autenticadas, por isso, é necessário enviar no header o token da sua respectiva equipe. Exemplo:

```javascript
fetch("https:urlDaApi", { headers : {Authorization: "Bearer TokenDaEquipe"}} )
```

### GET `/my/products`

### Regras:
- Essa rota retorna todos os produtos que foram criados utilizando o token de sua equipe. Exemplo:

### Resposta: Status 200
```json
[
	{
		"id": 3,
		"nome": "Bolinho",
		"preco": 5,
		"categoria": "Doce",
		"imagem": "https://picsum.photos/200/300",
		"descricao" : "Lorem ipsum",
		"createdAt": "2022-01-24T14:29:37.680Z",
		"updatedAt": "2022-01-24T14:29:37.680Z"
	},
	{
		"id": 4,
		"nome": "Temaki",
		"preco": 5,
		"categoria": "Comida Japonesa",
		"imagem": "https://picsum.photos/200/300",
		"descricao" : "Lorem ipsum",
		"createdAt": "2022-01-24T14:36:34.045Z",
		"updatedAt": "2022-01-24T14:41:38.740Z"
	}
]
```
---

### POST `/my/products`
### Regras:
- `nome`, `categoria` e `descricao`: precisam ser strings.
- `preco`: deve ser um número positivo.
- `imagem`: deve ser a url de alguma imagem.

```json
{
	"nome": "Bolinho",
	"preco": 5,
	"categoria": "Doce",
	"imagem": "https://picsum.photos/200/300",
	"descricao" : "Lorem ipsum",
}
```
### Resposta: Status 201 Created
```json
{
	"id": 4,
	"nome": "Bolinho",
	"preco": 5,
	"categoria": "Doce",
	"imagem": "https://picsum.photos/200/300",
	"descricao" : "Lorem ipsum",
	"updatedAt": "2022-01-24T14:36:34.045Z",
	"createdAt": "2022-01-24T14:36:34.045Z"
}
```
---

### PATCH `/my/products/:id`
### Regras:
- `nome`, `categoria` e `descricao`: precisam ser strings.
- `preco`: deve ser um número positivo.
- `imagem`: deve ser a url de alguma imagem.
- Passar id do produto específico na url.

### Requisição:
Enviar um JSON com pelo menos uma das informações do produto a ser alterada, exemplo:

```json
{
	"nome" : "Temaki"
}
```

### Resposta: Status 202 Accepted
```json
"Produto Atualizado"
```
---

### DELETE `/my/products/:id`

### Regras:
- Essa rota não precisa de um body, apenas do id na url.
### Resposta: Status 204 No Content

---

## Rotas extras Cart

### GET `/cart`

### Regras:
- Essa rota retorna todos os produtos que foram adicionados ao carrinho utilizando o token de sua equipe. Entre duas chaves:

- `quantity`: Total do mesmo produto no carrinho
- `products`: Dados desse produto

Dessa forma:

### Resposta: Status 200
```json
[
	{
	"quantity": 1,
	"products": {
		"id": 4,
		"nome": "Bolinho",
		"preco": 5,
		"categoria": "Doce",
		"imagem": "https://picsum.photos/200/300",
		"descricao" : "Lorem ipsum",
		"updatedAt": "2022-01-24T14:36:34.045Z",
		"createdAt": "2022-01-24T14:36:34.045Z"
		}
	},
	{
	"quantity": 5,
	"products": {
		"id": 9,
		"nome": "Bolinho totoso",
		"preco": 5,
		"categoria": "Doce",
		"imagem": "https://picsum.photos/200/300",
		"descricao" : "Lorem ipsum",
		"updatedAt": "2022-01-24T14:36:34.045Z",
		"createdAt": "2022-01-24T14:36:34.045Z"
		}
	},
]
```
---
### POST `/cart`
### Regras:
- `product_id`: Deve ser um número inteiro positivo, referente ao id do produto. Obrigatorio a passagem

- `quantity`: Número inteiro positivo, referente a quantidade desse produto que será adicionado, item opcional, caso não seja passado, será adicionado uma unidade ao produto no carrinho, ou criado o mesmo com uma unidade.

```json
{
	"product_id": 5
}
```
### Resposta: Status 201 Created
```json
{	
	"id": 1,
	"quantity": 5,
	"products": {
		"id": 9,
		"nome": "Bolinho totoso",
		"preco": 5,
		"categoria": "Doce",
		"imagem": "https://picsum.photos/200/300",
		"descricao" : "Lorem ipsum",
		"updatedAt": "2022-01-24T14:36:34.045Z",
		"createdAt": "2022-01-24T14:36:34.045Z"
	}
}
```
---
### DELETE `/cart/remove/:product_id

### Regras:
- Essa rota não precisa de um body, apenas do id do produto passado na utl.

### Resposta: Status 204 No Content
