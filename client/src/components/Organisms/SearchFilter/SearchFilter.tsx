import { useState, useEffect } from 'react';

import Input from '../../Atoms/Input';
import TableHeading from '../../Atoms/TableHeading';
import TableRow from '../TableRow';
import Modal from '../../Modal';
import { StyledTable, StyledTableContainer } from '../../Atoms/Table/style';
import Pagination from '../../Atoms/Pagination';

interface User {
  _id?: string;
  name: string;
  surname: string;
  email: string;
  age: number;
  [key: string | number]: any;
}

function SearchFilter() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(9);

  const [searchResults, setSearchResults] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data: User[] = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  const filterUsers = (query: string) => {
    const keys = ['name', 'surname', 'email', 'age'];
    const filteredUsers = users.filter((user) =>
      keys.some((key) => {
        const value = user[key];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(query.toLowerCase());
        } else if (typeof value === 'object' && value !== null) {
          return Object.values(value).some((val: any) =>
            val.toString().toLowerCase().includes(query.toLowerCase())
          );
        } else if (typeof value === 'number') {
          return value.toString().toLowerCase().includes(query.toLowerCase());
        }
        return false;
      })
    );
    setFilteredUsers(filteredUsers);
    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='styledDiv'>
        <h1>Registruotų vartotojų sąrašas</h1>
        <Input onFilter={filterUsers} searchResults={searchResults} />
        <Modal />
      </div>
      <StyledTableContainer>
        <StyledTable>
          <TableHeading />
          <TableRow rowData={currentUsers} />
        </StyledTable>
      </StyledTableContainer>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}

export default SearchFilter;
