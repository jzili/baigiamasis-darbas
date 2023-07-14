import { useState } from 'react';
import { StyledModal, ModalContent, StyledModalMessage } from './style';
import Button from '../Atoms/Button';
import RegistrationForm from '../Organisms/RegistrationForm';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async () => {
    // Įvykdomas veiksmas - išsiunčiami formos duomenys
    setIsSubmitted(true); // nustatoma isSubmitted į true po sėkmingo pridėjimo
  };

  return (
    <>
      <Button text='Pridėti naują' onClick={openModal} />
      {isOpen && (
        <StyledModal>
          <ModalContent>
            {isSubmitted ? (
              <StyledModalMessage>
                <p>Vartotojas pridėtas sėkmingai!</p>
                <Button text='Uždaryti' onClick={closeModal} />
              </StyledModalMessage>
            ) : (
              <RegistrationForm handleSubmit={handleSubmit} />
            )}
          </ModalContent>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
