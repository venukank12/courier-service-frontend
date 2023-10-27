import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import loginValidationSchema from "../../components/forms/LoginForm/loginValidationSchema";
import LoginForm from "../../components/forms/LoginForm";
import { useLoginMutation } from "../../services/authService";
import { login } from "../../store/slices/authSlice";

const LoginPage = ()=>{
    const dispatch = useDispatch();
    
    const [handleLogin,{error,isSuccess,data}] = useLoginMutation({fixedCacheKey:'auth-data'});
  
    
    useEffect(()=>{isSuccess && dispatch(login(data?.data))},[isSuccess,data?.data,dispatch]);
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      validationSchema: loginValidationSchema,
      onSubmit: handleLogin
    });
  
    
    return <LoginForm {...formik} message={error?.data?.error}/>;
}

export default LoginPage;