import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

export default function Cards(props) {
    return (
        <Box>
            {props.mobile ? (
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.cards.slice(0, props.cards.length / 2).map((card, index) => (
                            <Grow
                                in={props.visible}
                                key={card}
                                style={{
                                    //transformOrigin: '0 0 0',
                                    transform: `translateY(${(index + 0) * 30}px)`
                                }}
                                {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                            >
                                <Paper sx={{ m: 1 }} elevation={4}>
                                    <Box sx={{ width: 130, height: 170 }}>
                                        {card}
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.cards.slice(props.cards.length / 2, props.cards.length).map((card, index) => (
                            <Grow
                                in={props.visible}
                                key={card}
                                style={{
                                    //transformOrigin: '0 0 0',
                                    transform: `translateY(${(index + 0) * 30}px)`
                                }}
                                {...(props.visible ? { timeout: (index + 4) * 500 } : {})}
                            >
                                <Paper sx={{ m: 1 }} elevation={4}>
                                    <Box sx={{ width: 130, height: 170 }}>
                                        {card}
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    {props.cards.map((card, index) => (
                        <Grow
                            in={props.visible}
                            key={card}
                            style={{
                                //transformOrigin: '0 0 0',
                                transform: `translateY(${(index + 0) * 30}px)`
                            }}
                            {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                        >
                            <Paper sx={{ m: 1 }} elevation={4}>
                                <Box sx={{ width: 130, height: 170 }}>
                                    {card}
                                </Box>
                            </Paper>
                        </Grow>
                    ))}
                </Box>
            )}
        </Box>
    )
}