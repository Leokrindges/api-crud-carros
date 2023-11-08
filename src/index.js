import express, { request, response } from 'express';
const app = express();
app.use(express.json());

const listaVeiculos = []
let idAutomatico = 1


//BUSCA VEICULOS
app.get('/', (request, response) => {
    return response.json(listaVeiculos)
})

//CRIA VEICULOS
app.post('/veiculos', (request, response) => {
    const body = request.body

    const veiculo = {
        id: idAutomatico++,
        marca: body.marca,
        modelo: body.modelo,
        ano: body.ano,
        cor: body.cor,
        preco: body.preco
    }
    listaVeiculos.push(veiculo)
    console.log(veiculo);
    return response.status(201).json("Veiculo cadastrado com sucesso!")
})

//ATUALIZA VEICULOS
app.put('/veiculos/:id', (request, response) => {
    //recebe o corpo da requisição
    const body = request.body
    const params = request.params

    //recebe indice do veiculo
    const alteraIndiceVeiculo = listaVeiculos.findIndex((veiculo) => {
        return veiculo.id === Number(params.id)
    })

    if (alteraIndiceVeiculo === -1) {
        return response.json("Veiculo não encontrado")
    } else {
        for (let i = 0; i < listaVeiculos.length; i++) {
            if (listaVeiculos[i].id == params.id) {
                listaVeiculos[i].modelo = body.modelo
                listaVeiculos[i].marca = body.marca
                listaVeiculos[i].ano = body.ano
                listaVeiculos[i].cor = body.cor
                listaVeiculos[i].preco = body.preco
                return response.json("Alterado com sucesso!!")
            }
        }
    }
})


app.delete('/veiculos/:id', (request, response) => {
    //recebe o corpo da requisição
    const params = request.params

    //recebe indice do veiculo
    const deleteIndiceVeiculo = listaVeiculos.findIndex((veiculo) => {
        return veiculo.id === Number(params.id)
    })

    delete listaVeiculos[deleteIndiceVeiculo]

    return response.json("Usuáio APAGADO com sucesso!")
})

app.listen(8080, () => console.log("Servidor iniciado"));