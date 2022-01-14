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
                                <img
                                    alt='placeholder'
                                    src={`https://omiinaya.sirv.com/Images/placeholder.webp`}
                                    className='placeholder'
                                    width={730}
                                    height={360}
                                />
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='center'
                            >
                                {project.name}
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='center'
                            >
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ 
                                        marginRight: '7px',
                                        marginTop: '7px'
                                     }}
                                >
                                    <Button color='primary' variant="contained">View Source</Button>
                                </a>
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ 
                                        marginLeft: '7px',
                                        marginTop: '7px'
                                    }}
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