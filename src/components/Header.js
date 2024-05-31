import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StateContext } from '../context/AppProvider'

function Header() {
    const { cart_count } = useContext(StateContext);
    return (
        <header className='navbar flex flex-center flex-between'>
            {/* <a href="#" className='logo'>Food Diary</a> */}
            <Link to="/" className='logo'>Food Diary</Link>
            <nav className='flex-end'>
                <ul className='flex'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites
                            {cart_count>0  && <span className='cart-count'>{cart_count}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header