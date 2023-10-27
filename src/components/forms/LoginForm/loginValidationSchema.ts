import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required(`Email is required!`),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/,
      "must be 8 to 50 characters and to have a number and a special character!"
    )
    .required(`Password is required!`),
});

export default loginValidationSchema;
