import { Link, Navigate  } from "react-router-dom";
import { api } from "../../services/api";

export function Login() {
    const token = localStorage.getItem('token');

    function login() {
        const email = document.getElementById('email')?.value;
        const password = document.getElementById('password')?.value;

        api.post('/user/sessions', {
            email,
            password
        }).then(response => {
            localStorage.setItem("token", response.data.token);
            document.location = '/'
        })
    }

    return (
        !token?
        <div className="container login">
            <h1>Login</h1>
            <input type="text" id="email" name="email" placeholder="Email" />
            <input type="password" id="password" name="password" placeholder="Senha" />
            <button onClick={login} className="buttonLogin">Entrar</button>
            <button className="buttonCada"><Link to="registration" className="link">Cadastrar</Link></button>
        </div>:
         <Navigate replace to="/user" />
    )
}