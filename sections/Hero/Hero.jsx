import Image from "next/image";
import { Card } from "../../collections/Card/Card";
import { StyledCard } from "../../collections/Card/elements";
import { StyledSectionContainer } from "../../components/Containers/SectionContainer/elements";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        
        <StyledSectionContainer topMargin={5}>
      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer> 
          <Card></Card>
        </StyledSectionContainer>
      </StyledTextContainer>
      
    </StyledContainer>
  );
};
