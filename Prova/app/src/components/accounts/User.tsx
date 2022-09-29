import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link, Navigate  } from "react-router-dom";

interface IUser {
    name: string;
    email: string;
}

export function User() {
    const token = localStorage.getItem('token');
    const [user, setUser] = useState<IUser>();
    
    function loadUser() {
            api.post('/user/info', {}, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(data => {
                setUser(data.data)
            }) 
    }

    function viewInputs() {
        const divInputs = document.getElementById("inputs");
        const divInfos = document.getElementById("infos");

        if (divInfos?.className === 'displayInvisible') {
            divInfos.className = 'infos';
            divInputs.className = 'displayInvisible'
        }  else {
            divInfos.className = 'displayInvisible';
            divInputs.className = 'create'
        }
    }

    function updateUser() {
        let email = document.getElementById('email')?.value
        const name = document.getElementById('name')?.value
        const password = document.getElementById('password')?.value
        if (email === user?.email) {
            email = null;
        }
        api.put('/user/update', {
            email: email ? email : null,
            name: name ? name : null,
            password: password ? password : null
        }, {
            headers: {
                'authorization': `token ${token}`
            }
        }).then(data => {
            loadUser();
            viewInputs();
        }) 
    }

    function deleteUser() {
        const deleteUserConfirmation = confirm("Deseja excluir o usuario?")

        if (deleteUserConfirmation) {
            api.post('/user/delete', {}, {
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(data => {
                localStorage.removeItem('token');
                document.location = '/';
            }) 
        } else {

        }
    }

    useEffect(() => {
        loadUser();
    }, [])

    return (
        token ?
        <div className="container">            
            <h1>Perfil</h1>

            <div id="infos" className="container">
                <p>Nome: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <button className="buttonUpdate" onClick={viewInputs}>Editar</button>
                <button className="buttonDelete" onClick={deleteUser}>Deletar</button>
            </div>
            <div id="inputs" className="displayInvisible">
                <input type="text" name="name" id="name" placeholder="Nome" defaultValue={user?.name}/>
                <input type="text" name="email" id="email" placeholder="Email" defaultValue={user?.email}/>
                <input type="password" name="password" id="passoword" placeholder="Senha" defaultValue=''/>
                <button className="buttonCreate" onClick={updateUser}>Salvar</button>
                <button className="buttonDelete" onClick={viewInputs}>Cancelar</button>
            </div>
            
        </div> :
       <Navigate replace to="/login" />
    )
}