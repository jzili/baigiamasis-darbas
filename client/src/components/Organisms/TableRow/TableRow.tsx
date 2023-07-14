import { useState } from 'react';
import axios from 'axios';
import Button from '../../Atoms/Button';
import { StyledButtonContainer, StyledTableRow } from './style';
import { IUser } from '../../../types/user';
import swal from 'sweetalert';

interface ITableRowProps {
  rowData: IUser[];
}

const TableRow = ({ rowData }: ITableRowProps) => {
  if (!rowData || rowData.length === 0) {
    return null;
  }

  const [isDeleting, setUsersChanging] = useState(false);
  const [editableUser, setEditableUser] = useState<string | null>(null);

  const handleDeleteUser = async (_id: string) => {
    try {
      setUsersChanging(true);
      await axios.delete(`http://localhost:5000/api/users/${_id}`);
      setUsersChanging(false);
      window.location.reload();
    } catch (error) {
      console.error('Įvyko klaida ištrinant vartotoją:', error);
      setUsersChanging(false);
    }
  };

  const handleClickDelete = async (_id: string) => {
    const confirmed = () =>
      swal('Ar tikrai norite ištrinti?', {
        buttons: ['Atšaukti', 'Taip!'],
      });

    if (await confirmed()) {
      handleDeleteUser(_id);
    }
  };

  const handleSaveUser = async (_id: string) => {
    try {
      setUsersChanging(true);

      // Get the updated values from the contentEditable elements
      const updatedName = document.getElementById(`name_${_id}`)?.textContent;
      const updatedSurname = document.getElementById(
        `surname_${_id}`
      )?.textContent;
      const updatedEmail = document.getElementById(`email_${_id}`)?.textContent;
      const updatedAge = document.getElementById(`age_${_id}`)?.textContent;

      // PUT request to update the user data
      await axios.put(`http://localhost:5000/api/users/${_id}`, {
        name: updatedName,
        surname: updatedSurname,
        email: updatedEmail,
        age: updatedAge,
      });

      setUsersChanging(false);
      setEditableUser(null);
    } catch (error) {
      console.error('Įvyko klaida atnaujinant vartotojo duomenis:', error);
      setUsersChanging(false);
    }
  };

  return (
    <>
      {rowData.map(({ name, surname, email, age, _id }) => (
        <StyledTableRow key={_id}>
          <p
            className={editableUser === _id!.toString() ? 'editable-field' : ''}
            contentEditable={editableUser === _id!.toString()}
            id={`name_${_id}`}
            suppressContentEditableWarning={true}
          >
            {name}
          </p>
          <p
            className={editableUser === _id!.toString() ? 'editable-field' : ''}
            contentEditable={editableUser === _id!.toString()}
            id={`surname_${_id}`}
            suppressContentEditableWarning={true}
          >
            {surname}
          </p>
          <p
            className={editableUser === _id!.toString() ? 'editable-field' : ''}
            contentEditable={editableUser === _id!.toString()}
            id={`email_${_id}`}
            suppressContentEditableWarning={true}
          >
            {email}
          </p>
          <p
            className={editableUser === _id!.toString() ? 'editable-field' : ''}
            contentEditable={editableUser === _id!.toString()}
            id={`age_${_id}`}
            suppressContentEditableWarning={true}
          >
            {age}
          </p>
          <StyledButtonContainer>
            {editableUser === _id?.toString() ? (
              <>
                <Button text='Išsaugoti' onClick={() => handleSaveUser(_id!)} />
                <Button text='Atšaukti' onClick={() => setEditableUser(null)} />
              </>
            ) : (
              <>
                <Button
                  text='Redaguoti'
                  onClick={() => setEditableUser(_id!)}
                />
                <Button
                  text='Ištrinti'
                  onClick={() => handleClickDelete(_id!)}
                  disabled={isDeleting}
                />
              </>
            )}
          </StyledButtonContainer>
        </StyledTableRow>
      ))}
    </>
  );
};

export default TableRow;
