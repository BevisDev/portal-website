import { Box, Drawer, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { BaucuaData, BaucuaItem } from "./BaucuaData";
import { CloseOutlined } from "@mui/icons-material";

type BaucuaHistoryProps = {
  showHistory: boolean;
  setShowHistory: (open: boolean) => void;
  history: BaucuaItem[][];
};

const BaucuaHistory = ({
  showHistory,
  setShowHistory,
  history,
}: BaucuaHistoryProps) => {
  const frequencyMap: Record<string, number> = {};
  BaucuaData.forEach((item) => {
    frequencyMap[item.alt] = 0;
  });

  // set into frequencyMap
  history.flat().forEach((item) => {
    frequencyMap[item.alt]++;
  });

  return (
    <Box>
      <Drawer
        anchor="right"
        open={showHistory}
        onClose={() => setShowHistory(false)}
        hideBackdrop
        PaperProps={{
          sx: {
            width: 280,
            height: 400,
            position: "absolute",
            bottom: 80,
            top: "auto",
            right: 92,
            borderRadius: "1rem",
            backgroundColor: "#dedddd",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          },
        }}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
        }}
      >
        <Box p={2} height="100%" overflow="hidden">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography fontWeight={600}>🔮 Soi cầu</Typography>
            <IconButton onClick={() => setShowHistory(false)} size="small">
              <CloseOutlined fontSize="small" />
            </IconButton>
          </Box>

          <Box className="mb-3">
            {/* Frequency Section */}
            <Typography fontSize={14} fontWeight="medium" mt={2} mb={1}>
              Số lần xuất hiện
            </Typography>
            <Box className="grid grid-cols-3 gap-2 mb-2">
              {BaucuaData.map((item, idx) => (
                <Box
                  key={idx}
                  className="flex items-center justify-center gap-2"
                >
                  <Typography fontSize={13} color="error">
                    {frequencyMap[item.alt] ?? 0}
                  </Typography>
                  <Image src={item.src} alt={item.alt} width={36} height={36} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* History Section */}
          {history.length === 0 ? (
            <Typography fontSize={14} color="text.secondary">
              No history yet.
            </Typography>
          ) : (
            history.map((result, i) => (
              <Box key={i} className="flex justify-center gap-2 py-1">
                {result.map((item, j) => (
                  <Image
                    key={j}
                    src={item.src}
                    alt={item.alt}
                    width={45}
                    height={45}
                  />
                ))}
              </Box>
            ))
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default BaucuaHistory;
