import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import registerValidationSchema from "../../components/forms/RegisterForm/registerValidationSchema";
import RegisterForm from "../../components/forms/RegisterForm";
import {  useRegisterMutation } from "../../services/authService";
import { login } from "../../store/slices/authSlice";

const RegisterPage = ()=>{
    const dispatch = useDispatch();
    
    const [handleRegister,{error,isSuccess,data}] = useRegisterMutation();
      
    useEffect(()=>{isSuccess && dispatch(login({token:data?.token,user:data?.user}))},[isSuccess,data,dispatch]);
  
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName:"",
        email:"",
        password: "",
        address:"",
        phoneNumber:""
      },
      validationSchema: registerValidationSchema,
      onSubmit: handleRegister
    });
  
    
    return <RegisterForm {...formik} message={error?.data?.message}/>;
}

export default RegisterPage;