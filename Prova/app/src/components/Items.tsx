import { useEffect, useState } from "react"
import { api } from "../services/api";

interface IItems {
    descricao: string;
    id: string;
}

export default function Items () {
    const token = localStorage.getItem('token');
    const [cadastrar, setCadastrar] = useState(false);
    const [update, setUpdate] = useState('');
    const [items, setItems] = useState<IItems[]>([]);

    function loadItem() {
        api.get('/items/list').then(response => {
            setItems(response.data);
        })
    }

    function createItem() {
        if (token) {
            const descricao = document.getElementById('descricao')?.value;
            api.post('/items/create', {
                descricao
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                setCadastrar(!cadastrar);
            })
        } else {
            alert("Faça o login")
        }
    }

    function deleteItem(id: string) {
        if (token) {
            api.post('/items/delete', {
                id
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadItem();
            })
        } else {
            alert("Faça o login")
        }
    }

    function updateItem(id: string) {
        if ( token ) {
            const descricao = document.getElementById(`descricao-${id}`)?.value;
            api.put('/items/update', {
                descricao,
                id
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                setUpdate('')
            })
        } else {
            alert("Faça o login")
        }
    }

    useEffect(() => {
        loadItem();
    })

    return (
        <div>
            <h1>Items</h1>
            {token && !cadastrar &&  (<button onClick={() => setCadastrar(!cadastrar)} className="buttonCreate">Cadastrar</button>)}
            { cadastrar &&
                <div className="container login">
                    <input type="text" id="descricao" placeholder="Descrição"/>
                    <button className="buttonCreate" onClick={createItem}>Salvar</button>
                    <button onClick={() => setCadastrar(!cadastrar)} className="buttonDelete">Cancelar</button>
                </div>
            }
            <div>
            <h1>Cadastradas</h1>
                {
                    items.map(item => (
                        <div className="containerList" id={item.id}>
                            <p>{item.descricao}</p>
                            {token && (<button className="buttonDeleteInput" onClick={() => deleteItem(item.id)}>Deletar</button>)}
                            {token && update !== item.id && <button className="buttonUpdateInput" onClick={() => setUpdate(item.id)}>Editar</button>}
                            {
                                update === item.id &&
                                <div className="container login">
                                    <input type="text" id={`descricao-${item.id}`} placeholder="Descrição"/>
                                    <button className="buttonCreate" onClick={() => updateItem(item.id)}>Salvar</button>
                                    <button className="buttonUpdateInput" onClick={() => setUpdate('')}>Cancelar</button>
                                </div>

                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}