import styled from "styled-components";
import { Typography } from "@mui/material";

export const FooterWrapper = styled.div`
  text-align: center;
  background: #ffffff;
  padding-top: 40px;
  @media only screen and (max-width: 600px) {
    padding: 28px 16px 0;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 40px;
  & a {
    font-size: 18px;
    line-height: 26px;
    color: #212b36;
    padding: 0 8px;
    text-decoration: none;
  }
  span {
    color: #212b36;
  }
  @media only screen and (max-width: 600px) {
    margin: 24px 0 32px;
    a {
      font-size: 14px;
    }
  }
`;

export const RightsWrapper = styled.div`
  padding: 24px 0 28px;
  border-top: 2px solid #e5e8eb;
  @media only screen and (max-width: 600px) {
    padding: 18px 16px 24px;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-size: 14px;
    line-height: 24px;
    color: #b2b3b5;
  }
`;
