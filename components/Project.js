import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Project(props) {
    console.log(props)
    return (
        <Box>
            {props.projects.map((project, index) => (
                <div key={project.name}>
                    <Box className="ProjectContainer"
                        display='flex'
                        justifyContent='center'
                    >
                        <Box className="Project">
                            <Box>
                                {'Image'}
                            </Box>
                            <Box>
                                {project.name}
                            </Box>
                            <Box>
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ marginRight: '7px'}}
                                >
                                    <Button color='primary' variant="contained">View Source</Button>
                                </a>
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ marginLeft: '7px'}}
                                >
                                    <Button color='primary' variant="contained">Deployment</Button>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </div>
            ))}
        </Box>
    );
}