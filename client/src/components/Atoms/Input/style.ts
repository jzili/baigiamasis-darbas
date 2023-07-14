import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  //padding: 0px 20px 0px 20px;
  background-color: white;
  border: none;
  border-radius: 8px;
  align-items: center;

  h1 {
    font-weight: 500;
  }

  p {
    color: #676c7e;
  }

  @media screen and (min-width: 768px) {
    p {
      padding: 0;
    }
  }
`;

export const StyledIconInputDiv = styled.div`
  width: 100%;
  font-size: 16px;
  background-color: #f5f5fa;
  border: 1px solid #137956;
  border-radius: 8px;
  padding-left: 15px;

  i {
    font-size: 14px;
    color: #696969;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #f5f5fa;
  padding: 7px;
  font-size: 1em;
  line-height: 1.5;
`;
