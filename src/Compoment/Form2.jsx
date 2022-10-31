import React  from "react";
import { ErrorMessage  , useField} from "formik";

const  Form2 = (props) => {
  const[field , meta] = useField(props);
 // console.log(meta);
 // console.log(field);
  return (
    <>
    <input  className={`${meta.touched && meta.error && "is-invalid"}`} {...field} {...props}  required  />
    <ErrorMessage component="div" name={field.name}  className="errorfor_Contactus" /> 
    </>
  );
};

const  Form3 = (props) => {
    const[field , meta] = useField(props);
   // console.log(meta);
   // console.log(field);
    return (
      <>
      <textarea  className={`${meta.touched && meta.error && "is-invalid"}`} {...field} {...props}  required  ></textarea>
      <ErrorMessage component="div" name={field.name}  className="errorfor_Contactus" /> 
      </>
    );
  };



export {Form2 , Form3}