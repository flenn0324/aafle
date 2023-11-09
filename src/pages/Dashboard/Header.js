import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      
      sx={{
        borderBottom: "1px solid black",
        backgroundColor: '#112244', // Dark blue background color
      }}
    >
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="3px" alignItems="center">
        <h5 style={{ color: 'white' }}>Agence d'annonces et de formalités légales</h5>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton style={{ color: 'white' }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
