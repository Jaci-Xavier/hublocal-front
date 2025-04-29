'use client'
import Button from "../Buttom";
import Input from "../Input";
import { Logo } from "../Logo";
import * as Login from './styles';

export function RegisterForm() {
    const padding = '17rem'
    return (
        <Login.FormContainer>
            <Logo />
            <Input padding={padding}>Nome</Input>
            <Input padding={padding}>Senha</Input>
            <Input padding={padding}>Senha</Input>
            <Input padding={padding}>Repetir Senha</Input>
            <Button color='#0385FD' padding={padding}>Registrar</Button>
            <Button color='#00CC99' padding={padding}>Logar</Button>
        </Login.FormContainer>
    )
}