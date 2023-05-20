import React, { useContext, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import RegistrationContext from "../../../../context/RegistrationContext";
import { StyledTitle, StyledInfo, StyledTextField } from "./styles";

const Location = () => {
  const { formData, updateFormData } = useContext(RegistrationContext);
  const { location } = formData;
  const [locations, setLocations] = useState([]);
  const handleChange = async (address: string) => {
    const url = `http://3.77.96.224/api/v2/registration/locations?search=${address}&skip=0&limit=10&site_key=no01`;

    const response = await fetch(url);

    const { Data } = await response.json();

    setLocations(Data || []);
  };
  const handleSelectOption = (
    event: React.SyntheticEvent<Element, Event>,
    selectedOption: string | null
  ) => {
    updateFormData({ location: selectedOption as string });
  };
  return (
    <>
      <StyledTitle>Your location</StyledTitle>
      <StyledInfo>Search location by city, country or zip code</StyledInfo>

      <Autocomplete
        freeSolo
        disableClearable
        options={locations}
        value={location}
        onChange={handleSelectOption}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label="London, UK"
            variant="outlined"
            onChange={(e) => handleChange(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  <SearchIcon />
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
    </>
  );
};

export default Location;
