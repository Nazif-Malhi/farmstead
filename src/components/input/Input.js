import styled from "styled-components";

export const InputSearch = styled.input`
  width: 100%;
  height: 40px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background: white;
  border-radius: 12px;
  padding: 0px 0px 5px 35px;
  border: none;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 455px) {
    width: 235px;
  }
  @media screen and (max-width: 345px) {
    width: 150px;
  }
`;
