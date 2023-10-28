import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogProps,
} from "@mui/material";
import {
  useCreateShipmentMutation,
  useUpdateShipmentMutation,
} from "../../services/shipmentService";
import { useFormik } from "formik";
import shipmentValidationSchema from "../../components/forms/ShipmentForm/shipmentValidationSchema";
import ShipmentForm from "../../components/forms/ShipmentForm";
import Shipments, {
  ShipmentMethod,
  ShipmentType,
} from "../../utils/dataTypes/Shipment";
import { useCallback } from "react";

const ShipmentFormPopup: React.FC<
  Omit<DialogProps, "onClose"> & {
    handleClose: () => void;
    data: null | Omit<
      Shipments,
      "createdAt" | "updatedAt" | "trackingNo" | "status"
    >;
  }
> = (props) => {
  const { data, handleClose } = props;
  const [handleCreate, { error: createError, reset: createReset }] =
    useCreateShipmentMutation();
  const [handleUpdate, { error: updateError, reset: updateReset }] =
    useUpdateShipmentMutation();

  const createOrUpdateShipment = useCallback(
    (data: any) =>
      (data?.id ? handleUpdate(data):handleCreate(data))
        .finally(handleClose)
        .finally(createReset)
        .finally(updateReset),
    [handleCreate,handleUpdate, handleClose,createReset,updateReset]
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data ?? {
      id: "",
      recipientFullName: "",
      recipientAddress: "",
      shipmentDetails: {
        type: "Standard" as ShipmentType,
        method: "Air" as ShipmentMethod,
        pickupDateAndTime: "",
        pickupLocation: "",
        expectedDeliveryDateAndTime: "",
        deliveryLocation: "",
        descriptions: "",
        documents: "",
        paymentInfo: "",
        remarks: "",
      },
    },
    validationSchema: shipmentValidationSchema,
    onSubmit: createOrUpdateShipment,
  });

  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogTitle>{formik.values.id ? "Edit" : "Create"} Shipment</DialogTitle>
      <DialogContent>
        <ShipmentForm
          {...formik}
          message={(createError || updateError)?.data?.message}
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={formik.isSubmitting}
          sx={{ px: 3 }}
          variant="outlined"
          fullWidth={false}
          onClick={(e: any) => {
            formik.resetForm();
            handleClose();
          }}
        >
          Cancel
        </LoadingButton>
        <LoadingButton
          form="shipment-form"
          loading={formik.isSubmitting}
          sx={{ px: 3 }}
          variant="contained"
          fullWidth={false}
          type="submit"
        >
          {formik.values.id ? "Save" : "Create"}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ShipmentFormPopup;
