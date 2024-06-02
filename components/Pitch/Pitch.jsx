import { StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText } from "../../collections/Card/elements"
import {SectionParagraph } from "../Typography/SectionParagraph"
import { SectionTinyHeading } from "../Typography/SectionTinyHeading"
export const PitchComponent = () => {
    return (
      <StyledCardInnerContainer>
          <StyledCardInnerImage>
            <span className="material-symbols-outlined"> handshake </span>
          </StyledCardInnerImage>
          <StyledCardInnerText>
            <SectionParagraph>
            Pitch
            </SectionParagraph>
            <SectionTinyHeading>
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui provident.
            
            </SectionTinyHeading>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    )
}