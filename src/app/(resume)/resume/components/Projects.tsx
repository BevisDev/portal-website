import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with collaborative features. Built using React, Socket.io, and Express.js.",
    technologies: ["React", "Socket.io", "Express.js", "PostgreSQL"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool that uses machine learning models to create unique artwork based on text descriptions.",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com/yourusername/ai-image-gen",
    live: "https://ai-image-gen-demo.com",
  },
];

const Projects = () => {
  return (
    <Box id="projects" className="py-20">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-3xl font-bold mb-10 text-center">
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="p-6 bg-gray-800 h-full flex flex-col">
                <Typography variant="h6" className="font-bold text-blue-400 mb-2">
                  {project.title}
                </Typography>
                <Typography className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </Typography>
                <Box className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      className="mr-2 mb-2"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        color: "rgb(147, 197, 253)",
                      }}
                    />
                  ))}
                </Box>
                <Box className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <GitHubIcon fontSize="small" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <LaunchIcon fontSize="small" />
                    <span>Live Demo</span>
                  </a>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 