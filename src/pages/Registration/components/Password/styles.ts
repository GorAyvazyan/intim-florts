import styled from "styled-components";
import { Typography, TextField } from "@mui/material";

export const StyledTitle = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #212b36;
    text-align: left;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 16px 0 24px;
    & label {
      font-size: 14px;
      line-height: 24px;
    }
    .css-d6b7ly-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 16px;
      font-size: 18px;
      line-height: 26px;
      color: #212b36;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: #f76448;
    }
  }
`;
