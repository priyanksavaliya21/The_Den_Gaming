import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Logo from '../assets/images/logo.png';


const Header = () => {
  
    const[menu_trigger,setclass] = useState(true)

    const toggle_menu = () =>{
        var x = window.matchMedia("(max-width: 767px)");
        if (x.matches) {
            let html_block = document.querySelector('html');
            if(menu_trigger) {
                html_block.classList.add('cm_overflow');
                setclass(false)
            } else {
                html_block.classList.remove('cm_overflow');
                setclass(true)
            }
        }
    }


    
    
    return(
        <>
        <div className='header_wrap'>
            <header >
                <Container>
                    <div className='header_block'>
                        <div className="logo_hold">
                            <Link to="/"><img src={Logo} alt="image"/></Link>
                        </div>

                        <div className="menu_block">
                            <ul>
                                <li><NavLink onClick={toggle_menu} to="/">Home</NavLink></li>
                                <li><NavLink onClick={toggle_menu} to="/product">Products</NavLink></li>
                                <li><NavLink onClick={toggle_menu} to="/team">Team</NavLink></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><NavLink onClick={toggle_menu} to="/Contect">Contact</NavLink></li>
                                {/* <li><NavLink onClick={toggle_menu} to="/thanks">thank</NavLink></li> */}
                            </ul>
                        </div>

                        <div className="menu_hamburger_toggle" onClick={toggle_menu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
        </>
    );
}


export default Header;