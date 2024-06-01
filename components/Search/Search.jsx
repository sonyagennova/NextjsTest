import { StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText } from "../../collections/Card/elements"

export const SearchComponent = () => {
    return (
      <StyledCardInnerContainer>
          <StyledCardInnerImage>
            <span className="material-symbols-outlined"> handshake </span>
          </StyledCardInnerImage>
          <StyledCardInnerText>
            <h3>Search</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui provident.
            </p>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    )
}