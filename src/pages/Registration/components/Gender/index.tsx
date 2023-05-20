import React, { useContext } from "react";
import RegistrationContext from "../../../../context/RegistrationContext";
import { StyledTitle, StyledToggleButtonGroup, StyledGenderButton } from "./styles";

function Gender() {
  const { formData, updateFormData } = useContext(RegistrationContext);
  const { gender, interestedGender } = formData;
  const handleChange = (newGender: string) => {
    updateFormData({ gender: newGender });
  };

  const handleInterestedGenderChange = (newGender: string) => {
    updateFormData({ interestedGender: newGender });
  };

  return (
    <>
      <StyledTitle>Your gender</StyledTitle>
      <StyledToggleButtonGroup>
        <div>
          <StyledGenderButton
            variant="outlined"
            color={gender === "female" ? "primary" : "inherit"}
            onClick={() => handleChange("female")}
            value="female"
          >
            Female
          </StyledGenderButton>
        </div>
        <div>
          <StyledGenderButton
            variant="outlined"
            color={gender === "male" ? "primary" : "inherit"}
            onClick={() => handleChange("male")}
            value="male"
          >
            Male
          </StyledGenderButton>
        </div>
      </StyledToggleButtonGroup>
      <StyledTitle>You are interested in</StyledTitle>
      <StyledToggleButtonGroup>
        <div>
          <StyledGenderButton
            variant="outlined"
            color={interestedGender === "female" ? "primary" : "inherit"}
            onClick={() => handleInterestedGenderChange("female")}
            value="female"
          >
            Female
          </StyledGenderButton>
        </div>
        <div>
          <StyledGenderButton
            variant="outlined"
            color={interestedGender === "male" ? "primary" : "inherit"}
            onClick={() => handleInterestedGenderChange("male")}
            value="male"
          >
            Male
          </StyledGenderButton>
        </div>
      </StyledToggleButtonGroup>
    </>
  );
}
export default Gender;
