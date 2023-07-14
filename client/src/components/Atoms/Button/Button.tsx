import { StyledButton } from './style';

interface IButtonProps {
  type?: string;
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ type, text, onClick }: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
