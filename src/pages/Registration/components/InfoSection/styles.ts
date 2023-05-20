import styled from "styled-components";
import { Typography } from "@mui/material";

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 80px;
  @media only screen and (max-width: 600px) {
    margin: 48px 0;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledProfile = styled.div`
  background: #ffffff;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: relative;
  & svg {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    fill: #f76448;
    width: 40px;
    height: 40px;
  }
`;

export const StyledDescription = styled(Typography)`
  font-size: 18px;
  text-align: center;
  color: #212b36;
  padding-top: 24px;
`;
