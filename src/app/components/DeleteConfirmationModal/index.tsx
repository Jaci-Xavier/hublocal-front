'use client'

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

interface DeleteConfirmationModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  itemName: string
  itemType: 'empresa' | 'local'
}

export default function DeleteConfirmationModal({ open, onClose, onConfirm, itemName, itemType }: DeleteConfirmationModalProps) {
  const renderMessage = () => {
    if (itemType === 'empresa') {
      return `A empresa ${itemName} será excluída. Tem certeza dessa ação?`;
    }
    return `O local <strong>${itemName}</strong> será excluído. Tem certeza dessa ação?`;
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          bgcolor: "#e53935",
          color: "white",
          p: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" fontWeight="medium">
          Confirmação de exclusão
        </Typography>
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close" size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 2, pb: 1 }}>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: renderMessage() }} />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, justifyContent: "flex-end" }}>
        <Button onClick={onClose} variant="text" sx={{ color: "text.primary" }}>
          Cancelar
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            bgcolor: "#e53935",
            "&:hover": { bgcolor: "#c62828" },
            minWidth: "80px",
          }}
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  )
}
