import styled from 'styled-components';

export const StyledTableRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid #137956;
  margin-left: 15px;

  .editable-field {
    background-color: #198754;
    color: white;
    padding: 2px 4px;
    margin-bottom: 2px;
    border-radius: 6px;
  }

  @media screen and (min-width: 1100px) {
    display: flex;
    width: 1100px;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-left: 0;

    .editable-field {
      border-radius: 0px;
      background-color: #198754;
      padding: 11px;
    }

    .editable-field:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    .editable-field:nth-child(4) {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-right: 20px;
    }

    p {
      width: 188px;
    }

    p:nth-child(4) {
      padding-right: 120px;
      text-align: end;
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
`;
