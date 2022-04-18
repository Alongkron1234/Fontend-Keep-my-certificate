import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar=()=> {
    return (
        <nav>
            <h2>Ball's-certificate</h2>
            <ul>
                <li><Link to={'/'}>certificate</Link></li>
                <li className='btn-signin'><Link to={'/form'}>Add</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar;