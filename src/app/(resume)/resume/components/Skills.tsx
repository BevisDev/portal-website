import { Box, Container, Typography, Paper, Grid } from "@mui/material";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Agile", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <Box id="skills" className="py-20 bg-gray-900/50">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-3xl font-bold mb-10 text-center">
          Skills & Technologies
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="p-6 bg-gray-800 h-full">
                <Typography variant="h6" className="font-bold text-blue-400 mb-4">
                  {category.title}
                </Typography>
                <Box className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <Box key={i}>
                      <Box className="flex justify-between mb-1">
                        <Typography className="text-gray-300">{skill.name}</Typography>
                        <Typography className="text-gray-400">{skill.level}%</Typography>
                      </Box>
                      <Box className="w-full bg-gray-700 rounded-full h-2">
                        <Box
                          className="bg-blue-500 h-2 rounded-full"
                          sx={{ width: `${skill.level}%` }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 