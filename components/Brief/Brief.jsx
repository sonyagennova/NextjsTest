import { StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText } from "../../collections/Card/elements"
import { SectionParagraph } from "../Typography/SectionParagraph"
import { SectionTinyHeading } from "../Typography/SectionTinyHeading"

export const BriefComponent = () => {
    return (
        <StyledCardInnerContainer>
          <StyledCardInnerImage>
            <span className="material-symbols-outlined"> handshake </span>
          </StyledCardInnerImage>
          <StyledCardInnerText>
            <SectionParagraph>
            Brief
            </SectionParagraph>
            <SectionTinyHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui provident.
            </SectionTinyHeading>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    )
}