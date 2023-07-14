import {
  StyledPaginationButton,
  StyledPaginationContainer,
  StyledPaginationItem,
} from './style';

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  usersPerPage,
  totalUsers,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPaginationContainer>
      {pageNumbers.map((number) => (
        <StyledPaginationItem key={number}>
          <StyledPaginationButton
            onClick={() => paginate(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </StyledPaginationButton>
        </StyledPaginationItem>
      ))}
    </StyledPaginationContainer>
  );
};
export default Pagination;
