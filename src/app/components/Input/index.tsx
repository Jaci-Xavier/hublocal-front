import * as I from './styles';

export default function Input({ children, padding, value, onChange, type }: any) {
    return (
      <I.InputContainer $padding={padding}>
        {children}
        <I.Input type={type || 'text'} value={value} onChange={onChange} />
      </I.InputContainer>
    );
  }