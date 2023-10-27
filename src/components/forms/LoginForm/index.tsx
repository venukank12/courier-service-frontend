import { TextField, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ErrorMessage from "../../core/ErrorMessage";
import LoginFormInputs from "../../../utils/dataTypes/LoginFormInputs";
import DiamondIcon from "@mui/icons-material/Diamond";

const LoginForm = ({
  message,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}: LoginFormInputs) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box
        m="auto"
        maxWidth="400px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box display={{ sm: "block", md: "none" }}>
          <DiamondIcon color="primary" style={{ width: 100, height: 100 }} />
        </Box>

        <Typography variant="h4" mt={30} align="center">
          Log in to your account
        </Typography>
        <Typography
          variant="body1"
          mt={12}
          mb={30}
          color="text.secondary"
          align="center"
        >
          Welcome back! please enter your credentials
        </Typography>
        <TextField
          fullWidth
          label="Email"
          placeholder="venukan@courierlife.com"
          disabled={isSubmitting}
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

        <TextField
          sx={{ mt: 20 }}
          fullWidth
          type="password"
          label="Password"
          placeholder="Password"
          disabled={isSubmitting}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />

        <ErrorMessage message={message} />

        <LoadingButton
          sx={{ marginTop: message ? "10px" : "50px" }}
          disableRipple
          disabled={isSubmitting}
          loading={isSubmitting}
          type="submit"
          variant="contained"
        >
          Signin
        </LoadingButton>
      </Box>
    </form>
  );
};

export default LoginForm;
