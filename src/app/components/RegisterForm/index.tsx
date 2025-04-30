'use client'
import { useState } from "react";
import Button from "../Buttom";
import Input from "../Input";
import { Logo } from "../Logo";
import * as Login from './styles';
import { registerUser } from "@/app/(auth)/register/actions";
import { redirect } from "next/navigation";
import { Alert, Snackbar } from "@mui/material";

export function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [state, setState] = useState<any>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    message: '',
    severity: ''
  });
  const padding = '17rem';

  const handleSubmit = async () => {
    try {
        if (password !== confirmPassword) {
            setState({ ...state, open: true, message: 'Senhas diferentes', severity: 'error' });
            return;
        }

      const payload = {
        email,
        senha: password,
        nome: name,
      };

      const result = await registerUser(payload);

      if (result.status === 201) {
        console.log(result.status, 'entrou no 201');
        setState({ ...state, open: true, message: result.message, severity: 'success' });
        setTimeout(() => {
            redirect('/');
        }, 3000); 
      } else {
        setState({ ...state, open: true, message: result.message, severity: 'error' });
      }

    } catch (error) {
      setState({ ...state, open: true, message: 'Erro ao registrar usuário', severity: 'error' });
    }
  };    
  
  return (
        <Login.FormContainer>
            <Logo />
            <Input 
                padding={padding} 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            >Nome
            </Input>

            <Input 
                padding={padding} 
                type='email' 
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            >Email
            </Input>

            <Input 
                padding={padding} 
                type='password' 
                value={password} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            >Senha
            </Input>

            <Input 
                padding={padding} 
                type='password' 
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            >Repetir Senha
            </Input>

            <Button color='#0385FD' padding={padding} onClick={handleSubmit}>Registrar</Button>
            <Button color='#00CC99' padding={padding} onClick={() => redirect('/')}>Logar</Button>

            <Snackbar
                anchorOrigin={{ vertical: state.vertical, horizontal: state.horizontal }}
                open={state.open}
                autoHideDuration={3000}
                key={`${state.vertical} + ${state.horizontal}`}
            >
            <Alert
                severity={state.severity}
                variant="filled"
                sx={{ width: '100%' }}
            >{state.message}</Alert>
            </Snackbar>
        </Login.FormContainer>
    )
}