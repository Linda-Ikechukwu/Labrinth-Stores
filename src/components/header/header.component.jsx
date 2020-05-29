import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss'


const Header = ({currentUser, hidden}) =>(
    <div className='header'>
        <Link to='/'>
           <img src='../../../assets/logo.png' className='logo' alt='Labrinth Clothing Logo'></img>
        </Link>
        <div className='header_links'>

            { (currentUser) ? <div className='header_user'>Hi Diva, {currentUser.displayName}</div> : <div></div>}
            
            <Link className='header_link' to='/shop'>
                SHOP
            </Link>
            <Link className='header_link' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                (<div className="header_link" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>)
                :
                (
                    <Link className='header_link' to='/signup'>
                        SIGN IN
                    </Link>  
                )
            }
            
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
        
    </div>
)

//To access root reducer 
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
   currentUser,
   hidden
});

export default connect(mapStateToProps)(Header);