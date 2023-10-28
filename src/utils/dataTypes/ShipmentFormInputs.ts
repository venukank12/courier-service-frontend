import { FormikProps } from "formik";
import Shipments from "./Shipment";

type ShipmentFormInputs = FormikProps<
  Omit<Shipments,"createdAt" | "updatedAt" | "trackingNo"|"status">
> & { message?: string };

export default ShipmentFormInputs;
