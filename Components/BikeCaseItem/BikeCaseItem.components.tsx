import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';const BikeCaseItem = () => {
  return (
    <Card sx={{ maxWidth: 345 ,maxHeight:"auto"}} >
      <CardActionArea>
        <CardMedia
          component="img"
           image="/logo192.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <div className="dates mt-2 ">
            <span><strong>Stolen:</strong> Aug 22nd</span> &nbsp;&nbsp; <span><strong>Reported:</strong>Oct 22nd</span>
          </div>
          <div className="location mt-1">
          <span><strong>Location:</strong> Innsbruck, 6020, AT</span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BikeCaseItem;
