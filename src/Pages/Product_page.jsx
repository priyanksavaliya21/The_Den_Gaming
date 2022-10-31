import React from 'react';
import { Link } from 'react-router-dom';
import Products from "../Compoment/Products";
import {Container } from 'react-bootstrap';

const Product_Page = () =>{
    
    return(
        <>
            <div className="main-content product_page_content">
                <div className="common_inner_banner">
                    <Container>
                        <ul>
                            <li><Link to="/"> Home</Link></li>
                            <li>Products</li>
                        </ul>
                    </Container>
                </div>
                
                <Products />

            </div>
        </>
    );
}

export default Product_Page;