import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoPerson } from "react-icons/io5";
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, ListSubheader } from '@mui/material';
import data from '../../amazon_products.json'


export default function SideBar({open , setOpen}) {
    const category = data[0].categories;


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
        <div className='bg-[#232F3E] px-5 text-white gap-4 py-6 flex items-center'>
         <IoPerson className='text-xl'/>
         <p className='text-xl '>Hello</p>
        </div>

      <List>
      <ListSubheader sx={{
            color: 'black',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: 'white',
      }}>Shope by Categories</ListSubheader> {/* Header for the first list */}
        {category.map((text) => (
          <ListItem key={text}  sx={{color:'#444'}} disablePadding>
            <ListItemButton >            
              <ListItemText primary={text} />
              <ListItemIcon>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      <ListSubheader sx={{
            color: 'black',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: 'white',
      }}>Help & Settings</ListSubheader> {/* Header for the first list */}
          <ListItem  disablePadding sx={{color:'#444'}}>
            <ListItemButton >            
              <ListItemText primary={"Your Account"} />
              <ListItemIcon>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding sx={{color:'#444'}}>
           <ListItemButton >            
             <ListItemText primary={"Sign in"} />
             <ListItemIcon>
             </ListItemIcon>
           </ListItemButton>
         </ListItem>
            
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
