import { useState } from 'react';
import { StyledInputWrapper, StyledIconInputDiv, StyledInput } from './style';

function Input({
  onFilter,
}: {
  onFilter: (query: string) => void;
  searchResults: number | null;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setInputValue(query);
    onFilter(query);
  };

  return (
    <StyledInputWrapper>
      <StyledIconInputDiv>
        <i className='fa-solid fa-magnifying-glass'></i>
        <StyledInput
          type='text'
          placeholder='Paieška...'
          value={inputValue}
          onChange={handleInputChange}
        />
      </StyledIconInputDiv>
    </StyledInputWrapper>
  );
}

export default Input;
