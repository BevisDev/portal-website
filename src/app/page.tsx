import HomeLayout from "@/components/home/HomeLayout";
import { Box, TextField } from "@mui/material";

const Home = () => {
  return (
    <HomeLayout>
      <Box
        component="section"
        style={{
          height: "1600px",
        }}
      >
        Home Page
      </Box>
    </HomeLayout>
  );
};

export default Home;
