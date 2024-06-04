import {StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText} from "../../collections/Card/elements";
import {SectionParagraph} from "../Typography/SectionParagraph";
import {SectionTinyHeading} from "../Typography/SectionTinyHeading";

export const BriefComponent = () => {
    return (
        <StyledCardInnerContainer>
            <StyledCardInnerImage>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 14 14">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8m-11 2.5h11M3.5 3h2m-2 2.5h1"/>
                        <path d="m8.994 7.506l-3 .54l.5-3.04l4.23-4.21a1 1 0 0 1 1.42 0l1.06 1.06a.998.998 0 0 1 0 1.42z"/>
                    </g>
                </svg>

            </StyledCardInnerImage>
            <StyledCardInnerText>
                <SectionParagraph>
                    Brief
                </SectionParagraph>
                <SectionTinyHeading>
                    Complete
                    <b>brief writing or simple quidiance</b>
                    on what to include, we've got you covered.
                </SectionTinyHeading>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    );
}
