import { StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText } from "../../collections/Card/elements"
import SectionBigHeading from "../Typography/SectionBigHeading"
export const PitchComponent = () => {
    return (
      <StyledCardInnerContainer>
          <StyledCardInnerImage>
            <span className="material-symbols-outlined"> handshake </span>
          </StyledCardInnerImage>
          <StyledCardInnerText>
            <SectionBigHeading>
            <h3>Pitch</h3>
            </SectionBigHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui provident.
            </p>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    )
}