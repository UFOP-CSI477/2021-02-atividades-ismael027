import './styles/global.scss'
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/accounts/Login';
import { User } from './components/accounts/User';
import { Navegation } from './components/Navegation';
import { Registration } from './components/accounts/Registration';
import Items from './components/Items';
import Entidades from './components/Entidades';
import Coletas from './components/Coletas';

export function App() {
    return (
        <div className='container'>
            <Navegation />
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/user' element={<User />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/items' element={<Items />} />
                <Route path='/coletas' element={<Coletas />} />
                <Route path='/entidades' element={<Entidades />} />
            </Routes>
        </div>
    )
}