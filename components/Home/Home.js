//import style from "./Home.module.scss";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarImage from "../../assets/imgs/avatar.png"

export default function Home() {
    return (
        <Box
            className='rootHome'
            sx={{
                p: { xs: 'none', sm: 'none', md: '60px', lg: '60px' },
            }}
        >
            <Typography textAlign='center' className='headerHome'>
                FULLSTACK DEVELOPER
            </Typography>
            <Typography textAlign='center' className='titleHome'>
                OMAR
            </Typography>
            <Typography
                textAlign='center'
                className='contentHome'
                sx={{
                    ml: { xs: 'none', sm: 'none', md: '30px', lg: '300px' },
                    mr: { xs: 'none', sm: 'none', md: '30px', lg: '300px' },
                }}
            >
                I am a bilingual developer living in Miami, Florida. I was born in the Dominican Republic and my native language is Spanish. I studied Computer Science at Union University over in Jackson, Tennessee, then moved to Florida looking for IT opportunities. I ended up taking a coding bootcamp at University of Miami and fell in love with programming ever since.
            </Typography>
            <Box
                display='flex'
                justifyContent='center'
            >
                <Avatar
                    alt="Omar Minaya"
                    src={AvatarImage.src}
                    className='avatarHome'
                />
            </Box>
        </Box>
    )
}
