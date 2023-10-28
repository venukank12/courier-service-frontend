import { Box, Typography, Chip, Stack, BoxProps } from "@mui/material";
import Shipments from "../../utils/dataTypes/Shipment";
import moment from "moment";

const ShipmentCard: React.FC<Shipments & BoxProps> = (props) => {
  const { trackingNo, recipientFullName, recipientAddress, status, updatedAt,onClick } =
    props;
  return (
    <Box
    onClick={onClick}
      sx={{
        p: 2,
        borderRadius: "6px",
        bgColor: "#FFFFFF",
        boxShadow: "0px 4px 48px #0000000A",
        height: "100%",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1" color="primary">
          {`#${trackingNo}`}
        </Typography>
        <Chip
          sx={{
            bgcolor:
              {
                Pending: "#FEB558",
                InTransit: "#6DBBFA",
                Delivered: "#8022CE",
              }[status] + "21",
            color: {
              Pending: "#FEB558",
              InTransit: "#6DBBFA",
              Delivered: "#8022CE",
            }[status],
          }}
          label={status}
        />
      </Stack>

      <Typography variant="caption" mt={3}>
        Recipient Name,
      </Typography>
      <Typography mt={0.25} fontWeight={600}>
        {recipientFullName}
      </Typography>

      <Typography variant="caption" mt={3}>
        Recipient Address,
      </Typography>
      <Typography fontWeight={600} mt={0.25}>
        {recipientAddress}
      </Typography>
      <Typography variant="subtitle2" mt={1} textAlign='right' color="CaptionText">
        {moment.utc(updatedAt).fromNow()}
      </Typography>
    </Box>
  );
};

export default ShipmentCard;
