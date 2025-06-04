import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const educations = [
  {
    degree: "Master of Computer Science",
    school: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Artificial Intelligence",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "State University",
    period: "2012 - 2016",
    description: "Major in Computer Science with focus on Web Development",
  },
];

const Education = () => {
  return (
    <Box id="education" className="py-20">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-3xl font-bold mb-10 text-center">
          Education
        </Typography>
        <Grid container spacing={4}>
          {educations.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper className="p-6 bg-gray-800 h-full">
                <Box className="flex items-center gap-4 mb-4">
                  <SchoolIcon className="text-blue-400" sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h6" className="font-bold text-blue-400">
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" className="text-gray-300">
                      {edu.school}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle2" className="text-gray-400 mb-2">
                  {edu.period}
                </Typography>
                <Typography className="text-gray-300">
                  {edu.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education; 