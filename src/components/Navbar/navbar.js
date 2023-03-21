import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry } from '@fortawesome/free-regular-svg-icons';
import './navbar.css'
function Navbar({setShow,size}) {
    return ( 
        <nav>
            <div className="nav-box">
                <span className="my_shop" onClick={()=>setShow(true)}>My Shop</span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span >
                    <FontAwesomeIcon className='icon' icon={faFaceAngry}/>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;