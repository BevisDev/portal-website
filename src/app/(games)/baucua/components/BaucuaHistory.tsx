import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/image";
import { BaucuaData } from "./BaucuaData";

type BaucuaHistoryProps = {
  historyOpen: boolean;
  setHistoryOpen: (open: boolean) => void;
  history: Array<typeof BaucuaData>;
};

const BaucuaHistory = ({
  historyOpen,
  setHistoryOpen,
  history,
}: BaucuaHistoryProps) => {
  return (
    <Dialog open={historyOpen} onClose={() => setHistoryOpen(false)}>
      <DialogTitle>Lịch sử</DialogTitle>
      <DialogContent>
        <Box className="flex flex-col gap-1 overflow-y-auto max-h-[400px]">
          {history.map((faces, index) => (
            <Box key={index} className="flex justify-center gap-1">
              {faces.map((face, i) => (
                <Image
                  key={i}
                  src={face.src}
                  alt={face.alt}
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
              ))}
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BaucuaHistory;
