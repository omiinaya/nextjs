import Box from '@mui/material/Box';

export default function Project(props) {
    console.log(props)
    return (
        <Box>
            {props.projects.map((project, index) => (
                <div key={project.name}>
                    <Box className="ProjectContainer">
                        <Box className="Project">
                            {'Source: '}
                            <a
                                href={project.html_url}
                                target="_blank"
                                rel="noreferrer">
                                {project.name}
                            </a>
                        </Box>
                    </Box>
                </div>
            ))}
        </Box>
    );
}