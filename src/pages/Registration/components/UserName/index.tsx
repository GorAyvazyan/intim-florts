import React, { ChangeEvent, useContext } from "react";
import RegistrationContext from "../../../../context/RegistrationContext";
import { StyledTitle, StyledTextField } from "./styles";

function UserName() {
  const { formData, updateFormData } = useContext(RegistrationContext);
  const { userName } = formData;
  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateFormData({ userName: value }); // Update context
  };

  return (
    <>
      <StyledTitle>Create a username</StyledTitle>
      <StyledTextField
        id="userName"
        name="userName"
        label="Username"
        value={userName}
        onChange={handleUserNameChange}
        variant="outlined"
      />
    </>
  );
}

export default UserName;
