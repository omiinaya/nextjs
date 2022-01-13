import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Scroll from 'react-scroll';
import Drawer from './Drawer'

const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;
const pages = ['Home', 'Skills', 'Certifications', 'Portfolio', 'Contact Me'];

export default function NavBar() {
  function scrollToTop() {
    scroll.scrollToTop({
      smooth: true,
      duration: 450
    })
  }

  function scrollTo(name, offset) {
    scroller.scrollTo(name, {
      smooth: true,
      duration: 450,
      offset: offset
    })
  }

  return (
    <Box className='rootNavBar'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            sx={{ my: 3, color: 'white', display: { xs: 'none', md: 'block' } }}
            onClick={() => {
              scrollToTop()
            }}
          >
            LOGO
          </Button>
          <Box sx={{
            color: 'white',
            display: {
              xs: 'block',
              md: 'none'
            }
          }}
          >
            <Drawer pages={pages} scrollTo={scrollTo} scrollToTop={scrollToTop} />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {
                if (page != 'Home') {
                  scrollTo(page, -200)
                } else {
                  scrollToTop()
                }
              }}
              sx={{ my: 3, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Button
            sx={{ my: 3, color: 'white' }}
            onClick={() => {
              scrollToTop()
            }}
          >
            LOGO
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button
            sx={{ my: 3, color: 'white', display: 'block' }}
          >
            END
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};
