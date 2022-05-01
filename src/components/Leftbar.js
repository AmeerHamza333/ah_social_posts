import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react';
import Box from '@mui/material/Box';
// import PostModal from './PostModal';
import {Home, ContactPage, Groups, AddBusiness, Group, Settings, Face, Book} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
// const ListItemStyle = styled(ListItemText)(({ theme }) => ({
//     fontSize: theme.typography.body1.fontSize,
//   }));

export default function Leftbar() {
  return (
    <>
    <Box  flex = {1} p ={1} sx = {{display: { xs: 'none', sm: 'flex' }}}>
         <Box position= "fixed">
    <List>
    <ListItem disablePadding>
      <ListItemButton>
        
          <Home sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}}/>
        
           <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Home</Typography>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        
          <ContactPage sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}}/>
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Pages</Typography>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton>
        
          <Groups sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}} />
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Groups</Typography>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton>
        
          <AddBusiness sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}} />
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Marketing</Typography>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton>
        
          <Group sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}}/>
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Friends</Typography>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton>
        
          <Settings sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}}/>
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Settings</Typography>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton>
        
          <Face sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}}/>
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Profiles</Typography>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton>
        
          <Book sx = {{fontSize: { xs: 'medium', md: 'large' }, marginRight: { xs: '10px', md: '30px' }}} />
        
        <Typography sx = {{fontSize: { xs: '14px', md: '16px' }}}>Blogs</Typography>
      </ListItemButton>
    </ListItem>

    </List>

    
    </Box>
    </Box>
   
    </>
  )
}
