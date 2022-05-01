import React from 'react'
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Rightbar() {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
          title: 'Bed',
        },
        {
          img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
          title: 'Books',
        },
        {
          img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
          title: 'Sink',
        },
        {
          img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
          title: 'Kitchen',
        },
        {
          img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
          title: 'Blinds',
        },
        {
          img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
          title: 'Chairs',
        },
        {
          img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
          title: 'Laptop',
        },
        {
          img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
          title: 'Doors',
        },
        {
          img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
          title: 'Storage',
        },
        {
          img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
          title: 'Candle',
        },
        {
          img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
          title: 'Coffee table',
        },
      ];


  return (
    <Box flex = {1} p ={1} sx = {{display: { xs: 'none', md: 'flex' }}}>
        <Box position="fixed">
        <Typography variant="p" sx = {{ fontSize: "1.5rem",fontFamily: 'Raleway'}}>FRIENDS</Typography>

       <AvatarGroup sx = {{ alignItems: "center",marginRight: "30px",  display: "flex", marginTop: "5px", marginBottom: "20px"}} total={20}>
  <Avatar sx={{ height: '25px', width: '25px' }} alt="Remy Sharp" src= "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
  <Avatar sx={{ height: '25px', width: '25px' }} alt="Travis Howard" src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" />
  <Avatar sx={{ height: '25px', width: '25px' }} alt="Agnes Walker" src="https://www.fillmurray.com/250/250" />
  <Avatar sx={{ height: '25px', width: '25px' }} alt="Trevor Henderson" src="http://placebeard.it/250/250" />
  </AvatarGroup>

  <Typography variant="p" sx = {{ fontSize: "1.5rem",fontFamily: 'Raleway'}}>Related POSTS</Typography>


  <Box sx={{ width: 150, height: 350}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

    



        </Box>
    </Box>
  )
}