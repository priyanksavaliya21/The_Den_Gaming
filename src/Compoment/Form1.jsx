import React  from "react";
 
import { ErrorMessage  , useField} from "formik";

const  Form1 = (props) => {
  const[field , meta] = useField(props);
 // console.log(meta);
 // console.log(field);
  return (
    <>
     <div className="sign_email_sec">
          <input  className={` ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props}  required  />
        <ErrorMessage component="div" name={field.name}  className="errorfor_singup " /> 
        </div>
    </>
  );
};
export {Form1};