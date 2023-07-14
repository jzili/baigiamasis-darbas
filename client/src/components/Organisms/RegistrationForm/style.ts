import styled from 'styled-components';

export const StyledRegistrationForm = styled.div`
  //background-color: #e2e3e5;
  padding: 40px;

  form {
    padding: 22px;
    display: grid;
    grid-template-columns: 170px 170px;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 40px;
  }

  input {
    border: 1px solid #e2e3e5;
    border-radius: 5px;
    line-height: 27px;
    padding-left: 3px;
    font-family: Comfortaa, cursive;
    font-size: 14px;
  }
`;
