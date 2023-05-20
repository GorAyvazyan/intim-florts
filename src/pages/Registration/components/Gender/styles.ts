import styled from "styled-components";
import { Typography, Button, ToggleButtonGroup } from "@mui/material";

export const StyledTitle = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #212b36;
    text-align: left;
  }
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  &&&& {
    display: flex;
    flex-direction: column;
    margin: 16px 0 8px;
    & + buttton {
      margin-bottom: 8px;
    }
    .css-1xaem1-MuiButtonBase-root-MuiButton-root {
      background: transparent;
      border-color: #f76448;
      color: #f76448;
    }
  }
`;

export const StyledGenderButton = styled(Button)`
  &&&& {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #b2b3b5;
    //border-color: #b2b3b5;
    border-radius: 16px;
    text-transform: capitalize;
    width: 100%;
    &:first-child {
      margin-bottom: 16px;
    }
    &:focus {
      border-color: #f76448;
      color: #f76448;
      background: transparent;
    }
    &:hover {
      background: transparent;
      border-color: #f76448;
      color: #f76448;
    }
  }
`;
