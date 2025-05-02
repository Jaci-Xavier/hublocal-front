'use client';
import { useEffect, useState } from "react";
import EmptyList from "@/app/components/EmptyList";
import Layout from "@/app/components/Layout";
import CustomPaginationActionsTable from "@/app/components/Table";
import { redirect, useParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getLocais, createLocal, updateLocal } from './actions'
import { Div } from "@/app/components/Div";
import LocalModal from "@/app/components/LocalModal";

type Local = {
    id?: string;
    empresaId: string;
    nome: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
};

const columns = [
  { id: "local", label: "Local", minWidth: 170 },
];

export default function MeusLocais() {
  const params = useParams();
  const IdEmpresa = params.id_empresa as string;

  const [data, setData] = useState<Local[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [localData, setLocalData] = useState<Local>({
    id: "",
    empresaId: IdEmpresa,
    nome: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {
    const fetcData = async () => {
        setLoading(true);
        const response = await getLocais(IdEmpresa);
        setData(response.data);
        setLoading(false);

        if (response.data?.length === 0) {
            setIsEmpty(true);
        }
        else {
            setIsEmpty(false);
        }
    }
    fetcData();
  }, [IdEmpresa]);

  const handleOpenModal = () => {
    setIsEditing(false);
    setLocalData({
        id: "",
        empresaId: IdEmpresa,
        nome: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddOrUpdateLocal = async () => {
    try {
      if (isEditing) {
        await updateLocal(IdEmpresa, localData.id as string, localData);
      } else {
        await createLocal(localData);
      }
  
      const response = await getLocais(IdEmpresa);
      setData(response.data);
      setIsEmpty(response.data.length === 0);
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar local:", error);
    }
  };
  

  return (
    <Layout>
      {isEmpty && (
         <Div
         backgroundColor='rgba(245, 245, 245, 1)'
         flexDirection="row"
         justifyContent="start"
         padding="1rem"
         onClick={() => redirect('/minhas-empresas')}
         >
             <ArrowBackIcon
                 sx={{
                 cursor: "pointer",
                 fontSize: "2rem",
                 marginLeft: "2rem",
                 color: "rgba(77, 77, 77, 1)",
                 }}
             />
             <span style={{ marginLeft: "1rem", fontSize: "1.5rem", color: "rgba(77, 77, 77, 1)" }}>Minhas Empresas</span>
 
         </Div>
      )}
      {isEmpty && !loading && (
        <EmptyList
          text="Nenhum local cadastrado!"
          buttonText="Adicionar local"
          onClick={handleOpenModal}
        />
      )}

      {!isEmpty && !loading && (
        <CustomPaginationActionsTable 
          data={data} 
          columns={columns} 
          route={'local'} 
          itemType="local"
          onClick={handleOpenModal}
          onEdit={(local: Local) => {
            setLocalData({
                id: local.id,
                empresaId: local.empresaId,
                nome: local.nome,
                cep: local.cep,
                rua: local.rua,
                numero: local.numero,
                bairro: local.bairro,
                cidade: local.cidade,
                estado: local.estado,
            });
            setIsEditing(true);
            setIsModalOpen(true);
          }}
        />      
      )}

      <LocalModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddOrUpdateLocal}
        locationData={localData}
        setLocationData={setLocalData}
        isEditing={isEditing}
      />
    </Layout>
  );
}
