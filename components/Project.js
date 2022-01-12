import Box from '@mui/material/Box';

export default function Project(props) {
    function isEven(num) {
        return num % 2
    }
    return (
        <Box>
            {props.projects.map((project, index) => (
                <div key={project.full_name}>
                    {project.full_name}
                </div>
            ))}
        </Box>
    );
}
