'use client';
import { useEffect, useState } from "react";
import EmptyList from "../components/EmptyList";
import Layout from "../components/Layout";
import { Text } from "../components/Text";
import { getEmpresas } from "./actions";

export default function MinhasEmpresas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [children, setChildren] = useState({
    text: 'Nenhuma empresa cadastrada!',
    buttonText: 'Adicionar empresa',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getEmpresas();
      setData(response.data);
      setLoading(false);

      if (response.status === 204) {
        setIsEmpty(true);
      }
    }
    fetchData();
  }
  , []);

  return (
    <Layout>
      { isEmpty == true && <EmptyList>{children}</EmptyList> }
    </Layout>
  );
}