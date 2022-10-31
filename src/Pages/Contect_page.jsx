import React from "react";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import contact_shape_left from '../assets/images/contact_left.png';
import contact_shape_right from '../assets/images/contact_right.png';

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Form2 , Form3 } from "../Compoment/Form2";
import { useNavigate } from 'react-router-dom';

const Contect = () => {
    const navigate = useNavigate();
    
    let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;
    let commemtRegExp = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;
     const validate = Yup.object({
        fname: Yup.string()
         .max(40, "Must be 40 characters or less")
         .required("Please Enter Your First Name"),
         lname : Yup.string()
         .max(40, "Must be 40 characters or less")
         .required("Please Enter Your Last Name"),
         Phone: Yup.string() 
         .matches(phoneRegExp, 'Phone number is not valid')
         .max(10, "Must be 10 characters or less")
         .required("Required and only enter valid Contact Number"),
         email: Yup.string()
         .email("Email is invalid")
         .required("Please Enter Your Email")
         .max( 70, "Must be 70 characters or less"),
         comment: Yup.string()
         .matches(commemtRegExp, 'Comment is not valid')
         .max(5000, "Must be 90 characters or less")
         .required("Please Enter Your Comment"),
     });
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
                        <div className="contect_wrapp">
                           
                         <Formik 
                             initialValues={{
                                fname: "",
                                lname: "",
                                Phone: "",
                                email: "",
                                comment: "",
                            }}  
                            validationSchema={validate}
                            onSubmit={async(values, { resetForm })=>{
                            
                                let userId = new Date().getTime().toString();
                                const { fname, lname, Phone, email, comment } = values;

                                 await  fetch("https://the-dan-gaming-default-rtdb.asia-southeast1.firebasedatabase.app/Formdata.json",
                                    {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ fname, lname, Phone, email, comment , userId }),
                                    }
                                )
                                    .then((response) => {
                                    return response;
                                    })
                                    .then((res) => {
                                    resetForm({values:''})
                                    if(res.status == 200){
                                        navigate("/thanksform")
                                    }
                                    })
                                    .catch((error) => {
                                      console.error(error);
                                    });
                            }}
                           >
                            {(formik)=>(
                                <Form>
                                <ul className="contect_block">
                                  <li>
                                     <label htmlFor="f_name"><p>First Name</p>
                                         <Form2 type="text"  id="f_name" name="fname"  placeholder="First Name"  />
                                     </label>
                                  </li>
                                  <li>
                                     <label htmlFor="l_name"><p>Last Name</p>
                                         
                                         <Form2 type="text"  id="l_name" name="lname"  placeholder="Last Name"  />

                                     </label>
                                  </li>
                              </ul>
                              <ul className="contect_block">
                                  <li>
                                     <label htmlFor="P_Number"><p>Number</p>
                                        
                                         <Form2 type="number"  id="P_Number" name="Phone"  placeholder="Phone Number"  />
                                     </label>
                                  </li>
                                  <li>
                                     <label htmlFor="email_text"><p>Email</p>
                                        
                                         <Form2 type="email"  id="email_text" name="email"  placeholder="Enter Email"  />
                                     </label>
                                  </li>
                              </ul>
                              <div className="contect_block contect_textarea">
                                    <label htmlFor="Message_text"><p>Message</p>
                                        <Form3 type="text" name="comment"  id="Message_text" placeholder="Message" />
                                    </label>
                              </div>
                              <div className="contact_btn">
                                 <div class="join_our_team"><button><span>Contact Us</span></button></div>
                              </div>
                                </Form>
                            )}
                           </Formik>
                             
                           
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

export default Contect; 