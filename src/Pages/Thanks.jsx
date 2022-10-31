import React from "react";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import contact_shape_left from '../assets/images/contact_left.png';
import contact_shape_right from '../assets/images/contact_right.png';
import Logo from '../assets/images/logo.png';
import social_ic1 from '../assets/images/social_ic1.svg';
import social_ic2 from '../assets/images/social_ic2.svg';
import social_ic3 from '../assets/images/social_ic3.svg';
import social_ic4 from '../assets/images/social_ic4.svg';

const Thanks = ({data}) =>{
    console.log(data);
    return(
        <>
            <div className="main-content">
                <div className="common_inner_banner">
                    <Container>
                        <ul>
                            <li><Link to="/"> Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </Container>
                </div>
                <div className="contect_wrapper">
                    <Container>
                        <div className="contect_wrapp thanks_wrap">
                            <div className="thanks_block">
                                <div className="logo_hold">
                                    <Link to="/"><img src={Logo} alt="image"/></Link>
                                </div>
                                <div className="thanks_conten">
                                    <h3>{data.head}</h3>
                                    <p> {data.text}</p>
                                </div>
                                <div className="thanks_icon">
                                    <ul>
                                        <li><a href='https://www.google.com/intl/en-GB/gmail/about/' target={'_blank'}><img src={social_ic1} alt="icon" /></a></li>
                                        <li><a href='https://twitter.com/i/flow/login' target={'_blank'}><img src={social_ic2} alt="icon" /></a></li>
                                        <li><a href='https://www.youtube.com/' target={'_blank'}><img src={social_ic3} alt="icon" /></a></li>
                                        <li><a href='https://www.facebook.com/login/' target={'_blank'}><img src={social_ic4} alt="icon" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <div className="contact_shape_left">
                        <img src={contact_shape_left} alt="shape" />
                    </div>   
                    <div className="contact_shape_right">
                        <img src={contact_shape_right} alt="shape" />
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Thanks;