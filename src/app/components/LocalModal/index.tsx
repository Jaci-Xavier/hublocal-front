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
  locationData: LocalData;
  setLocationData: React.Dispatch<React.SetStateAction<LocalData>>;
  isEditing: boolean;
}

interface LocalData {
  id?: string;
  empresaId: string;
  nome: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export default function LocalModal({ 
  open, 
  onClose,
  onAdd,
  locationData,
  setLocationData,
  isEditing
 }: AddLocationModalProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocationData((prev) => ({
      ...prev,
      [name]: value,
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
        <span>{isEditing ? "Editar local" : "Adicionar local"}</span>
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>

      <StyledDialogContent>
        <FormRow>
          <FormField>
            <Label>Nome</Label>
            <Input name="nome" value={locationData.nome} onChange={handleChange} />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <Label>CEP</Label>
            <Input name="cep" value={locationData.cep} onChange={handleChange} />
          </FormField>
          <FormField>
            <Label>Rua</Label>
            <Input name="rua" value={locationData.rua} onChange={handleChange} />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <Label>Número</Label>
            <Input name="numero" value={locationData.numero} onChange={handleChange} />
          </FormField>
          <FormField>
            <Label>Bairro</Label>
            <Input name="bairro" value={locationData.bairro} onChange={handleChange} />
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <Label>Cidade</Label>
            <Input name="cidade" value={locationData.cidade} onChange={handleChange} />
          </FormField>
          <FormField>
            <Label>Estado</Label>
            <Input name="estado" value={locationData.estado} onChange={handleChange} />
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
