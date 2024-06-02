import { StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText } from "../../collections/Card/elements"
import { SectionParagraph } from "../Typography/SectionParagraph"
import { SectionTinyHeading } from "../Typography/SectionTinyHeading"

export const SearchComponent = () => {
    return (
      <StyledCardInnerContainer>
          <StyledCardInnerImage>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="currentColor" d="M6.5 4A4.5 4.5 0 0 0 2 8.5v7.91a7.5 7.5 0 0 1 2-1.286V8.5A2.5 2.5 0 0 1 6.5 6h19A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5H14.536l1.732 1.732q.127.128.232.268h9a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zm3.198 11a7.5 7.5 0 0 1 2.892 2H22a1 1 0 1 0 0-2zM19 22h-4.5c0-.693-.094-1.363-.27-2H19a1 1 0 1 1 0 2M8 11a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M7 28c1.296 0 2.496-.41 3.476-1.11l3.317 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 7 28m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"/></svg>
          </StyledCardInnerImage>
          <StyledCardInnerText>
            <SectionParagraph>
            Search
            </SectionParagraph>
            <SectionTinyHeading>
              In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.
            </SectionTinyHeading>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    )
}