import { Box, Container, Typography } from "@mui/material";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2021 - Present",
    description: [
      "Led development of multiple high-impact projects using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and improved deployment processes",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Software Agency",
    period: "2019 - 2021",
    description: [
      "Developed and maintained client projects using React and Express.js",
      "Collaborated with design team to implement responsive UI/UX",
      "Optimized database queries and improved application performance",
    ],
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2018 - 2019",
    description: [
      "Built and maintained web applications using JavaScript and PHP",
      "Worked in an agile development environment",
      "Participated in daily stand-ups and sprint planning",
    ],
  },
];

const Experience = () => {
  return (
    <Box id="experience" className="py-20 bg-gray-900/50">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-3xl font-bold mb-10 text-center">
          Professional Experience
        </Typography>
        <Box className="relative">
          {/* Timeline line */}
          <Box
            className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-500"
            sx={{ transform: "translateX(-50%)" }}
          />
          
          {/* Experience items */}
          <Box className="space-y-12">
            {experiences.map((exp, index) => (
              <Box
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16`}
              >
                {/* Timeline dot */}
                <Box
                  className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  sx={{
                    transform: "translate(-50%, 2rem)",
                  }}
                />
                
                {/* Content */}
                <Box className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <Box className="p-6 bg-gray-800 rounded-lg">
                    <Typography variant="h6" className="font-bold text-blue-400">
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" className="text-gray-300">
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle2" className="text-gray-400 mb-2">
                      {exp.period}
                    </Typography>
                    <ul className={`list-disc ${index % 2 === 0 ? "md:list-inside" : "ml-4"} text-gray-300`}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Box>
                </Box>
                
                {/* Empty space for timeline alignment */}
                <Box className="flex-1 hidden md:block" />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 