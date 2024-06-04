import styled from "styled-components";

// This is the container which holds the text in one card
export const StyledCardInnerText = styled((props) => <div {...props}/>)`
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

// This is the container which holds all of the elements in a card
export const StyledCardInnerContainer = styled((props) => <div {...props}/>)`
  display: flex;
  height: 110px;
  border-radius: 6px;
  padding: 20px 40px;
  gap: 40px;
  border: 2px white solid;
  :hover p{
    color: #3a6ef7;
    text-decoration: underline;
  }
  :hover{
    border: 2px #3a6ef7 solid;
    cursor: pointer;
  }
`;


// Thhis is the container which holds the icon image of a card
export const StyledCardInnerImage = styled((props) => <div {...props}/>)`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
`;