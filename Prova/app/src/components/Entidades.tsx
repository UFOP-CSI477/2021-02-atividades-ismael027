
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface IEntidades {
    name: string;
    bairro: string;
    cidade: string;
    estado: string;
    id: string;
}

export default function Entidades () {
    const token = localStorage.getItem('token');
    const [cadastrar, setCadastrar] = useState(false);
    const [entidades, setEntidades] = useState<IEntidades[]>([]);
    const [update, setUpdate] = useState('');

    function loadEntidades() {
        api.get('/entitie/list').then(response => {
            setEntidades(response.data);
        })
    }

    function createEntidade() {
        if (token) {
            const name = document.getElementById('nome')?.value;
            const bairro = document.getElementById('bairro')?.value;
            const cidade = document.getElementById('cidade')?.value;
            const estado = document.getElementById('estado')?.value;

            api.post('/entitie/create', {
                name,
                bairro,
                cidade,
                estado
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                setCadastrar(!cadastrar);
                loadEntidades();
            })
        } else {
            alert("Faça o login")
        } 
    }

    function deleteEntidade(id: string) {
        if (token) {
            api.post('/entitie/delete', {
                id
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadEntidades()
            })
        } else {
            alert("Faça o login")
        }
    }

    function updateEntidade (id: string) {
        if (token) {
            const name = document.getElementById(`nome-${id}`)?.value;
            const bairro = document.getElementById(`bairro-${id}`)?.value;
            const cidade = document.getElementById(`cidade-${id}`)?.value;
            const estado = document.getElementById(`estado-${id}`)?.value;

            api.put('entitie/update', {
                id,
                name,
                bairro,
                cidade,
                estado
            }, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                setCadastrar(!cadastrar);
                loadEntidades();
                setUpdate('')
            })
        } else {
            alert("Faça o login")
        }
    }

    useEffect(() => {
        loadEntidades()
    }, [])

    return (
        <div>
            <h1>Entidades</h1>
            {token && !cadastrar &&  (<button onClick={() => setCadastrar(!cadastrar)} className="buttonCreate">Cadastrar</button>)}
            { cadastrar &&
                <div className="container login">
                    <input type="text" id="nome" placeholder="Nome"/>
                    <input type="text" id="bairro" placeholder="Bairro"/>
                    <input type="text" id="cidade" placeholder="Cidade"/>
                    <input type="text" id="estado" placeholder="Estado"/>
                    <button className="buttonCreate" onClick={createEntidade}>Salvar</button>
                    <button onClick={() => setCadastrar(!cadastrar)} className="buttonDelete">Cancelar</button>
                </div>
            }
            <div>
                <h1>Cadastradas</h1>
                    {
                        entidades.map(entidade => (
                            <div className="containerList" id={entidade.id}>
                                <p>Nome: {entidade.name}</p>
                                <p>Bairro: {entidade.bairro}</p>
                                <p>Cidade: {entidade.cidade}</p>
                                <p>Estado: {entidade.estado}</p>
                                {token && (<button className="buttonDeleteInput" onClick={() => {deleteEntidade(entidade.id)}}>Deletar</button>)}
                                {token && update !== entidade.id && <button className="buttonUpdateInput" onClick={() => setUpdate(entidade.id)}>Editar</button>}
                                { update === entidade.id &&
                                    <div className="container login">
                                        <input type="text" id={`nome-${entidade.id}`} placeholder="Nome" defaultValue={entidade.name}/>
                                        <input type="text" id={`bairro-${entidade.id}`} placeholder="Bairro" defaultValue={entidade.bairro}/>
                                        <input type="text" id={`cidade-${entidade.id}`} placeholder="Cidade" defaultValue={entidade.cidade}/>
                                        <input type="text" id={`estado-${entidade.id}`} placeholder="Estado" defaultValue={entidade.estado}/>
                                        <button className="buttonCreate" onClick={() => {updateEntidade(entidade.id)}}>Salvar</button>
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