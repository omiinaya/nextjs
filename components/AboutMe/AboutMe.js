import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from "./AboutMe.module.scss";

export default function AboutMe() {
    return (
        <Box className={style.root} sx={{ 
            ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
            mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px' }
            }}>
            <Typography textAlign="center" className={style.title}>About Me</Typography>
        </Box>
    )
}
