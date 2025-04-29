import * as I from './styles';

export default function Input({children, padding}: any) {
    
    return (
        <I.InputContainer padding={padding}>
            {children}
            <I.Input type="text"/>
        </I.InputContainer>
    );
}