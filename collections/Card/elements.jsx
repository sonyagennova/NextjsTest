import styled from "styled-components";

export const StyledCardInnerText = styled((props) => <div {...props}/>)`
  flex-direction: column;
  justify-content: center;
  display: flex;
  
`;

export const StyledCardInnerContainer = styled((props) => <div {...props}/>)`
  display: flex;
  height: 110px;
  border-radius: 6px;
  padding: 20px 40px;
  gap: 40px;
  border: 2px white solid;
`;

export const StyledCardInnerImage = styled((props) => <div {...props}/>)`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
`;