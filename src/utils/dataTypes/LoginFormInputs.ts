import { FormikProps } from "formik";

type LoginFormInputs = FormikProps<{
  email: string;
  password: string;
}> & { message?: string };

export default LoginFormInputs;
