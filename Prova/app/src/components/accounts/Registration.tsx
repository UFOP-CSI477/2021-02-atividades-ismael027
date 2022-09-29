import { api } from "../../services/api";


export function Registration() {
    function createUser() {
        const email = document.getElementById('email')?.value;
        const name = document.getElementById('name')?.value;
        const password = document.getElementById('password')?.value;

        try {
          api.post('/user/create', {
            email,
            password, 
            name
        }).then(response => {
            document.location = '/';
        })
        } catch (error) {
          console.log(error);
        }
        
    }

    return (
        <div className="container login">
            <h1>Cadastro</h1>
            <input type="text" id="name" name="name" placeholder="Nome" />
            <input type="text" id="email" name="email" placeholder="Email" />
            <input type="password" id="password" name="password" placeholder="Senha" />
            <button onClick={createUser} className="buttonLogin">Cadastrar</button>
        </div>
    )
}