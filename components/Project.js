import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Project(props) {
    console.log(props.pinned)
    return (
        <Box>
            {props.pinned.map((project, index) => (
                <div key={project.name}>
                    <Box className="ProjectContainer"
                        display='flex'
                        justifyContent='center'
                    >
                        {props.mobile ? (
                            <div>
                                <Box className="Project">
                                    <Box
                                        sx={{
                                            width: { xs: '310px', sm: '320px' },
                                            height: { xs: '200px', sm: '200px' },
                                        }}
                                    >
                                        <img
                                            alt='placeholder'
                                            src={`https://omiinaya.sirv.com/Images/placeholder.webp`}
                                            className='placeholder'
                                            width='310px'
                                            height='200px'
                                        />
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        mt={1}
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
                                                marginTop: '14px'
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
                                                marginTop: '14px'
                                            }}
                                        >
                                            <Button color='primary' variant="contained">Deployment</Button>
                                        </a>
                                    </Box>
                                </Box>
                            </div>
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
                                            src={`https://omiinaya.sirv.com/Images/placeholder.webp`}
                                            className='placeholder'
                                            width='730px'
                                            height='360px'
                                        />
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        mt={1}
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
                                                marginTop: '14px'
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
                                                marginTop: '14px'
                                            }}
                                        >
                                            <Button color='primary' variant="contained">Deployment</Button>
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