"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
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
import DialogTitle from "@mui/material/DialogTitle";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { searchValueAtom } from "@/app/atoms/searchAtom";
import { useAtom } from "jotai";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [settingModalOpen, setSettingsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);

  const [loggedUserInfo, setLoggedUserInfo] = useState({
    name: "",
    lastname: "",
    username: "",
  });

  const [newUserInfo, setNewUserInfo] = useState({
    name: "",
    lastname: "",
    username: "",
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const router = useRouter();
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

  const handleLogout = () => {
    Cookies.remove("userToken");
    localStorage.removeItem("loggedUserInfo");
    window.location.href = "/login";
  };

  const handleUpdateUser = async () => {
    const loggedUserName = loggedUserInfo.name;
    const loggedUserLastname = loggedUserInfo.lastname;
    const loggedUserUsername = loggedUserInfo.username;

    const newUserName = newUserInfo.name;
    const newUserLastname = newUserInfo.lastname;
    const newUserUsername = newUserInfo.username;

    if (
      ((newUserName !== loggedUserName ||
        newUserLastname !== loggedUserLastname ||
        newUserUsername !== loggedUserUsername) &&
        (newUserName !== "" ||
          newUserLastname !== "" ||
          newUserUsername !== "")) ||
      (currentPassword && newPassword)
    ) {
      try {
        await axios
          .put(
            "http://localhost:3000/users",
            {
              name: newUserName !== "" ? newUserName : loggedUserName,
              lastname:
                newUserLastname !== "" ? newUserLastname : loggedUserLastname,
              username:
                newUserUsername !== "" ? newUserUsername : loggedUserUsername,
              currentPassword: currentPassword ? currentPassword : null,
              password: newPassword ? newPassword : null,
            },
            {
              headers: {
                Authorization: `Bearer ${Cookies.get("userToken")}`,
              },
            }
          )
          .then((response) => {
            Swal.fire({
              icon: "success",
              title: "Başarılı!",
              text: response.data.message,
            });

            const { name, lastname, username } = response.data.user;
            const newUserData = {
              name,
              lastname,
              username,
            };

            localStorage.setItem("loggedUserInfo", JSON.stringify(newUserData));
            setLoggedUserInfo(newUserData);
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }

      setSettingsModalOpen(false);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("loggedUserInfo");
    if (userData) {
      const userDataObject = JSON.parse(userData);
      setLoggedUserInfo({
        name: userDataObject.name,
        lastname: userDataObject.lastname,
        username: userDataObject.username,
      });
    }
  }, []);

  return (
    <>
      <div className="flex items-center border-b-2 p-6 justify-between">
        {/* Begin:: LOGO */}
        <Link href="/" alt="Ana sayfa">
          <Image
            src="https://www.ucuncubinyil.com/wp-content/uploads/2023/10/ucuncubinyil-logo.png"
            width={200}
            height={50}
            alt=""
          />
        </Link>
        {/* End:: LOGO */}

        {/* Begin:: Search Input */}
        <div className="w-full flex justify-center">
          <TextField
            id="input-with-icon-textfield"
            style={{
              width: "50%",
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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

          <span className="ml-10 mr-3 font-semibold text-lg">
            {loggedUserInfo?.username}
          </span>
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
            <MenuItem
              onClick={() => {
                router.push(`/${loggedUserInfo?.username}`);
                handleClose();
              }}
            >
              My account
            </MenuItem>
            <MenuItem onClick={handleOpenSettingsModal}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
        {/* End:: Action Buttons */}
      </div>

      <Dialog
        open={settingModalOpen}
        onClose={handleCloseSettingsModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Profilini Güncelle</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              size="small"
              placeholder={loggedUserInfo?.name}
              value={newUserInfo?.name}
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, name: e.target.value })
              }
            />
            <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              size="small"
              placeholder={loggedUserInfo?.lastname}
              value={newUserInfo?.lastname}
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, lastname: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <TextField
              className="w-full"
              id="input-with-icon-textfield"
              variant="outlined"
              size="small"
              placeholder={loggedUserInfo?.username}
              value={newUserInfo?.username}
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, username: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TextField
              className="w-full"
              id="input-with-icon-textfield"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Mevcut Şifre"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              className="w-full"
              type="password"
              id="input-with-icon-textfield"
              variant="outlined"
              size="small"
              placeholder="Yeni Şifre"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSettingsModal}>Vazgeç</Button>
          <Button onClick={handleUpdateUser}>Güncelle</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
