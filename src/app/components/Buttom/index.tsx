import * as B from './styles';

export default function Button({children, color, padding}: any) {
    return (
        <B.ButtonContainer padding={padding}>
            <B.Button type="button" color={color}>{children}</B.Button>
        </B.ButtonContainer>
    );
}