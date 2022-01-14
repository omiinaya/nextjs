import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@material-ui/core/Chip';

export default function Project(props) {
    //console.log(props.pinned)
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
                                            width: { xs: '320px', sm: '320px' },
                                            height: { xs: '200px', sm: '200px' },
                                        }}
                                    >
                                        <img
                                            alt='placeholder'
                                            src={`https://omiinaya.sirv.com/Images/placeholder.webp`}
                                            className='placeholder'
                                            width='340px'
                                            height='200px'
                                        />
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        mt={2}
                                    >
                                        {project.name}
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        m={1}
                                        height='30px'
                                        textAlign='center'
                                    >
                                        {project.topics.map((topic) => (
                                            <div key={topic} style={{ margin: '5px' }}>
                                                <Chip label={topic} />
                                            </div>
                                        ))}
                                    </Box>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        m={1}
                                        height='50px'
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
                                        m={1}
                                        height='50px'
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
                                        mt={1}
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