export const coder = {
    name: 'BevisDev',
    skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Docker', 'AWS'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    },
};
