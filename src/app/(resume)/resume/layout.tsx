import { Box } from "@mui/material";
import Header from "./components/Header";

type ResumeLayoutProps = Readonly<{ children: React.ReactNode }>;
const ResumeLayout: React.FC<ResumeLayoutProps> = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
      }}
      className="bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white"
    >
      {/* Header */}
      <Header />
      {children}
    </Box>
  );
};

export default ResumeLayout;
