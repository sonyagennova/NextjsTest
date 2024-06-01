import { BriefComponent } from "../../components/Brief"
import { StyledBriefComponent } from "../../components/Brief/elements"
import { StyledCardContainer } from "../../components/Containers/SectionContainer/elements"
import { PitchComponent } from "../../components/Pitch"
import { StyledPitchComponent } from "../../components/Pitch/elements"
import { SearchComponent } from "../../components/Search"
import { StyledSearchComponent } from "../../components/Search/elements"

// The Card to be exported goes here
export const Card = () => {
    return (
        <>
            <StyledCardContainer>
                <StyledBriefComponent><BriefComponent/></StyledBriefComponent>
                <StyledSearchComponent><SearchComponent/></StyledSearchComponent>
                <StyledPitchComponent><PitchComponent/></StyledPitchComponent>
            </StyledCardContainer>
        </>
    )
}