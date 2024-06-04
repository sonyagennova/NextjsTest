import styled from "styled-components";

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 3rem;
    gap: 4rem;
  }
`;


// This is the container in which are held all of the three cards (Brief, Search and Pitch)
export const StyledCardContainer = styled((props) => <div {...props}/>)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  width: 500px;
  @media screen and (max-width: 1024px) {
    transform: translateX(60px);
    width: 460px;
  }
`;
