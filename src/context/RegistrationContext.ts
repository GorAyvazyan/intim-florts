import { createContext } from "react";

export type formDataType = {
  gender?: string;
  interestedGender?: string;
  date?: string;
  location?: string;
  userName?: string;
  password?: string;
};
type RegistrationContextType = {
  formData: formDataType;
  updateFormData: (data: formDataType) => void;
};

const RegistrationContext = createContext<RegistrationContextType>({
  formData: {
    gender: "",
    interestedGender: "",
    date: "",
    location: "",
    userName: "",
    password: ""
  },
  updateFormData: (data: formDataType) => data
});

export default RegistrationContext;
