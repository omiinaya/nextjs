import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

export default function Certificate(props) {
    return (
        <Box>
            {props.mobile ? (
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.certs.slice(0, props.certs.length / 2).map((cert, index) => (
                            <Grow
                                in={props.visible}
                                key={cert}
                                {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                            >
                                <Paper className="certificateContainer">
                                    <Box className="certificateCard">
                                        <a href="https://www.linkedin.com/in/omar-minaya-a6b772198/" target="_blank">
                                            <img
                                                alt={cert}
                                                src={`https://omiinaya.sirv.com/Images/LinkedIn${cert}.webp`}
                                                className='imageCard'
                                            />
                                        </a>
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.certs.slice(props.certs.length / 2, props.certs.length).map((cert, index) => (
                            <Grow
                                in={props.visible}
                                key={cert}
                                {...(props.visible ? { timeout: (index + 3) * 500 } : {})}
                            >
                                <Paper className="certificateContainer">
                                    <Box className="certificateCard">
                                        <a href="https://www.linkedin.com/in/omar-minaya-a6b772198/" target="_blank">
                                            <img
                                                alt={cert}
                                                src={`https://omiinaya.sirv.com/Images/LinkedIn${cert}.webp`}
                                                className='imageCard'
                                            />
                                        </a>
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    {props.certs.map((cert, index) => (
                        <Grow
                            in={props.visible}
                            key={cert}
                            {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                        >
                            <Paper className="certificateContainer">
                                <Box className="certificateCard">
                                    <img
                                        alt={cert}
                                        src={`https://omiinaya.sirv.com/Images/LinkedIn${cert}.webp`}
                                    />
                                </Box>
                            </Paper>
                        </Grow>
                    ))}
                </Box>
            )}
        </Box>
    )
}