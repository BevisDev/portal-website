import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

interface NavDataProps {
  id: string;
  icon: React.JSX.Element;
  text: string;
  path: string;
}

const NavData: NavDataProps[] = [
  {
    id: "home",
    icon: <HomeOutlinedIcon />,
    text: "Home",
    path: "/resume",
  },
  {
    id: "skills",
    icon: <CodeOutlinedIcon />,
    text: "Skill",
    path: "/resume/skill",
  },
  {
    id: "experience",
    icon: <BusinessCenterOutlinedIcon />,
    text: "Experience",
    path: "/resume/experience",
  },
  {
    id: "education",
    icon: <SchoolOutlinedIcon />,
    text: "Education",
    path: "/resume/education",
  },
  {
    id: "project",
    icon: <LaptopMacOutlinedIcon />,
    text: "Project",
    path: "/resume/project",
  },
  {
    id: "contact",
    icon: <EmailOutlinedIcon />,
    text: "Contact",
    path: "/resume/contact",
  },
];

export default NavData;
