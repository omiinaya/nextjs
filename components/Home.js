import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

export default function Home() {
    const [upper, setUpper] = useState(false);
    const [middle, setMiddle] = useState(false);
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        setTimeout(() => setUpper(true), 250);
        setTimeout(() => setMiddle(true), 500);
        setTimeout(() => setBottom(true), 750);
    });

    return (
        <Box className='rootHome'>
            <Fade in={upper}>
                <Box>
                    <Typography textAlign='center' className='titleHome'>
                        OMAR
                    </Typography>
                </Box>
            </Fade>
            <Slide direction="up" in={middle}>
                <Typography
                    textAlign='center'
                    className='contentHome'
                    sx={{
                        ml: { xs: 'none', sm: 'none', md: '30px', lg: '100px', xl: '300px' },
                        mr: { xs: 'none', sm: 'none', md: '30px', lg: '100px', xl: '300px' },
                    }}
                >
                    I am a Full-Stack Software Engineer with a demonstrated history of working in the Information and Technology field. Skilled in JavaScript, Python and other programming languages.
                </Typography>
            </Slide>
            <Slide direction="up" in={bottom} >
                <Box className='avatarContainer'>
                    <img
                        alt="Omar Minaya"
                        src={'https://omiinaya.sirv.com//Images/backup/avatar.webp'}
                        className='avatarBorder'
                        width={260}
                        height={260}
                    />
                </Box>
            </Slide>
        </Box>
    )
}
