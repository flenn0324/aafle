import { Typography, Box } from "@mui/material";


const HeadContent = ({ title, subtitle }) => {
  return (
    <div>
      <Box m="30px">
        <Typography
          variant="h4"
          color="#112244"
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h6" color="grey">
          {subtitle}
        </Typography>
      </Box>
    </div>
  );
};

export default HeadContent;
