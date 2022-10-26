import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            <ul className='list'>
                <li className='item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='item'>
                    <Link className='nav-link' to='/GroupedTeams'>Grouped Teams</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav