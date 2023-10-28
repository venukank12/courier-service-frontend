import {forwardRef,SyntheticEvent} from 'react';
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ProfileCard = forwardRef(({onClick=()=>null}:{onClick?:(e:SyntheticEvent)=>void},ref) => {
  const { firstName, lastName, email, avatar } = useSelector(
    (state:any) => state.auth.user
  );
  return (
    <Box sx={{cursor:'pointer'}} onClick={onClick} ref={ref} display="flex" gap={{ xs: 0, md: 1 }} alignItems="center">
      <Avatar
        sx={{ width: { xs: 28, md: 39 }, height: { xs: 28, md: 39 } }}
        src={avatar}
        imgProps={{ referrerPolicy: "no-referrer" }}
      />
      <Box display={{ xs: "none", md: "Block" }} ml={{xs:0.5}}>
        <Typography
          fontSize="12px"
          fontWeight={500}
          whiteSpace="nowrap"
        >
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography
          fontSize="11px"
          fontWeight={300}
          whiteSpace="nowrap"
        >
          {email}
        </Typography>
      </Box>
    </Box>
  );
});

export default ProfileCard;