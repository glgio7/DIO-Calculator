import styled from "styled-components";

export const ButtonContainer = styled.button`
  flex: 1;

  padding: 20px;
  margin: 3px;

  cursor: pointer;
  
  border: none;
  border-radius: 6px;
  
  background-color: #f08000;
  color: #ffffff;
  
  font-size: 24px;
  font-weight: 700;
  
  transition: all ease-in-out 200ms;

  &:hover {
    background-color: rgba(240, 128, 0, 0.75);
  }

  &:nth-of-type(4n) {
    background-color: #252525;

    &:hover {
      background-color: rgba(25, 161, 240, 0.85);
    }
  }
`;
