import { Col, Row, Container } from 'react-bootstrap';

import product_img_1 from '../assets/images/product_img_1.svg';
import product_img_2 from '../assets/images/product_img_2.svg';
import product_img_3 from '../assets/images/product_img_3.svg';
import arrow_shape_1 from '../assets/images/arrow_shape_1.svg';
import arrow_shape_2 from '../assets/images/arrow_shape_2.svg';
import arrow_shape_3 from '../assets/images/arrow_shape_3.svg';
import product_shape_left from '../assets/images/product_left_shape.svg';
import product_shape_right from '../assets/images/product_right_shape.svg';


function Products(){
    return(
        <>
            <div className="products_section">
                <Container>
                    <div className="common_section_title">
                        <h3>Products</h3>
                    </div>
                    <div className="products_block">
                        <div className="products_row product_box_1">
                            <div className="product_content">
                                <a href=''>
                                    <h3>Games</h3>
                                    <p>Fun innovate games</p>
                                    <span>Coming Soon...</span>
                                </a>
                            </div>
                            <div className="product_image">
                                <a href=''><img src={product_img_1} alt="img" /></a>
                            </div>
                            <div className="pc_srrow_shape">
                                <img src={arrow_shape_1} alt="img" />
                            </div>
                        </div>
                        <div className="products_row product_box_2">
                            <div className="product_image">
                                <a href=''><img src={product_img_2} alt="img" /></a>
                            </div>
                            <div className="product_content">
                                <a href=''>
                                    <h3>MarketPlace</h3>
                                    <p>NFT marketplace for user’s to manage their digital assets</p>
                                    <span>Coming Soon...</span>
                                </a>
                            </div>
                            <div className="pc_srrow_shape">
                                <img src={arrow_shape_2} alt="img" />
                            </div>
                        </div>
                        <div className="products_row product_box_3">
                            <div className="product_content">
                                <a href=''>
                                    <h3>Den</h3>
                                    <p>A launchpad for promising blockchain games. Build, fundraise and grow.</p>
                                    <span>Coming Soon...</span>
                                </a>
                            </div>
                            <div className="product_image">
                                <a href=''>
                                    <img src={product_img_3} alt="img" />
                                </a>
                            </div>
                            <div className="pc_srrow_shape">
                                <img src={arrow_shape_3} alt="img" />
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="product_shape_left">
                    <img src={product_shape_left} alt="shape" />
                </div>   
                <div className="product_shape_right">
                    <img src={product_shape_right} alt="shape" />
                </div>                       
            </div>
        </>
    )
}

export default Products;