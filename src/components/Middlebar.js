import React, {useState, useEffect} from 'react';
import Postsdata from './Postsdata';
import Menucard from './Menucard';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Fab, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';


const getLocalItems = ()=>{
  let list = localStorage.getItem('posts');
  console.log(list);
if(list){
  return JSON.parse(localStorage.getItem('posts'));
}
else{
  return [];
}
}

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function Middlebar() {
  const [data, setData] = useState(getLocalItems());
// const [somedata, setSomeData] = useState(Postsdata);

const [open, setOpen] = useState(false);
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};


const [vall, setVall] = useState({
  name: "",
  description: "",
  imageurl: ""
  });



  const vallChange = (e)=>{
    const {name, value} = e.target;
      setVall((preValue)=>{
      return{ ...preValue,
       [name] : value
      }
      
      });
  }




  const addEvent = ()=>{
    if(vall.name == "" && vall.description == "" && vall.imageurl == ""){
    alert("please Fill All the Fields... Thankyou!!!");
    }
    
    else{
    const alldata = { name: vall.name, description: vall.description, imageurl: vall.imageurl}
            setData([...data, alldata]);
            setVall({
              name: "",
              description: "",
              imageurl: ""
              });
        }
        setOpen(false);
        }


        useEffect(() => {
          localStorage.setItem('posts' , JSON.stringify(data))
        }, [data]);
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

        const datee = new Date;
        const d = monthNames[datee.getMonth()] + " " + datee.getDate()  + ", " + datee.getFullYear(); 

        const clickEventDelete = (id)=>{
          const updateditems = data.filter((vali,ind)=>{
  return id !== ind;
          });
          setData(updateditems);
          }


  return (
<>
    <div>
    <Box position= "fixed">
    <Fab color="primary" aria-label="add" sx = {{position: 'absolute' ,top: '75vh', left: { xs: '-2px', sm: '-130px', md: '-160px' } }} onClick={handleOpen}>
      <Add />
    </Fab>
    </Box>
    
            {/* <Button sx = {{position: 'absolute' ,top: '75vh', left: '0px', }} onClick={handleOpen}>Open modal</Button> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
              
            >
              <Box sx={{ ...style, width:{ sm: 450, xs: 200, md: 650  }  }}>
                <h2 id="parent-modal-title"> Create New Post </h2>
                {/* <p id="parent-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p> */}
                 <TextField onChange={vallChange}  value = {vall.name} name = "name" id="standard-basic" label="Enter Full Name" sx = {{width: "90%", marginBottom: "10px"}} variant="standard" />
                 <TextField
                 onChange={vallChange}  value = {vall.description} name = "description"
              id="outlined-multiline-static"
              label="Description"
              sx = {{width: "90%", marginTop: "25px"}}
    
              multiline
              rows={4}
              // defaultValue="Default Value"
            />
             <TextField onChange={vallChange}  value = {vall.imageurl} name = "imageurl" id="standard-basic" label="Image URL" sx = {{width: "90%", marginBottom: "30px", marginTop: "10px"}} variant="standard" />
                <Button onClick={addEvent} >Create</Button>
                <Button onClick={handleClose}>Cancel</Button>
                
              </Box>
            </Modal>
          </div>







    <Box flex = {4} p ={2} >
      
    {/* {
          somedata.map((valll, index)=>{
              
           return   <Menucard key ={index} name = {valll.name} currdate = {valll.date} des = {valll.description} image = {valll.img} />
          })
      } */}


      {
          data.map((val, index)=>{
              
           return   <Menucard idd = {index} key ={index} currdate = {d}  name = {val.name} des = {val.description} fname = {val.name .split(' ') .map(word => word[0])
           .join('')} image = {val.imageurl} dclick = {clickEventDelete}  />
          })
      }
     
    </Box>
    </>
  )
}