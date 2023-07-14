import styled from 'styled-components';

export const StyledTableHeading = styled.div`
  display: none;

  @media screen and (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    max-width: 750px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  p {
    width: 188px;
  }

  p:nth-child(4) {
    width: 178px;
  }
`;
