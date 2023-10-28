import { useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Outlet, useLocation } from "react-router-dom";
import UrlSlugs from "../../utils/dataTypes/UrlSlugs";

const Auth: React.FC = () => {
  const { pathname } = useLocation();
  const background = useMemo(
    () =>
      `url(${
        pathname === UrlSlugs.LOGIN
          ? "images/login_portal.jpg"
          : "images/registration_portal.jpg"
      })`,
    [pathname]
  );

  return (
    <Grid container width="100vw" height="100vh">
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "100%",
          background,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        p={{ xs: 2, sm: 5 }}
        display={{ xs: "none", md: "block" }}
      >
        <Box display="flex" alignItems="center">
          <DiamondIcon fontSize="large" color="primary" />
          <Typography ml={1} variant="h5">
            Courier Life
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} maxHeight='100vh' overflow='auto'>
        <Outlet/>
      </Grid>
    </Grid>
  );
};

export default Auth;
