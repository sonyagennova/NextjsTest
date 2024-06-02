import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    max-width: fit-content;
  }
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  font-size: 40px;
  margin: 50px 0 0 0;
  text-align: center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0 0 1.563rem 0;
  text-align: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 300px;
  height: 100%;
  margin-right: auto;
  background-image: url('/img/background.png');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 170%;
  padding-left: 240px; 
  transform: translateX(-120px);
  @media screen and (max-width: 1024px) {
    margin: auto;
  }
`;
