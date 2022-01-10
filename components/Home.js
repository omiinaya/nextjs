import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import AvatarImage from "../public/static/imgs/avatar.png"

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
        <Box
            className='rootHome'
            sx={{
                p: { xs: 'none', sm: 'none', md: '60px', lg: '60px' },
            }}
        >
            <Fade in={upper}>
                <Box>
                    <Typography textAlign='center' className='headerHome'>
                        FULLSTACK DEVELOPER
                    </Typography>
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
                    I am a bilingual developer living in Miami, Florida. I was born in the Dominican Republic and my native language is Spanish. I studied Computer Science at Union University over in Jackson, Tennessee, then moved to Florida looking for IT opportunities. I ended up taking a coding bootcamp at University of Miami and fell in love with programming ever since.
                </Typography>
            </Slide>
            <Slide direction="up" in={bottom}>
                <Box
                    display='flex'
                    justifyContent='center'
                    className='avatarContainer'
                >
                    <Avatar
                        alt="Omar Minaya"
                        src={AvatarImage.src}
                        className='avatarHome'
                        sx={{
                            mt: { xs: '30px', sm: '30px', md: '30px', lg: '70px', xl: '80px' },
                        }}
                    />
                </Box>
            </Slide>
        </Box>
    )
}
