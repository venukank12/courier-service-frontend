import * as Yup from "yup";

const shipmentValidationSchema = Yup.object().shape({
  recipientFullName: Yup.string()
    .min(3, "more than 3 characters")
    .max(50, "less than 50 characters!")
    .required("required!"),
  recipientAddress: Yup.string()
    .min(3, "more than 3 characters")
    .max(50, "less than 50 characters!")
    .required("required!"),
  shipmentDetails: Yup.object().shape({
    type:Yup.string().oneOf(["Standard","Express","International"],'please select!').required('required!'),
    method:Yup.string().oneOf(["Ground","Air","Ocean"],'please select!').required('required!'),
  }),
});

export default shipmentValidationSchema;
