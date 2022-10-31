import React from "react";
import { Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Form1 } from "./Form1";
import { useNavigate } from "react-router-dom";

const Sign_up = () => {
  const navigate = useNavigate();

  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validate = Yup.object({
    email: Yup.string()
      .max(70, "Must be 70 characters or less")
      .email("Email is invalid")
      .required("Please Enter Your Email")
      .matches(emailregex, "Email is not valid"),
  });

  return (
    <>
      <div className="sign_wrapper">
        <div className="sign_wrap">
          <Container>
            <div className="sign_block">
              <div className="sign_title">
                <p>
                  Sign Up To Receive More <br />
                  Content From <span>The Den Gaming</span>
                </p>
              </div>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={validate}
                onSubmit={async (values, { resetForm }) => {
                  // console.log(values);
                  let userId = new Date().getTime().toString();
                  const { email } = values;

                  await fetch(
                    "https://the-dan-gaming-default-rtdb.asia-southeast1.firebasedatabase.app/usersingup.json",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ email, userId }),
                    }
                  )
                    .then((response) => {
                      return response;
                    })
                    .then((res) => {
                      resetForm({ values: "" });

                      if (res.status == 200) {
                        navigate("/thanks");
                      }
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="sign_email_block">
                      <Form1
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                      />
                      <div className="sign_email_btn">
                        <div className="join_our_team">
                          <button>
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
