'use client';
import { useEffect, useState } from "react";
import EmptyList from "../components/EmptyList";
import Layout from "../components/Layout";
import { getEmpresas, createEmpresa, updateEmpresa } from "./actions";
import EmpresaModal from "../components/EmpresaModal";
import CustomPaginationActionsTable from "../components/Table";
import { formatCNPJ } from "../utils/cnpjMask";

type Empresa = {
  id?: string;
  nome: string;
  empresa?: string;
  website: string;
  cnpj: string;
};

const columns = [
  { id: "empresa", label: "Empresa", minWidth: 170 },
  { id: "quantidade", label: "Qt de Locais", minWidth: 100 },
];

export default function MinhasEmpresas() {
  const [data, setData] = useState<Empresa[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [empresaData, setEempresaData] = useState<Empresa>({
    nome: "",
    website: "",
    cnpj: "",
    id: "",
    empresa: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getEmpresas();
      setData(response);
      setLoading(false);

      if (response.data?.length === 0) {
        setIsEmpty(true);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsEditing(false);
    setEempresaData({
      id: "",
      nome: "",
      empresa: "",
      website: "",
      cnpj: "",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddOrUpdateCompany = async () => {
    try {
      if (isEditing) {
        const response = await updateEmpresa(empresaData);
        if (response.status === 200) {
          setData((prev) =>
            prev.map((item) => (item.id === empresaData.id ? response.data : item))
          );
        }
      } else {
        const response = await createEmpresa(empresaData);
        if (response.status === 201) {
          setData((prev) => [...prev, response.data]);
          setIsEmpty(false);
        }
      }
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar empresa:", error);
    }
  };

  return (
    <Layout>
      {isEmpty && (
        <EmptyList
          text="Nenhuma empresa cadastrada!"
          buttonText="Adicionar empresa"
          onClick={handleOpenModal}
        />
      )}

      {!isEmpty && !loading && (
        <CustomPaginationActionsTable 
          data={data} 
          columns={columns} 
          itemType="empresa"
          onClick={handleOpenModal}
          onEdit={(empresa: Empresa) => {
            setEempresaData({ 
              id: empresa.id,
              nome: empresa?.empresa || "",
              website: empresa.website,
              empresa: empresa.empresa,
              cnpj: formatCNPJ(empresa.cnpj),
            });
            setIsEditing(true);
            setIsModalOpen(true);
          }}
        />      
      )}

      <EmpresaModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddOrUpdateCompany}
        empresaData={empresaData}
        setEempresaData={setEempresaData}
        isEditing={isEditing}
      />
    </Layout>
  );
}
