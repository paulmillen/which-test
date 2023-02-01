import { Box, Container } from "@mui/material";

const Events: React.FC = () => {
  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Hello World!
      </Box>
    </Container>
  );
};

export default Events;
