import * as React from 'react';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Middlebar from './components/Middlebar';
import Rightbar from './components/Rightbar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';



function App() {
  return (
    <Box>
   <Navbar />
   
   <Stack direction="row" spacing={2} justifyContent = "space-between" >
   <Leftbar  />    
  <Middlebar/>
<Rightbar/>
</Stack>

</Box>
  );
}

export default App;
