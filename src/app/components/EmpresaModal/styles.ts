// src/components/AddLocationModal.styles.ts
import styled from "styled-components"
import { DialogTitle, DialogContent, DialogActions } from "@mui/material"

export const StyledDialogTitle = styled(DialogTitle)`
  background-color: #0091FF;
  color: white;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`

export const StyledDialogActions = styled(DialogActions)`
  padding: 16px;
  border-top: 1px solid #eee;
  justify-content: flex-end;
`

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding-top: 4px;
`

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
`

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #0091FF;
  }
`

export const AddButton = styled.button`
  background-color: #0091FF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0077e6;
  }
`
