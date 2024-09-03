import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { BikeData } from "../../app/Api";
import moment from "moment";
type BikeItemData = {
  bike: BikeData;
};
const BikeCaseItem = ({
  bike: { title, year, date_stolen, description, stolen_location, large_img },
}: BikeItemData) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={large_img ?? "/bike_default.jpg"}
          height="140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <div className="dates mt-2 ">
            <span>
              <strong>Reported:</strong>
              {moment.unix(date_stolen).format("MM/DD/YYYY")}
            </span>{" "}
            &nbsp;&nbsp;{" "}
            <span>
              <strong>Stolen:</strong>
              {year}
            </span>
          </div>
          <div className="location mt-1">
            <span>
              <strong>Location:</strong>
              {stolen_location}
            </span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BikeCaseItem;
