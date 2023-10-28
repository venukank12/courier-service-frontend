import { useCallback, Fragment } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import ProfileCard from "../common/ProfileCard";
import { logout } from "../../store/slices/authSlice";

const AppBar = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <MuiAppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Fragment>
            <DiamondIcon color="primary" fontSize="large" />
            <Typography
              ml={1}
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
                color: (theme) => theme.palette.primary.main,
              }}
            >
              Courier Life
            </Typography>
          </Fragment>
          <Box
            sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          >
            <ProfileCard />
            <Box ml={3} display="flex" alignItems="center">
              <LogoutIcon
                color="error"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;
