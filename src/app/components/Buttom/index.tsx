import * as B from './styles';

export default function Button({ children, color, padding, width, type = "button", onClick }: any) {
    return (
      <B.ButtonContainer padding={padding} width={width}>
        <B.Button type={type} color={color} onClick={onClick} >
          {children}
        </B.Button>
      </B.ButtonContainer>
    );
  }
  