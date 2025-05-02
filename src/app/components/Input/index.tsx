import * as I from './styles';

interface InputProps {
  children?: React.ReactNode;
  padding?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}

export default function Input({ children, padding, value, onChange, type = 'text' }: InputProps) {
  return (
    <I.InputContainer $padding={padding}>
      {children}
      <I.Input type={type} value={value} onChange={onChange} />
    </I.InputContainer>
  );
}
