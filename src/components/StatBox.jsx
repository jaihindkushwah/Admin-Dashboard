import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width='100%' m="0px 30px">
      <Box display="flex" justifyContent={"space-between"}>
        <Box>
          {icon}
          <Typography
            varient="h4"
            fontWeight={"bold"}
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box display="flex" justifyContent={"space-between"} mt='2px'>
          <Typography
            varient="h5"
            fontWeight={"bold"}
            sx={{ color: colors.grey[500] }}
          >
            {subtitle}
          </Typography>
          <Typography
            varient="h5"
            fontStyle={"italic"}
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
