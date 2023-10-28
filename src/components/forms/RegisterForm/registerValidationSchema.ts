import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "more than 3 characters")
    .max(50, "less than 50 characters!")
    .required("required!"),
  lastName: Yup.string()
    .min(3, "more than 3 characters")
    .max(50, "less than 50 characters!")
    .required("required!"),
  email: Yup.string().email("Invalid email!").required(`required!`),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/,
      "must be 8 to 50 characters and to have a number and a special character!"
    )
    .required(`required!`),
  address: Yup.string()
    .min(3, "more than 3 characters")
    .max(256, "less than 256 characters!")
    .required("required!"),
  phoneNumber: Yup.string()
    .min(3, "more than 3 characters")
    .max(50, "less than 50 characters!")
    .required("required!"),
});

export default registerValidationSchema;
