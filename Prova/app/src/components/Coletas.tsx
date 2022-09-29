import { useEffect, useState } from "react";
import { api } from "../services/api";

interface IItems {
    descricao: string;
    id: string;
}

interface IEntidades {
    name: string;
    id: string;
}

interface IColetas {
    id: string;
    item_id: string;
    entidade_id: string;
    quantidade: number;
    data: Date;
}

export default function Coletas () {
    const token = localStorage.getItem('token');
    const [cadastrar, setCadastrar] = useState(false);
    const [update, setUpdate] = useState('');
    const [items, setItems] = useState<IItems[]>([]);
    const [entidades, setEntidades] = useState<IEntidades[]>([]);
    const [coletas, setColetas] = useState<IColetas[]>([]);

    function createColeta() {
        if (token) {
            const data = document.getElementById('data')?.value;
            const item_id = document.getElementById('item')?.value;
            const quantidade = document.getElementById('quantidade')?.value;
            const entidade_id = document.getElementById('entidade')?.value;

            api.post('/colect/create', {
                data,
                item_id,
                quantidade,
                entidade_id,
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

    function loadItemEntidades() {
        api.get('/entitie/list').then(response => {
            setEntidades(response.data);
        })
        api.get('/items/list').then(response => {
            setItems(response.data);
        })
        api.get('/colect/list').then(response => {
            setColetas(response.data);
        })
    }

    function deleteColeta(id: string) {
        if (token) {
            api.post('colect/delete', {
                id
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadItemEntidades();
            })
        } else {
            alert("Faça o login")
        }
    }

    function updateColeta (id: string) {
        if (token) {
            const data = document.getElementById(`data-${id}`)?.value;
            const item_id = document.getElementById(`item-${id}`)?.value;
            const quantidade = document.getElementById(`quantidade-${id}`)?.value;
            const entidade_id = document.getElementById(`entidade-${id}`)?.value;

            console.log(quantidade);

            api.put('colect/upload', {
                id,
                data,
                item_id,
                quantidade: parseFloat(quantidade),
                entidade_id,
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadItemEntidades();
                setUpdate('');
            })
        } else {
            alert("Faça o login")
        }
    }


    useEffect(()=>{
        loadItemEntidades();

    }, [cadastrar])

    return (
        <div>
            <h1>Coletas</h1>
            {token && !cadastrar &&  (<button onClick={() => setCadastrar(!cadastrar)} className="buttonCreate">Cadastrar</button>)}
            { cadastrar &&
                <div className="container login">
                    <input type="date" id="data" placeholder="Data"/>
                    <select name="item" id="item">
                        <option value="" disabled>Item</option>
                        {items.map(item => 
                            <option value={item.id}>{item.descricao}</option>
                        )}
                    </select>
                    <input type="text" id="quantidade" placeholder="Quantidade"/>
                    <select name="entidade" id="entidade">
                        <option value="" disabled>Entidade</option>
                        {entidades.map(entidade => 
                            <option value={entidade.id}>{entidade.name}</option>
                        )}
                    </select>
                    <button className="buttonCreate" onClick={createColeta}>Salvar</button>
                    <button onClick={() => setCadastrar(!cadastrar)} className="buttonDelete">Cancelar</button>
                </div>
            }
            <div>
            <h1>Cadastradas</h1>
            {
                coletas.map(coleta => (
                    <div className="containerList" id={coleta.id}>
                        <p>Entidade: {entidades.map(entidade => { if(entidade.id === coleta.entidade_id) {return entidade.name}})}</p>
                        <p>Item: {items.map(items => { if(items.id === coleta.item_id) {return items.descricao}})}</p>
                        <p>Quantidade: {coleta.quantidade}</p>
                        <p>Data: {`${coleta.data}`}</p>
                        {token && (<button className="buttonDeleteInput" onClick={() => deleteColeta(coleta.id)}>Deletar</button>)}
                        { token && update !== coleta.id && <button className="buttonUpdateInput" onClick={() => setUpdate(coleta.id)}>Editar</button>}
                        {
                            update === coleta.id && 
                            <div className="container login">
                                <input type="date" id={`data-${coleta.id}`} placeholder="Data" defaultValue={coleta.data}/>
                                <select name="item" id={`item-${coleta.id}`} defaultValue={coleta.item_id}>
                                    <option value="" disabled>Item</option>
                                    {items.map(item => 
                                        <option value={item.id}>{item.descricao}</option>
                                    )}
                                </select>
                                <input type="text" id={`quantidade-${coleta.id}`} placeholder="Quantidade" defaultValue={coleta.quantidade}/>
                                <select name="entidade" id={`entidade-${coleta.id}`} defaultValue={coleta.entidade_id}>
                                    <option value="" disabled>Entidade</option>
                                    {entidades.map(entidade => 
                                        <option value={entidade.id}>{entidade.name}</option>
                                    )}
                                </select>
                                <button className="buttonCreate" onClick={() => {updateColeta(coleta.id)}}>Salvar</button>
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