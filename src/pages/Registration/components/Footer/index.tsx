import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import logo from "../../../../assets/images/logo.png";
import { FooterWrapper, LinksWrapper, StyledTypography, RightsWrapper } from "./styles";

function Footer() {
  return (
    <Grid container>
      <Grid xs={12}>
        <FooterWrapper>
          <img src={logo} alt="" />
          <LinksWrapper>
            <Link to="/" target="_blank">
              Terms
            </Link>
            <span>|</span>
            <Link to="/" target="_blank">
              Policy
            </Link>
            <span>|</span>
            <Link to="/" target="_blank">
              Cookie Policy
            </Link>
            <span>|</span>
            <Link to="/" target="_blank">
              Help Center
            </Link>
          </LinksWrapper>
          <RightsWrapper>
            <StyledTypography>© 2023 Intim Florts | All Rights Reserved.</StyledTypography>
          </RightsWrapper>
        </FooterWrapper>
      </Grid>
    </Grid>
  );
}

export default Footer;
