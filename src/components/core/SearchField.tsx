import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchField = ({ ...textFieldProps }: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      type="search"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          maxHeight: "44px",
        },
      }}
      {...textFieldProps}
    />
  );
};

export default SearchField;