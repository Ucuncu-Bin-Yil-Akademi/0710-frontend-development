import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ExploreIcon from "@mui/icons-material/Explore";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function NavMenu() {
  const navItems = [
    {
      icon: <HomeIcon />,
      text: "Inbox",
    },
    {
      icon: <ModeCommentIcon />,
      text: "Drafts",
    },
    {
      icon: <ExploreIcon />,
      text: "Explore",
    },
    {
      icon: <LiveTvIcon />,
      text: "Live TV",
    },
    {
      icon: <BookmarkIcon />,
      text: "Bookmarks",
    },
  ];
  return (
    <>
      <div className="">
        <nav aria-label="main mailbox folders">
          <List>
            {navItems.map((item, index) => {
              return (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </div>
    </>
  );
}
