export const CodeData = `
    const profile = {
        name: 'Truong Thanh Binh',
        title: 'Full-Stack Developer',
        skills: [
            'React', 'NextJS', 'JavaScript', 'TypeScript',
            'Java', 'Spring Boot', 'Golang', '.NET',
            'MSSQL', 'PostgreSQL', 'Docker', 'AWS',
            'Git', 'Linux', 'Camunda', 'BPMN'
        ],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        yearsOfExperience: 4, 
        hireable: function() {
            return (
                this.hardWorker &&
                this.problemSolver &&
                this.skills.length >= 5 &&
                this.yearsOfExperience >= 3
            );
        }
    };
`;
