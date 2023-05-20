import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Registration from "./pages/Registration";
import { ContentWrapper } from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F6A95F"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper>
        <Registration />
      </ContentWrapper>
    </ThemeProvider>
  );
}

export default App;
