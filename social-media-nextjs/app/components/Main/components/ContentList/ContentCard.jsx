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
import { dateFormatter } from "@/app/utils/dateFormatter";

export default function ContentCard({
  summary,
  imageUrl,
  firstname,
  lastname,
  createdOn,
  likes,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{firstname[0]}</Avatar>}
        title={`${firstname} ${lastname}`}
        subheader={dateFormatter(createdOn)}
      />
      {imageUrl && (
        <CardMedia
          component="img"
          className="object-cover"
          image={
            "https://wuubi-media.s3.eu-central-1.amazonaws.com/" + imageUrl
          }
          alt="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        className="flex justify-end items-center bg-gray-100"
      >
        <span>{likes} beğeni</span>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
