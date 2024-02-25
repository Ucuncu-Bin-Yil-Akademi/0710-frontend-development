import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MuiCard() {
  return (
    <Card>
      <CardHeader
        sx={{
          maxWidth: "500px",
        }}
        avatar={
          <Avatar className="bg-orange-500" aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<h2 className="bg-red-300 text-xl p-1 rounded">Hello world</h2>}
        subheader="September 14, 2016"
      />
      <div className="flex">
        <CardMedia
          component="img"
          height="500"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
          sx={{
            margin: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            maxWidth: "200px",
          }}
        />
        <CardContent
          sx={{
            maxWidth: "200px",
          }}
        >
          <p>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </p>
        </CardContent>
      </div>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
