'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { deleteEmpresa } from '@/app/minhas-empresas/actions';
import { deleteLocal } from '@/app/meus-locais/[id_empresa]/actions';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
import { redirect } from 'next/navigation';
import { Div } from '../Div';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface StickyHeadTableProps {
  data: any[];
  columns: any[];
  route: string;
  onClick: () => void;
  onEdit: (empresa: any) => void;
  itemType: 'empresa' | 'local'; 
}


export default function StickyHeadTable({ data, columns, route, onClick, onEdit, itemType }: StickyHeadTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataValues, setDataValues] = React.useState(data);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState<any>(null);

  React.useEffect(() => {
    setDataValues(data);
  }, [data]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleGoLocal = (id: string) => {
    redirect(`/meus-locais/${id}`);
  }

  const handleDelete = async (id: string) => {
    const response = itemType === 'empresa'
      ? await deleteEmpresa(id)
      : await deleteLocal(itemToDelete?.empresaId, itemToDelete?.id);

    let newData = [...dataValues];

    if (response.status === 200) {
      alert(response.message);
      newData = dataValues.filter((item) => item.id !== id);
    }

    setDataValues(newData);
    setOpenDeleteModal(false);
  };

  const openDeleteDialog = (item: any) => {
    setItemToDelete(item);
    setOpenDeleteModal(true);
  };

  return (
    <Paper sx={{ 
        minHeight: 'calc(100vh - 8vh)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        backgroundColor: 'rgba(245, 245, 245, 1)',
        overflow: 'hidden',
        position: 'relative',
         }}>
      {itemType === 'local' && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'start',
            position: 'absolute',
            top: '2rem',
          }}
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
  
        </div>
      )}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        marginBottom: '1rem',
      }}>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#007BFF' }} 
          onClick={onClick}
        >
          {itemType === 'empresa' ? 'Adicionar Empresa' : 'Adicionar Local'}
        </Button>
      </div>
      <div
        style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E0E0E0',
        }}
      >
        <TableContainer sx={{maxHeight: 400, minHeight: 400, backgroundColor: 'white'}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell style={{ textAlign: 'center'}}>
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataValues?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={`${row.id}-${column.id}`} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell colSpan={3} style={{ textAlign: 'center', gap: '1rem', flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                        <EditIcon 
                          sx={{ color: 'black', cursor: 'pointer' }} 
                          onClick={() => onEdit(row)}
                        />
                        {itemType === 'empresa' && (
                          <PinDropIcon sx={{ color: 'black', cursor: 'pointer'}} onClick={() => handleGoLocal(row.id)}/>
                        )}
                        <DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={() => openDeleteDialog(row)} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{
              overflow: 'hidden',
              backgroundColor: 'white',
              borderTop: '1px solid #E0E0E0',
          }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={dataValues?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      <DeleteConfirmationModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => handleDelete(itemToDelete?.id)}
        itemName={itemToDelete?.empresa || itemToDelete?.local || 'item'}
        itemType={itemType}
      />
    </Paper>
  );
}
