import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Image from 'next/image'

export default function Cards(props) {
    //console.log(src={`https://omiinaya.sirv.com/Images/${card}.webp`})
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
                                <Paper className="rootCardContainer">
                                    <Box className="rootCard">
                                        <img
                                            alt={card}
                                            src={`https://omiinaya.sirv.com/Images/${card}.webp`}
                                            className='imageCard'
                                            width={75}
                                            height={75}
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
                                <Paper className="rootCardContainer">
                                    <Box className="rootCard">
                                        <img
                                            alt={card}
                                            src={`https://omiinaya.sirv.com/Images/${card}.webp`}
                                            className='imageCard'
                                            width={75}
                                            height={75}
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
                            <Paper className="rootCardContainer">
                                <Box className="rootCard">
                                    <img
                                        alt={card}
                                        src={`https://omiinaya.sirv.com/Images/${card}.webp`}
                                        className='imageCard'
                                        width={70}
                                        height={70}
                                    />
                                    <div>
                                        {card}
                                    </div>
                                </Box>
                            </Paper>
                        </Grow>
                    ))}
                </Box>
            )}
        </Box>
    )
}