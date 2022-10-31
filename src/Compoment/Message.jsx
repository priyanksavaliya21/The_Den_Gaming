import { Col, Row, Container } from 'react-bootstrap';
import Message_img_1 from '../assets/images/message_img_1.svg';
import Message_img_2 from '../assets/images/message_img_2.svg';
import Message_img_3 from '../assets/images/message_img_3.svg';
import Message_img_4 from '../assets/images/message_img_4.svg';

function Message(){
    
    return(
        <>
            <div className="message_section">
                <div className="message_block">
                    <Container>
                        <div className="common_section_title">
                            <h3>Message</h3>
                        </div>
                        <Row>
                            <Col xl={3} lg={6} md={6} sm={6} col={6}>
                                <div className="message_box">
                                    <div className="message_img">
                                        <img src={Message_img_1} alt="img" />
                                    </div>
                                    <div className="message_desc">
                                        <h3>Community Focused</h3>
                                        <p>We give real stake in our products to our users. Community Development Power!</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={6} md={6} sm={6} col={6}>
                                <div className="message_box">
                                    <div className="message_img">
                                        <img src={Message_img_2} alt="img" />
                                    </div>
                                    <div className="message_desc">
                                        <h3>Ownership</h3>
                                        <p>Our community owns their data and digital assets.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={6} md={6} sm={6} col={6}>
                                <div className="message_box">
                                    <div className="message_img">
                                        <img src={Message_img_3} alt="img" />
                                    </div>
                                    <div className="message_desc">
                                        <h3>No Limits</h3>
                                        <p>We're mission focused. Excellence comes from dedication.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={6} md={6} sm={6} col={6}>
                                <div className="message_box">
                                    <div className="message_img">
                                        <img src={Message_img_4} alt="img" />
                                    </div>
                                    <div className="message_desc">
                                        <h3>Forefront Runners</h3>
                                        <p>Incorporating the latest technology advances to give our products the edge</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
               
            </div>
        </>
    )
}


export default Message;