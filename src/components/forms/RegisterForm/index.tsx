import { TextField, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ErrorMessage from "../../core/ErrorMessage";
import DiamondIcon from "@mui/icons-material/Diamond";
import UrlSlugs from "../../../utils/dataTypes/UrlSlugs";
import RegisterFormInputs from "../../../utils/dataTypes/RegisterFormInputs";

const RegisterForm = ({
  message,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}: RegisterFormInputs) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      m="auto"
      maxWidth="400px"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      py={3}
      boxSizing='border-box'
    >
      <Box display={{ sm: "block", md: "none" }}>
        <DiamondIcon color="primary" style={{ width: 100, height: 100 }} />
      </Box>

      <Typography variant="h4" mt={3} align="center">
        Register with us
      </Typography>
      <Typography
        variant="body1"
        mt={1}
        mb={5}
        color="text.secondary"
        align="center"
      >
        Please create your account by providing the followings,
      </Typography>
      <TextField
        fullWidth
        label="First Name"
        placeholder="Venukan"
        disabled={isSubmitting}
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="Last Name"
        placeholder="Kanthasamy"
        disabled={isSubmitting}
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
      />
      <TextField
        sx={{ mt: 2 }}
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
        sx={{ mt: 2 }}
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

      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="Address"
        placeholder="Mulliwayalai, Mullaitivu, Sri Lanka"
        disabled={isSubmitting}
        name="address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.address && Boolean(errors.address)}
        helperText={touched.address && errors.address}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="Phone Number"
        placeholder="94770337024"
        disabled={isSubmitting}
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phoneNumber && Boolean(errors.phoneNumber)}
        helperText={touched.phoneNumber && errors.phoneNumber}
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
        Register
      </LoadingButton>
      <Typography variant="subtitle1" mt={0.25} align="center">
        Already have account? <a href={UrlSlugs.LOGIN}>Sign In</a>.
      </Typography>
    </Box>
  );
};

export default RegisterForm;
