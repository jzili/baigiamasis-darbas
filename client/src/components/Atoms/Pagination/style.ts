import styled from 'styled-components';

export const StyledPaginationContainer = styled.ul`
  @media screen and (min-width: 500px) {
    list-style: none;
    display: flex;
    margin-top: 45px;
  }

  @media screen and (min-width: 1100px) {
    list-style: none;
    display: flex;
    margin-top: 0px;
  }
`;

export const StyledPaginationItem = styled.li`
  list-style: none;
  display: flex;
  border-radius: 6px;
  padding: 2px;
`;

export const StyledPaginationButton = styled.button`
  display: flex;
  padding: 4px 5px 4px 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #198754;

  &.active {
    background-color: #198754;
    color: #fff;
  }
`;
