'use client';
import { LocalHubContent } from "../components/LocalHubContent";
import { LoginForm } from "../components/LoginForm";
import { Body } from "./style";

export default function Home() {
  return (
    <Body>
      <LocalHubContent />
      <LoginForm />
    </Body>
  );
}


