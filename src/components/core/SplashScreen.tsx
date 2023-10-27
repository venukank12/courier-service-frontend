import { Box } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";

const SplashScreen = () => {
  return (
    <Box width="100%" height="100vh" display="flex">
      <Box m="auto">
        <DiamondIcon fontSize="large" color="primary" />
      </Box>
    </Box>
  );
};

export default SplashScreen;
