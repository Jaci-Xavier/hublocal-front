"use client"
import type React from "react"
import { Dialog, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import {
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  FormRow,
  FormField,
  Label,
  Input,
  AddButton,
} from "./styles"

interface AddLocationModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
  empresaData: empresaData;
  setEempresaData: React.Dispatch<React.SetStateAction<empresaData>>;
  isEditing: boolean;
}


interface empresaData {
  id?: string
  nome: string
  website: string
  cnpj: string
}

export default function EmpresaModal({
  open,
  onClose,
  onAdd,
  empresaData,
  setEempresaData,
  isEditing
}: AddLocationModalProps) {


  const formatCNPJ = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "")
    return onlyNumbers.replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{4})/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const onlyNumbers = value.replace(/\D/g, "")
    const limitedValue = onlyNumbers.slice(0, 14)
    const formattedValue = name === "cnpj" ? formatCNPJ(limitedValue) : value

    setEempresaData(prev => ({
      ...prev,
      [name]: formattedValue,
    }))
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          borderRadius: "8px",
          overflow: "hidden",
        },
      }}
    >
      <StyledDialogTitle>
        <span>{isEditing ? "Editar Empresa" : "Adicionar Empresa"}</span>
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>

      <StyledDialogContent>
        <FormRow>
          <FormField>
            <Label>Nome</Label>
            <Input name="nome" value={empresaData.nome} onChange={handleChange} />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <Label>Website</Label>
            <Input name="website" value={empresaData.website} onChange={handleChange} />
          </FormField>
          <FormField>
            <Label>CNPJ</Label>
            <Input name="cnpj" value={empresaData.cnpj} onChange={handleChange} />
          </FormField>
        </FormRow>
      </StyledDialogContent>

      <StyledDialogActions>
        <AddButton onClick={onAdd}>
          {isEditing ? "Salvar Alterações" : "Adicionar"}
        </AddButton>
      </StyledDialogActions>
    </Dialog>
  )
}
