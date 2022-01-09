import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Box from '@mui/material/Box';
import style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={style.root}>
      <div className={style.NavBar}>
        <NavBar />
      </div>
      <Box
        className={style.Title}
        sx={{
          ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px'},
          mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px'}
        }}>
        .About Me
      </Box>
      <div className={style.AboutMe}>
        <AboutMe />
      </div>
    </div>
  )
}
