import {
  DataObject,
  Mail,
  MiscellaneousServicesOutlined,
  Notifications,
} from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { flexbox } from '@mui/system';
import React, { useState } from 'react';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  width: '40%',
  borderRadius: theme.shape.borderRadius,
}));
const Icons = styled('box')(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  //meaning small or bigger than small
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const UserBox = styled('box')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  //meaning small or bigger than small
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          AKS
        </Typography>
        <DataObject
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail color='action' />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications color='action' />
          </Badge>
          <Avatar
            src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?cs=srgb&dl=pexels-chloe-1043471.jpg&fm=jpg'
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?cs=srgb&dl=pexels-chloe-1043471.jpg&fm=jpg'
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant='h6'>Akshay</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
