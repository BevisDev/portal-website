const AppConfig = {
  apiTimeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 60,
  sidebarWidth: Number(process.env.NEXT_PUBLIC_SIDEBAR_WIDTH) || 250,
  marginPaper: Number(process.env.NEXT_PUBLIC_MARGIN_PAPER) || 800,
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER,
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
    zalo: process.env.NEXT_PUBLIC_ZALO,
    telegram: process.env.NEXT_PUBLIC_TELEGRAM,
  },
  resume: process.env.NEXT_PUBLIC_RESUME,
};

export default AppConfig;
