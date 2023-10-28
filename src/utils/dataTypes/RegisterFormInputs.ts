import { FormikProps } from "formik";

type RegisterFormInputs = FormikProps<{
  firstName:string;
  lastName:string;
  email: string;
  password: string;
  phoneNumber:string;
  address:string;
}> & { message?: string };

export default RegisterFormInputs;
