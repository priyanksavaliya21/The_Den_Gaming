import { Link } from 'react-router-dom';
import {Container } from 'react-bootstrap';
import footer_logo from '../assets/images/footer_logo.png';
import social_ic1 from '../assets/images/social_ic1.svg';
import social_ic2 from '../assets/images/social_ic2.svg';
import social_ic3 from '../assets/images/social_ic3.svg';
import social_ic4 from '../assets/images/social_ic4.svg';

function Footer(){
    return(
        <>
            <div className='footer_wrapper'>
                <footer>
                    <Container>
                        <div className="footer_block">
                            <div className="footer_logo">
                                <Link to="/"><img src={footer_logo} alt="image"/></Link>
                            </div>
                            <div className="footer_menu">
                                <ul>
                                    <li><Link to="/"> Home</Link></li>
                                    <li><Link to="/product"> Products</Link></li>
                                    <li><Link to="/team"> Team</Link></li>
                                    <li><a href=''>Blog</a></li>
                                    <li><a href=''>Careers</a></li>
                                    <li><Link to="/Contect">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>© 2022 <Link to="/">The Den Gaming</Link></p>
                            <div className="footer_social">
                                <ul>
                                    <li><a href='https://www.google.com/intl/en-GB/gmail/about/' target={'_blank'}><img src={social_ic1} alt="icon" /></a></li>
                                    <li><a href='https://twitter.com/i/flow/login' target={'_blank'}><img src={social_ic2} alt="icon" /></a></li>
                                    <li><a href='https://www.youtube.com/' target={'_blank'}><img src={social_ic3} alt="icon" /></a></li>
                                    <li><a href='https://www.facebook.com/login/' target={'_blank'}><img src={social_ic4} alt="icon" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </footer>
            </div>
        </>
    );
}

export default Footer;