import  React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ApiIcon from '@mui/icons-material/Api';



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
  }));


export default function Navbar() {

const [searchvalue, setSearchValue] = useState('');

console.log(searchvalue);

    // const [anchorEl, setAnchorEl] = React.useState(false);
    // const open = Boolean(anchorEl);
    // const handleClick = () => {
    //   setAnchorEl(true);
    // };
    // const handleClose = () => {
    //   setAnchorEl(false);
    // };
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <AppBar position="sticky">
    <Toolbar sx = {{display: "flex", justifyContent: "space-between"}} >

      <Box sx = {{display: "flex", alignItems: "center"}}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        AH Designer
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="div"
        
        sx={{ display: { xs: 'block', sm: 'none' }, fontSize: "20px", marginRight: "30px" }}
      >
        <ApiIcon sx = {{fontSize: "30px" ,marginTop : "5px"}}/>
      </Typography>
      </Box>
<Box>

      <Search>
       <SearchIconWrapper>
          <SearchIcon />
          </SearchIconWrapper>
        <StyledInputBase
        onChange= {(e)=>{return setSearchValue(e.target.value)}}
        value = {searchvalue}
          placeholder="Search…"
        />
      </Search>
      </Box>
     <Box gap={3} sx = {{display: "flex"}}>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        > */}
          
        
          </Box>




          
      {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      
        <Tooltip title="Account settings"> */}
    
          <IconButton
            onClick={handleOpen}
            size="small"
            sx={{ ml: 0 }}
            // aria-controls={open ? 'account-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
          >
           <Avatar  alt="Remy Sharp" src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg" />
          </IconButton>
          </Box>
        {/* </Tooltip>
      </Box> */}
      <Menu
        // anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        sx = {{marginTop: "30px"}}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
             
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
   
        
        
        
        {/* </IconButton> */}



      
      {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
         <Avatar alt="Remy Sharp" src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg" />
        </IconButton>
      </Box> */}
    </Toolbar>
  </AppBar>
  )
}
