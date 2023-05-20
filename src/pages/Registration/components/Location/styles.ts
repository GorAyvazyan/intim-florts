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

export const StyledInfo = styled(Typography)`
  && {
    font-size: 16px;
    line-height: 24px;
    color: #b2b3b5;
    text-align: left;
    margin-top: 6px;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 16px 0 24px;
    & label {
      font-size: 14px;
      line-height: 24px;
    }
    .css-iorrfx-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 16px;
      font-size: 18px;
      line-height: 26px;
      color: #212b36;
    }
    .css-fgn2fi-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 16px;
    }
    .css-vendc5-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 16px;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: #f76448;
    }
    svg {
      padding-right: 16px;
      & path {
        fill: #f76448;
      }
    }
  }
`;
