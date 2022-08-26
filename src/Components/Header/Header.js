import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Link } from 'react-router-dom'  
import { useStateValue } from "../StateProvider";

export default function Header() {
    const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header__logo'
                src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1'
                alt='header logo'
            /> 
        </Link>   

        <div className='header__search'>
            <input  className='header__searchInput' type="text"/>
            <SearchIcon className='header__searchIcon' />
        </div> 

        <div className='header__nav'>
            <Link to='/login'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>

            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>

        </div>
    </div> 
  )
}
