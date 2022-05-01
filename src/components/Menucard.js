import React, {useState} from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
// import { styled } from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';


import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';


import { Checkbox } from '@mui/material';
export default function Menucard(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card  sx = {{marginTop: "30px"}}>
        
    <CardHeader
      avatar={
        <Avatar sx={{  bgcolor: red[500] }} aria-label="recipe">
        {props.fname}
        </Avatar>
      }
    
      action={
   
        <Button
        id="basic-button"
        aria-haspopup="true"
        onClick={handleOpen}
      >
          <MoreVertIcon/>
          </Button>
          
          
      //     <Menu
      //   id="basic-menu"
      //   open={open}
      //   onClose={handleClose}
      //   sx = {{marginLeft: "50px"}}
      //   MenuListProps={{
      //     'aria-labelledby': 'basic-button',
      //   }}
      // >
      //   <MenuItem onClick={handleClose}>
      // <Button  onClick={()=>{props.dclick(props.idd)}} >Delete</Button>
      // </MenuItem>
      //   {/* <MenuItem onClick={handleClose}>My account</MenuItem>
      //   <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      // </Menu>
        

  
      }

      title={props.name}
      subheader={props.currdate}
    />







    <CardMedia
      component="img"
      height="220"
      image= {props.image}
      alt="image"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {props.des}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder  />} checkedIcon={<Favorite sx = {{color: "red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton aria-label="share">
        <DeleteOutlineRoundedIcon onClick={()=>{props.dclick(props.idd)}}/>
      </IconButton>
     
    </CardActions>
    
  </Card>
  )
}
