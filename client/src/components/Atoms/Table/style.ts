import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 500px;
  padding: 60px 40px 0 40px;
  margin: 0 auto;

  @media screen and (min-width: 1100px) {
    width: 1100px;
    padding: 60px 40px 0 40px;
    margin: 0 auto;
  }
`;

export const StyledTableContainer = styled.div`
  //border: 2px solid #e2e3e5;
  //border: 1px solid #137956;
  border-radius: 8px;
  //overflow-x: auto;
  width: 100%;
  max-width: 1100px;
  height: 85%;
`;
