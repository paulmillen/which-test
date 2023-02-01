import { Box } from "@mui/material";
import { NumberGrid } from "./components";

const NumberGridView: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}
    component="main"
  >
    <NumberGrid highestNumber={144} />
  </Box>
);

export default NumberGridView;
