import { TextField, Box, Typography, Grid, MenuItem } from "@mui/material";
import ErrorMessage from "../../core/ErrorMessage";
import ShipmentFormInputs from "../../../utils/dataTypes/ShipmentFormInputs";

const ShipmentForm = ({
  message,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}: ShipmentFormInputs) => {
  return (
    <Box component="form" id="shipment-form" onSubmit={handleSubmit}>
      <Grid container spacing={0.5}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Recipient Full Name"
            placeholder="Venukan"
            disabled={isSubmitting}
            name="recipientFullName"
            value={values.recipientFullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.recipientFullName && Boolean(errors.recipientFullName)
            }
            helperText={touched.recipientFullName && errors.recipientFullName}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Recipient Address"
            placeholder="Mulliwayalai, Mullaitivu, Sri Lanka"
            disabled={isSubmitting}
            name="recipientAddress"
            value={values.recipientAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.recipientAddress && Boolean(errors.recipientAddress)}
            helperText={touched.recipientAddress && errors.recipientAddress}
          />
        </Grid>
      </Grid>

      <Typography mt={2} mb={1} variant="h6">
        Shipment details,
      </Typography>

      <Grid container spacing={0.5}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            select
            fullWidth
            label="Shipment Type"
            disabled={isSubmitting}
            name="shipmentDetails.type"
            value={values?.shipmentDetails?.type}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.type &&
              Boolean(errors?.shipmentDetails?.type)
            }
            helperText={
              touched?.shipmentDetails?.type && errors?.shipmentDetails?.type
            }
          >
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Express">Express</MenuItem>
            <MenuItem value="International">International</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            select
            fullWidth
            label="Shipment Method"
            disabled={isSubmitting}
            name="shipmentDetails.method"
            value={values?.shipmentDetails?.method}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.method &&
              Boolean(errors?.shipmentDetails?.method)
            }
            helperText={
              touched?.shipmentDetails?.method &&
              errors?.shipmentDetails?.method
            }
          >
            <MenuItem value="Ground">Ground</MenuItem>
            <MenuItem value="Air">Air</MenuItem>
            <MenuItem value="Ocean">Ocean</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Pickup Date Time"
            placeholder="28th Oct 2023 at 10:52 PM (IST)"
            disabled={isSubmitting}
            name="shipmentDetails.pickupDateAndTime"
            value={values?.shipmentDetails?.pickupDateAndTime}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.pickupDateAndTime &&
              Boolean(errors?.shipmentDetails?.pickupDateAndTime)
            }
            helperText={
              touched?.shipmentDetails?.pickupDateAndTime &&
              errors?.shipmentDetails?.pickupDateAndTime
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Pickup Location"
            placeholder="28th Oct 2023 at 10:52 PM (IST)"
            disabled={isSubmitting}
            name="shipmentDetails.pickupLocation"
            value={values?.shipmentDetails?.pickupLocation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.pickupLocation &&
              Boolean(errors?.shipmentDetails?.pickupLocation)
            }
            helperText={
              touched?.shipmentDetails?.pickupLocation &&
              errors?.shipmentDetails?.pickupLocation
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Expected Delivery Date Time"
            placeholder="28th Oct 2023 at 10:52 PM (IST)"
            disabled={isSubmitting}
            name="shipmentDetails.expectedDeliveryDateAndTime"
            value={values?.shipmentDetails?.expectedDeliveryDateAndTime}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.expectedDeliveryDateAndTime &&
              Boolean(errors?.shipmentDetails?.expectedDeliveryDateAndTime)
            }
            helperText={
              touched?.shipmentDetails?.expectedDeliveryDateAndTime &&
              errors?.shipmentDetails?.expectedDeliveryDateAndTime
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Delivery Location"
            placeholder="28th Oct 2023 at 10:52 PM (IST)"
            disabled={isSubmitting}
            name="shipmentDetails.deliveryLocation"
            value={values?.shipmentDetails?.deliveryLocation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.deliveryLocation &&
              Boolean(errors?.shipmentDetails?.deliveryLocation)
            }
            helperText={
              touched?.shipmentDetails?.deliveryLocation &&
              errors?.shipmentDetails?.deliveryLocation
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Descriptions"
            placeholder="if any,"
            disabled={isSubmitting}
            name="shipmentDetails.descriptions"
            value={values?.shipmentDetails?.descriptions}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.descriptions &&
              Boolean(errors?.shipmentDetails?.descriptions)
            }
            helperText={
              touched?.shipmentDetails?.descriptions &&
              errors?.shipmentDetails?.descriptions
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Documents"
            placeholder="if any,"
            disabled={isSubmitting}
            name="shipmentDetails.documents"
            value={values?.shipmentDetails?.documents}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.documents &&
              Boolean(errors?.shipmentDetails?.documents)
            }
            helperText={
              touched?.shipmentDetails?.documents &&
              errors?.shipmentDetails?.documents
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Payment Info"
            placeholder="if any,"
            disabled={isSubmitting}
            name="shipmentDetails.paymentInfo"
            value={values?.shipmentDetails?.paymentInfo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.paymentInfo &&
              Boolean(errors?.shipmentDetails?.paymentInfo)
            }
            helperText={
              touched?.shipmentDetails?.paymentInfo &&
              errors?.shipmentDetails?.paymentInfo
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Payment Info"
            placeholder="if any,"
            disabled={isSubmitting}
            name="shipmentDetails.paymentInfo"
            value={values?.shipmentDetails?.paymentInfo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.paymentInfo &&
              Boolean(errors?.shipmentDetails?.paymentInfo)
            }
            helperText={
              touched?.shipmentDetails?.paymentInfo &&
              errors?.shipmentDetails?.paymentInfo
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TextField
            fullWidth
            label="Remarks"
            placeholder="if any,"
            disabled={isSubmitting}
            name="shipmentDetails.remarks"
            value={values?.shipmentDetails?.remarks}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched?.shipmentDetails?.remarks &&
              Boolean(errors?.shipmentDetails?.remarks)
            }
            helperText={
              touched?.shipmentDetails?.remarks &&
              errors?.shipmentDetails?.remarks
            }
          />
        </Grid>
      </Grid>

      <ErrorMessage message={message} />
    </Box>
  );
};

export default ShipmentForm;
