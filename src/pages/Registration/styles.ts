import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { ReactComponent as FemaleIcon } from "../../assets/images/female.svg";

export const FormWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 90px;
  margin-top: 60px;
  @media only screen and (max-width: 600px) {
    padding: 24px 16px;
  }
`;

export const StyledStepperWrapper = styled.div`
  && {
    padding: 64px 0 40px;
    width: 100%;
  }
`;

export const StyledNextButton = styled(Button)`
  && {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    background: #f76448;
    border-radius: 16px;
    text-transform: capitalize;
    margin: 0 0 16px;
    &:hover {
      background: #f76448;
    }
  }
`;

export const StyledBack = styled(Button)`
  &&& {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #212b36;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    &:hover {
      background: transparent;
    }
  }
`;

export const StyledTitle = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #212b36;
    text-align: left;
  }
`;

export const StyledFemaleIcon = styled(FemaleIcon)<{ active: boolean }>`
  && {
    stroke: ${(props) => (props.active ? "#F76448" : "#FFDC22")};
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
