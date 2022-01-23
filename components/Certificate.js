import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';

export default function Certificate(props) {
    function isEven(num) {
        return num % 2
    }

    return (
        <Box>
            {props.mobile ? (
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.certs.slice(0, props.certs.length / 2).map((cert, index) => (
                            <Grow
                                in={props.visible}
                                key={cert + index + 'x'}
                                {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                            >
                                <Paper className="certificateContainer">
                                    <Box className="certificateCard certificateCardDouble">
                                        <a
                                            href="https://www.linkedin.com/in/omar-minaya-a6b772198/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                alt={cert}
                                                src={`https://omiinaya.sirv.com//Images/backup/LinkedIn${cert}.webp`}
                                                className='certificateCard'
                                            />
                                        </a>
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.certs.slice(props.certs.length / 2, props.certs.length).map((cert, index) => (
                            <div key={cert + index}>
                                {props.certs[index] != 'FullStack' ? (
                                    <div><Grow
                                        in={props.visible}
                                        {...(props.visible ? { timeout: (index + 2) * 500 } : {})}
                                    >
                                        <Paper className="certificateContainer">
                                            <Box className="certificateCard certificateCardDouble">
                                                <a
                                                    href="https://www.linkedin.com/in/omar-minaya-a6b772198/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        alt={cert}
                                                        src={`https://omiinaya.sirv.com//Images/backup/LinkedIn${cert}.webp`}
                                                        className='certificateCard'
                                                    />
                                                </a>
                                            </Box>
                                        </Paper>
                                    </Grow></div>
                                ) : (
                                    <div>
                                        <Grow
                                            in={props.visible}
                                            key={cert + index + 'z'}
                                            {...(props.visible ? { timeout: (index + 2) * 500 } : {})}
                                        >
                                            <Paper className="certificateContainer">
                                                <Box>
                                                    <a
                                                        href="https://www.credential.net/f0cf59e9-957e-4e02-8763-c8d26ff7967c#gs.m4olob"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <img
                                                            alt={cert}
                                                            src={`https://omiinaya.sirv.com//Images/backup/LinkedIn${cert}.webp`}
                                                            className='certificateCard'
                                                        />
                                                    </a>
                                                </Box>
                                            </Paper>
                                        </Grow>
                                    </div>
                                )}

                            </div>
                        ))}
                    </Box>
                </Box >
            ) : (
                <Box sx={{ display: 'flex' }}>
                    <div>
                        {props.certs.length > 1 ? (
                            <Box display="flex">
                                {props.certs.map((cert, index) => (
                                    <div key={cert + index}>
                                        {isEven(index) ? (
                                            <div>
                                                <Slide
                                                    in={props.visible}
                                                    direction='left'
                                                    key={cert + index}
                                                    {...(props.visible ? { timeout: 500 } : {})}
                                                >
                                                    <Paper className="certificateContainer">
                                                        <Box className="certificateCard certificateCardDouble">
                                                            <a
                                                                href="https://www.linkedin.com/in/omar-minaya-a6b772198/"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <img
                                                                    alt={cert}
                                                                    src={`https://omiinaya.sirv.com//Images/backup/LinkedIn${cert}.webp`}
                                                                />
                                                            </a>
                                                        </Box>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        ) : (
                                            <div>
                                                <Slide
                                                    in={props.visible}
                                                    direction='right'
                                                    key={cert + index}
                                                    {...(props.visible ? { timeout: 500 } : {})}
                                                >
                                                    <Paper className="certificateContainer">
                                                        <Box className="certificateCard certificateCardDouble">
                                                            <a
                                                                href="https://www.linkedin.com/in/omar-minaya-a6b772198/"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <img
                                                                    alt={cert}
                                                                    src={`https://omiinaya.sirv.com//Images/backup/LinkedIn${cert}.webp`}
                                                                />
                                                            </a>
                                                        </Box>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </Box>
                        ) : (
                            <div>
                                {props.certs.map((cert, index) => (
                                    <Grow
                                        in={props.visible}
                                        key={cert + index}
                                        {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                                    >
                                        <Paper className="certificateContainer">
                                            <Box>
                                                <a
                                                    href="https://www.credential.net/f0cf59e9-957e-4e02-8763-c8d26ff7967c#gs.m4olob"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        alt={cert}
                                                        src={`https://omiinaya.sirv.com//Images/backup/LinkedIn${cert}.webp`}
                                                        className='certificateCard'
                                                    />
                                                </a>
                                            </Box>
                                        </Paper>
                                    </Grow>
                                ))}
                            </div>
                        )}
                    </div>
                </Box>
            )
            }
        </Box >
    )
}