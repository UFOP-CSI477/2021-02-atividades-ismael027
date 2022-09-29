import { Link } from "react-router-dom";

export function Navegation() {
    return (
        <div className="navegation">
            <div>
                <Link to="/coletas" className="buttonNav">Coletas</Link>
            </div>
            <div>
                <Link to="/entidades" className="buttonNav">Entidades</Link>
            </div>
            <div>
                <Link to="/items" className="buttonNav">Items</Link>
            </div>
            <div>
                <Link to="/user" className="buttonNav">Usuario</Link>
            </div>
            <div>
                <Link onClick={() => {localStorage.removeItem('token')}} to="/" className="buttonNav">SAIR</Link>
            </div>
        </div>
    )
}