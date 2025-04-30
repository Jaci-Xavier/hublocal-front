'use client';
import { LocalHubContent } from '@/app/components/LocalHubContent';
import { Body } from './styles';
import { RegisterForm } from '../../components/RegisterForm';


export default function Register() {

  return (
    <Body>
      <LocalHubContent />
      <RegisterForm />
    </Body>
  );
}


