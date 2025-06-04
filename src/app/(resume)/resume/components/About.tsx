import { Box, Container, Typography, Avatar } from "@mui/material";

const About = () => {
  return (
    <Box id="about" className="py-20">
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row items-center gap-10">
          <Avatar
            src="/images/avatar.jpg"
            alt="Profile Picture"
            sx={{ width: 200, height: 200 }}
            className="border-4 border-blue-500"
          />
          <Box className="flex-1">
            <Typography variant="h2" className="text-4xl font-bold mb-4">
              Hi, I'm Bevis 👋
            </Typography>
            <Typography variant="h3" className="text-2xl text-blue-400 mb-4">
              Full Stack Developer
            </Typography>
            <Typography className="text-gray-300 mb-6">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              I specialize in React, Next.js, Node.js, and TypeScript. With a strong foundation in both
              frontend and backend development, I create scalable and user-friendly solutions that solve
              real-world problems.
            </Typography>
            <Box className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
              >
                LinkedIn
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 