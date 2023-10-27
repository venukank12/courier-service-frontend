import { Box, Typography } from "@mui/material";

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Box
    display="flex"
    width="100%"
    my={10}
    p="7px 10px"
    sx={{
      backgroundColor: (theme) => theme.palette.error.light,
      opacity: Boolean(message) ? 1 : 0,
      borderRadius: "8px",
    }}
  >
    <Typography m="auto" variant="body2" color="error">
      {message}
    </Typography>
  </Box>
);

export default ErrorMessage;
