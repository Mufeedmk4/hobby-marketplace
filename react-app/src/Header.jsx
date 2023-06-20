import { useState } from 'react'
import './Header.css'

function Header (props) {
    return (
        <div className='header'>
            <div className='top-left'>
                <p>Hi <strong>{props.username}</strong>!</p>
                <a>Help & Contact</a>
                <a>My Items</a>
            </div>
            <div className='top-right'>
                <a>Sell</a>
                <a>Watchlist</a>
                <i class="fa-regular fa-bell"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default Header