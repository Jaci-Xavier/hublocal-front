'use client';
import { Div } from "../Div";
import { Header } from "../Header";



export default function Layout({children}: any) {

  return (
    <Div
    width="100vw"
    height="100vh"
    flexDirection="column"
    backgroundColor="rgba(0, 0, 0, 0.050)"
    >
      <Header/>
        {children}
    </Div>
  );
}