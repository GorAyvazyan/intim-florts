import React from "react";
import { Container, Grid } from "@mui/material/";
import {
  Chat as ChatIcon,
  PersonOutline as PersonOutlineIcon,
  SavedSearch as SavedSearchIcon,
  CalendarMonth as CalendarMonthIcon
} from "@mui/icons-material";
import { SectionWrapper, StyledProfile, ProfileWrapper, StyledDescription } from "./styles";

function InfoSection() {
  return (
    <Container>
      <SectionWrapper>
        <Grid container spacing={[2, 6]} justifyContent="center">
          <Grid item xs={6} md={3}>
            <ProfileWrapper>
              <StyledProfile>
                <ChatIcon />
              </StyledProfile>
              <StyledDescription>Exchange meaningful conversation</StyledDescription>
            </ProfileWrapper>
          </Grid>
          <Grid item xs={6} md={3}>
            <ProfileWrapper>
              <StyledProfile>
                <PersonOutlineIcon />
              </StyledProfile>
              <StyledDescription>
                Singles revealing their true self through detailed profiles
              </StyledDescription>
            </ProfileWrapper>
          </Grid>
          <Grid item xs={6} md={3}>
            <ProfileWrapper>
              <StyledProfile>
                <SavedSearchIcon />
              </StyledProfile>
              <StyledDescription>A powerful search tool with detailed filtration</StyledDescription>
            </ProfileWrapper>
          </Grid>
          <Grid item xs={6} md={3}>
            <ProfileWrapper>
              <StyledProfile>
                <CalendarMonthIcon />
              </StyledProfile>
              <StyledDescription>
                Themed events that create exciting dating occasions
              </StyledDescription>
            </ProfileWrapper>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Container>
  );
}

export default InfoSection;
