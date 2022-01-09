import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import style from "./AboutMe.module.scss";

export default function AboutMe() {
    return (
        <Box>
            <Box
                sx={{
                    ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
                    mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px' }
                }}>
                <Breadcrumb current={'About Me'} />
            </Box>
            <Box
                className={style.AboutMe}
                sx={{
                    ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
                    mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
                    p: '50px'
                }}>
                <Box>
                    <div className={style.title}>About Me</div>
                    <Typography
                        textAlign="center"
                        sx={{ mb: '10px' }}
                    >
                        I am a Full-Stack Web developer based in Miami, Florida. I was born in the Dominican Republic and later moved to Tennssee where I studied Computer Science at Union University. I moved to Florida looking for IT opportunities, but ended up taking a coding Bootcamp at University of Miami.
                    </Typography>
                </Box>
            </Box >
            <Box
                display="flex"
                justifyContent="center"
                sx={{
                    m: "90px"
                }}
            >
                <Avatar
                    sx={{
                        height: '250px',
                        width: '250px'
                    }}
                    variant="rounded"
                >
                    <img
                        src={'https://avatars.githubusercontent.com/u/21226554?v=4'}
                        height={250}
                        width={250}
                    />
                </Avatar>
            </Box>
        </Box >
    )
}
