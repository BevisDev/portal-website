import { Topic } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/images/dailydev.jpg')",
        backgroundSize: "cover",
        color: "text.primary",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          background: `
            linear-gradient(to right, #13123f 0%, #361656 100%),
            linear-gradient(to bottom, #0e0d2f 0%, #551894 100%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 43%, 100% 37%",
          backgroundPosition: "bottom, top",
          p: 4,
        }}
        className="shadow-lg"
      >
        <CardMedia
          component="img"
          sx={{
            width: "50%",
            height: "300px",
            objectFit: "cover",
            border: "10px solid #9060c1",
            transform: "rotate(-3deg)",
            transition: "transform 0.3s ease-in-out",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          image="/images/me.jpg"
          alt="avatar"
          className="rounded-[64px] border-[10px]"
        />
        <CardContent
          sx={{
            fontFamily: "var(--font-lora)",
            display: "flex",
            width: "auto",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "25px",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: "2.7rem",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#0d31ab",
              borderRadius: "12px",
              whiteSpace: "nowrap",
              padding: "10px",
              color: "#f7f5f2",
            }}
            gutterBottom
          >
            Welcome to my website
          </Typography>
          <Paper
            sx={{
              width: 320,
              maxWidth: "100%",
              color: "#f7f5f2",
            }}
          >
            <MenuList
              sx={{
                backgroundColor: "#9060c1",
              }}
            >
              <Link href="/portfolio" passHref>
                <MenuItem>
                  <ListItemIcon>
                    <Topic fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#f7f5f2",
                    }}
                  >
                    The Portfolio
                  </Typography>
                </MenuItem>
              </Link>
              <Divider />
              <Link href="/signin" passHref>
                <MenuItem>
                  <ListItemIcon>
                    <Topic fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#f7f5f2",
                    }}
                  >
                    The Dashboard
                  </Typography>
                </MenuItem>
              </Link>
            </MenuList>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}
