'use client';
import EmptyList from "../components/EmptyList";
import Layout from "../components/Layout";
import { Text } from "../components/Text";



export default function MinhasEmpresas() {
  const text = `Nenhuma empresa
cadastrada!`;

  return (
    <Layout>
      <EmptyList>
        <Text
          $fontSize="4.3rem"
          $fontWeight="700"
          $color="#000000"
          $width="700px"
          $textAlign="center"
          $lineHeight="4.6rem"
        >
          {text}
        </Text>
      </EmptyList>
    </Layout>
  );
}