'use client'
import { useState } from 'react';
import Button from "../Buttom";
import Input from "../Input";
import { Logo } from "../Logo";
import * as Login from './styles';
import { loginUser } from '@/app/(auth)/actions';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { redirect } from 'next/navigation';


export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState<any>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    message: '',
    severity: ''
  });
  const padding = '17rem';

  const handleSubmit = async () => {
      const payload = {
        email,
        senha: password,
      };

      const result = await loginUser(payload);

      if (result) {
        redirect('/minhas-empresas');
      } else {
        setFailedLogin({ ...failedLogin, open: true, message: 'Falha no Login', severity: 'error' });
      }

  };

  return (
    <Login.FormContainer>
      <Logo />

      <Input
        padding={padding}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        type="email"
      >
        Email
      </Input>

      <Input
        padding={padding}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        type="password"
      >
        Senha
      </Input>

      <Button
        color='#0385FD'
        padding={padding}
        onClick={handleSubmit}
      >
        Entrar
      </Button>

      <Button 
        color='#00CC99' 
        padding={padding} 
        onClick={() => redirect('/register')}
      >
        Registrar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: failedLogin.vertical, horizontal: failedLogin.horizontal }}
        open={failedLogin.open}
        autoHideDuration={3000}
        key={`${failedLogin.vertical} + ${failedLogin.horizontal}`}
      >
        <Alert
          severity={failedLogin.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >{failedLogin.message}</Alert>
      </Snackbar>
    </Login.FormContainer>
  );
}
