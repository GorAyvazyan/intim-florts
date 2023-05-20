import React, { ChangeEvent, useContext } from "react";
import RegistrationContext from "../../../../context/RegistrationContext";
import { StyledTitle, StyledTextField } from "./styles";

function Username() {
  const { formData, updateFormData } = useContext(RegistrationContext);
  const { password } = formData;

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateFormData({ password: value });
  };

  return (
    <>
      <StyledTitle>Create a password</StyledTitle>
      <StyledTextField
        id="password"
        name="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        variant="outlined"
        type="password"
        autoComplete="current-password"
      />
    </>
  );
}

export default Username;
