const categorias = [
    {
        "idCategoria": 1,
        "Descricao": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descricao": "Cliente",
    },
    {
        "idCategoria": 3,
        "Descricao": "RP",
    },
]
const motivos=[
    {
        "idMotivo": 1,
        "Descricao": "Planejamento",
        "idCategoria": 1
    },
    {
        "idMotivo": 2,
        "Descricao": "Financeiro",
        "idCategoria": 1
    },
    {
        "idMotivo": 3,
        "Descricao": "Quebra de Máquina",
        "idCategoria": 2
    }
]


const produtos=[
    {
        "idProduto": 1,
        "Descricao": "Uva",
        "Estoque": 10,
        "EstoqueMinimo": 5,
        "Unidade":'Pç',
        "Valor": 10,
    },
    {
        "idProduto": 2,
        "Descricao": "Morando",
        "Estoque": 5,
        "EstoqueMinimo": 5,
        "Unidade":'Pç',
        "Valor": 20,
    },
]



const departamentos = [
    {
        "idDep": 1,
        "Descricao": "Sec. Educação",
        "Responsavel": "José"
    },
    {
        "idDep": 2,
        "Descricao": "Sec. Trabalho",
        "Responsavel": "Menino Feio"
    },
    {
        "idDep": 3,
        "Descricao": "NAT",
        "Responsavel": "Joana Like"
    }
]

const funcionarios = [
    {
        "idFuncionario": 1,
        "Nome": "Pedro",
        "Cargo": "Atendente"
    },
    {
        "idFuncionario": 2,
        "Nome": "Taina",
        "Cargo": "Supervisora"
    },
    {
        "idFuncionario": 3,
        "Nome": "Milena",
        "Cargo": "Diretora"
    }
]