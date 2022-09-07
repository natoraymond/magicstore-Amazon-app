import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Link } from 'react-router-dom'  
import { useStateValue } from "../StateProvider";
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    const [{ basket }, dispatch] = useStateValue();

  return (


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Col>
                <Link to='/'>
                    <img className='header__logo'
                        src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?   fit=2560%2C1578&ssl=1'
                        alt='header logo'
                        /> 
                </Link>
            </Col>

            <Col xs={7}>
                <form class="form-inline my-2 my-lg-0 ">
                    <input class="form-control mr-sm-8" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
            </Col>
            
            <Col xs={4} xl={4} md={4}>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link to='/login'>
                            <div className='header__option'>
                                <span className='header__optionLineOne'>Hello</span>
                                <span className='header__optionLineTwo'>Sign In</span>
                            </div>
                        </Link>      
                    </li>

                    <li class="nav-item">
                        <div className='header__option'>
                            <span className='header__optionLineOne'>Returns</span>
                            <span className='header__optionLineTwo'>& Orders</span>
                        </div>
                    </li> 

                    <li class="nav-item">
                        <div className='header__option'>
                            <span className='header__optionLineOne'>Your</span>
                            <span className='header__optionLineTwo'>Prime</span>
                        </div>
                    </li> 
                    <li class="nav-item">
                        <Link to='/checkout'>
                            <div className="header__optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header__optionLineTwo header__basketCount">
                                    {basket?.length}
                                </span>
                            </div>
                        </Link>
                    </li>            
                </ul>    
            </Col>        
        </div>
    </nav>
    

    // <Container>
    //     <Row className="bg-dark">
    //         <Col>
    //             <Link to='/'>
    //                 <img className='header__logo'
    //                     src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?   fit=2560%2C1578&ssl=1'
    //                     alt='header logo'
    //                 /> 
    //             </Link>
    //         </Col>
            
    //         <Col>
    //             <div className='header__search'>
    //                 <input  className='header__searchInput' type="text"/>
    //                     <SearchIcon className='header__searchIcon' 
    //                 />
    //             </div> 
    //         </Col>
            
    //         <Col>
    //             <div className='header__nav'>
    //                 <Link to='/login'>
    //                     <div className='header__option'>
    //                         <span className='header__optionLineOne'>Hello</span>
    //                         <span className='header__optionLineTwo'>Sign In</span>
    //                     </div>
    //                 </Link>                

    //                 <div className='header__option'>
    //                     <span className='header__optionLineOne'>Returns</span>
    //                     <span className='header__optionLineTwo'>& Orders</span>
    //                 </div>

                    // <div className='header__option'>
                    //     <span className='header__optionLineOne'>Your</span>
                    //     <span className='header__optionLineTwo'>Prime</span>
                    // </div>

                    // <Link to='/checkout'>
                    //     <div className="header__optionBasket">
                    //         <ShoppingBasketIcon />
                    //         <span className="header__optionLineTwo header__basketCount">
                    //             {basket?.length}
                    //         </span>
                    //     </div>
                    // </Link>
    //             </div> 
    //         </Col>   
    //     </Row> 
    // </Container>   
  )
}
