import Box from '@mui/material/Box';

export default function Project(props) {
    return (
        <Box>
            {props.projects.map((project, index) => (
                <div key={project.name}>
                    <Box>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noreferrer">
                            {project.name}
                        </a>
                    </Box>
                </div>
            ))}
        </Box>
    );
}