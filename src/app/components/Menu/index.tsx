import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import perfil from '../../assets/pefil.png';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={4}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    minWidth: 150,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 4px 20px',
    '& .MuiMenuItem-root:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
  },
}));

export default function AvatarMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    console.log('Deslogado');
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          padding: '0.5rem',
        }}
      >
        <Avatar
          alt="Janiu"
          src={perfil.src}
          sx={{ 
            width: 54, 
            height: 54,
        }}
        />
        <Typography fontWeight="bold" style={{fontSize: '1.3rem', fontWeight: '600', color: 'black'}}>Janiu</Typography>
        <KeyboardArrowDownIcon style={{ fontSize: '2rem', color: '#575656' }} />
      </Box>

      <StyledMenu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Deslogar</MenuItem>
      </StyledMenu>
    </>
  );
}
