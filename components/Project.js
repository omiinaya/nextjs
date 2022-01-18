import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@material-ui/core/Chip';

export default function Project(props) {
    console.log(props.pinned)
    return (
        <Box>
            {props.pinned.map((project, index) => (
                <div key={project.name}>
                    <Box className="ProjectRoot">
                        {props.mobile ? (
                            <Box className="ProjectContainer">
                                <Box className="Project">
                                    <Box>
                                        <img
                                            alt='placeholder'
                                            src={`https://omiinaya.sirv.com/Images/portfolio/placeholder.webp`}
                                            width='355px'
                                            height='210px'
                                            
                                        />
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                    >
                                        {project.name}
                                    </Box>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}
                                    >
                                        {project.topics.map((topic) => (
                                            <div key={topic} style={{ margin: '2px' }}>
                                                <Chip label={topic} />
                                            </div>
                                        ))}
                                    </div>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        textAlign='center'
                                    >
                                        {project.description}
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                    >
                                        <a
                                            href={project.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ margin: '7px' }}
                                        >
                                            <Button color='primary' variant="contained">View Source</Button>
                                        </a>
                                        <a
                                            href={project.homepage}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ margin: '7px' }}
                                        >
                                            <Button color='primary' variant="contained">View Live</Button>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        ) : (
                            <div>
                                <Box className="Project">
                                    <Box
                                        sx={{
                                            width: { md: '730px', lg: '730px', xl: '730px' },
                                            height: { md: '360px', lg: '360px', xl: '360px' },
                                        }}
                                    >
                                        <img
                                            alt='placeholder'
                                            src={`https://omiinaya.sirv.com/Images/portfolio/placeholder.webp`}
                                            className='placeholder'
                                            width='730px'
                                            height='360px'
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
                                        textAlign='center'
                                    >
                                        {project.topics.map((topic) => (
                                            <div key={topic} style={{ margin: '10px' }}>
                                                <Chip label={topic} />
                                            </div>
                                        ))}
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        sx={{ margin: '7px' }}
                                    >
                                        {project.description}
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
                                                margin: '7px',

                                            }}
                                        >
                                            <Button color='primary' variant="contained">View Source</Button>
                                        </a>
                                        <a
                                            href={project.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                margin: '7px',

                                            }}
                                        >
                                            <Button color='primary' variant="contained">View Live</Button>
                                        </a>
                                    </Box>
                                </Box>
                            </div>
                        )}
                    </Box>
                </div>
            ))}
        </Box>
    );
}