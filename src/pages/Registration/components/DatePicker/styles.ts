import styled from "styled-components";
import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export const DatePickerWrapper = styled.div`
  && {
    display: flex;
    align-items: center;
    margin: 16px 0 24px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  && {
    margin-right: 16px;
    border-radius: 16px;
    & label {
      font-size: 18px;
      line-height: 26px;
      color: #212b36;
    }
    & svg path {
      fill: #212b36;
    }
    &:last-child {
      margin-right: 0;
    }
    & .css-kv9vn7-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 16px;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: #f76448;
    }
    @media only screen and (max-width: 600px) {
      && {
        display: flex;
        margin-right: 0;
        border-radius: 16px;
        width: 100%;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
