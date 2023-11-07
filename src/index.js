import express, { request, response } from 'express';
const app = express();
app.use(express.json());

const listaVeiculos = []


//BUSCA VEICULOS
app.get('/', (request, response) => {
    return response.json(listaVeiculos)
})

//CRIA VEICULOS
app.post('/veiculos', (request, response) => {
    const body = request.body
    listaVeiculos.push(body)
    console.log(body);
    return response.json("Veiculo cadastrado com sucesso!")
})

//ATUALIZA VEICULOS
app.put('/veiculos:id', (request, response) => {
    //recebe o corpo da requisição
    const body = request.body
    const params = params.query

})

app.listen(8080, () => console.log("Servidor iniciado"));