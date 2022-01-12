import Box from '@mui/material/Box';

export default function Project(props) {
    return (
        <Box>
            {props.projects.map((project, index) => (
                <div key={project.name}>
                    {project.ame}
                </div>
            ))}
        </Box>
    );
}