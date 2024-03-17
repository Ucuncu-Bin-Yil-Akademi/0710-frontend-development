import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from "@/public/logo.png";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className="flex items-center border-b-2 p-6 justify-between">
        {/* Begin:: LOGO */}
        <div>
          <Image src={Logo} alt="" />
        </div>
        {/* End:: LOGO */}

        {/* Begin:: Search Input */}
        <div className="w-full flex justify-center">
        <TextField
        id="input-with-icon-textfield"
        style={{
            width: "50%"
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
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        {/* End:: Action Buttons */}
      </div>
    </>
  );
}
