import Box from '@mui/material/Box';

export default function Project(props) {
    return (
        <Box>
            {props.projects.map((project, index) => (
                <div>
                    {project.full_name}
                </div>
            ))}
        </Box>
    );
}
