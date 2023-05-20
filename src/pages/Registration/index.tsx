import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { Container, Grid } from "@mui/material/";
import {
  CakeOutlined as CakeOutlinedIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  HttpsOutlined as HttpsOutlinedIcon
} from "@mui/icons-material";
import { StepIconProps } from "@mui/material/StepIcon";
import logo from "../../assets/images/logo.png";
import RegistrationContext, { formDataType } from "../../context/RegistrationContext";
import Gender from "../../pages/Registration/components/Gender";
import DatePicker from "../../pages/Registration/components/DatePicker";
import Location from "../../pages/Registration/components/Location";
import UserName from "../../pages/Registration/components/UserName";
import Password from "../../pages/Registration/components/Password";
import InfoSection from "../../pages/Registration/components/InfoSection";
import Footer from "../../pages/Registration/components/Footer";
import {
  FormWrapper,
  ContentWrapper,
  StyledNextButton,
  StyledBack,
  StyledStepperWrapper,
  StyledFemaleIcon
} from "./styles";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 30,
    left: "calc(-45% + -15px)",
    right: "calc(30% + 15px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#FFDC22"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#FFDC22"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  zIndex: 1,
  color: "#E5E8EB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "white",
    color: "#F76448"
  }),
  ...(ownerState.completed && {
    backgroundColor: "white",
    color: "#FFDC22"
  })
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <StyledFemaleIcon active={active!} />,
    2: <CakeOutlinedIcon />,
    3: <PlaceOutlinedIcon />,
    4: <PersonOutlinedIcon />,
    5: <HttpsOutlinedIcon />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["Gender", "Date", "Location", "UserName", "Password"];
const initialState = {
  gender: "",
  interestedGender: "",
  date: "",
  location: "",
  userName: "",
  password: ""
};
function Registration() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const { gender, interestedGender, date, location, userName, password } = formData;
  const updateFormData = (data: formDataType) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
  };
  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };
  const handleNext = () => {
    if (activeStep == 1 && !date) {
      return;
    }
    if (isLastStep()) {
      updateFormData(initialState);
      setActiveStep(0);
      alert(JSON.stringify(formData, null, 4));
      return;
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const showStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Gender />;
      case 1:
        return <DatePicker />;
      case 2:
        return <Location />;
      case 3:
        return <UserName />;
      case 4:
        return <Password />;
      default:
        return <Gender />;
    }
  };
  const isDisabled =
    !gender ||
    !interestedGender ||
    (activeStep == 1 && !date) ||
    (activeStep == 2 && !location) ||
    (activeStep === 3 && !userName) ||
    (activeStep === 4 && !password);

  const isBackButtonDisabled = !gender || !interestedGender || activeStep == 0;
  return (
    <>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={7}>
            <RegistrationContext.Provider
              value={{
                formData,
                updateFormData
              }}
            >
              <FormWrapper>
                <ContentWrapper>
                  <div>
                    <img src={logo} alt="" />
                  </div>
                  <StyledStepperWrapper>
                    <Stepper
                      alternativeLabel
                      activeStep={activeStep}
                      connector={<ColorlibConnector />}
                    >
                      {steps.map((step) => (
                        <Step key={step}>
                          <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </StyledStepperWrapper>
                  {showStepContent()}
                  <StyledNextButton onClick={handleNext} disabled={isDisabled}>
                    {isLastStep() ? "Complete" : "Next"}
                  </StyledNextButton>
                  <StyledBack
                    onClick={handleBack}
                    variant="outlined"
                    disabled={isBackButtonDisabled}
                  >
                    Back
                  </StyledBack>
                </ContentWrapper>
              </FormWrapper>
            </RegistrationContext.Provider>
          </Grid>
        </Grid>
      </Container>
      <InfoSection />
      <Footer />
    </>
  );
}

export default Registration;
