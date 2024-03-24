"use client";
import { useState } from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "@/public/logo.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [settingModalOpen, setSettingsModalOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenSettingsModal = () => {
    setSettingsModalOpen(true);
    handleClose();
  };

  const handleCloseSettingsModal = () => {
    setSettingsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center border-b-2 p-6 justify-between">
        {/* Begin:: LOGO */}
        <Link href="/" alt="Ana sayfa">
          <Image src={Logo} alt="" />
        </Link>
        {/* End:: LOGO */}

        {/* Begin:: Search Input */}
        <div className="w-full flex justify-center">
          <TextField
            id="input-with-icon-textfield"
            style={{
              width: "50%",
            }}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        {/* End:: Search Input */}

        {/* Begin:: Action Buttons */}
        <div className="flex items-center">
          <IconButton className={styles.iconButton}>
            <HeadsetMicIcon />
          </IconButton>

          <IconButton className={styles.iconButton}>
            <NotificationsIcon />
          </IconButton>

          <span className="ml-10 mr-3 font-semibold text-lg">Vinc.rangga</span>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleOpenSettingsModal}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        {/* End:: Action Buttons */}
      </div>

      <Dialog
        open={settingModalOpen}
        onClose={handleCloseSettingsModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSettingsModal}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
