'use client'
import { Body } from './style';
import { LocalHubContent } from "./components/LocalHubContent";
import { LoginForm } from "./components/LoginForm";

export default function Home() {
  return (
    <Body>
      <LocalHubContent />
      <LoginForm />
    </Body>
  );
}


