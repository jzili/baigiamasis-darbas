import { useState } from 'react';
import axios from 'axios';
import Button from '../../Atoms/Button';
import { StyledRegistrationForm } from './style';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      surname,
      email,
      age: parseInt(age),
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users',
        formData
      );
      if (response.status === 201) {
        console.log('User has been saved:', response.data.userSaved);

        window.location.reload();
      } else {
        console.log('User is not saved');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setName(name);
    setSurname(surname);
    setEmail(email);
    setAge(age);
  };

  return (
    <StyledRegistrationForm>
      <form onSubmit={onSubmit}>
        <label>
          Vardas
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Pavardė
          <input
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          El. paštas
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Amžius
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <Button type='submit' text='Pridėti naują' onClick={onclick} />
      </form>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
