"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function PopularUserCard() {
  const [userData, setUserData] = useState([]);
  const userToken = Cookies.get("userToken");
  useEffect(() => {
    axios
      .get("http://localhost:3000/users", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        setUserData(res.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <List sx={{ width: "100%" }}>
      {userData?.map((user) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  <a href={user.username}>
                    {user.name[0].toUpperCase() +
                      user.lastname[0].toUpperCase()}
                  </a>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <a href={user.username}>
                      {user.name} {user.lastname}
                    </a>
                  </>
                }
                secondary={
                  <>
                    {user.bio
                      ? user.bio
                      : "Bu kullanıcı hakkında bir açıklama bulunmamaktadır."}
                  </>
                }
              />
            </ListItem>
          </>
        );
      })}
    </List>
  );
}
