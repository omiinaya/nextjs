import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

export default function Cards(props) {
    return (
        <Box>
            {props.mobile ? (
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.certs.slice(0, props.certs.length / 2).map((card, index) => (
                            <Grow
                                in={props.visible}
                                key={card}
                                {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                            >
                                <Paper className="certificateContainer">
                                    <Box className="certificateCard">
                                        <img
                                            alt={card}
                                            src={`https://omiinaya.sirv.com/Images/LinkedIn${card}.webp`}
                                            className='imageCard'
                                        />
                                        <Box>
                                            {card}
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.certs.slice(props.certs.length / 2, props.certs.length).map((card, index) => (
                            <Grow
                                in={props.visible}
                                key={card}
                                {...(props.visible ? { timeout: (index + 4) * 500 } : {})}
                            >
                                <Paper className="certificateContainer">
                                    <Box className="certificateCard">
                                        <img
                                            alt={card}
                                            src={`https://omiinaya.sirv.com/Images/LinkedIn${card}.webp`}
                                            className='imageCard'
                                        />
                                        <Box>
                                            {card}
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    {props.certs.map((card, index) => (
                        <Grow
                            in={props.visible}
                            key={card}
                            {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                        >
                            <Paper className="certificateContainer">
                                <Box className="certificateCard">
                                    <img
                                        alt={card}
                                        src={`https://omiinaya.sirv.com/Images/LinkedIn${card}.webp`}
                                        className='imageCard'
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