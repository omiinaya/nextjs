import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import style from "./AboutMe.module.scss";

export default function AboutMe() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => { setChecked(true) }, 500);
    });

    return (
        <Box className={style.root} sx={{
            ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
            mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
            p: '70px'
        }}>
            <Fade in={checked}>
                <Box>
                    <div className={style.title}>About Me</div>
                    <Typography
                        textAlign="center"
                        sx={{ mb: '50px' }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Morbi facilisis, turpis quis aliquam sodales, est neque egestas arcu, sit amet vulputate enim odio vitae neque. Fusce sit amet erat pellentesque, placerat felis sed, molestie ex. Fusce dui orci, volutpat non ante in, efficitur accumsan erat. Nam mattis arcu vitae sapien tempus scelerisque. Integer accumsan luctus felis a aliquet. Sed consequat ornare maximus. Integer mollis tincidunt dolor. Duis tristique feugiat odio non bibendum.
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{ mb: '30px' }}
                    >
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis blandit tellus et mattis. Ut nulla ipsum, tristique semper risus id, auctor finibus justo. Nulla interdum velit ligula, id condimentum erat dignissim nec. Quisque sodales consectetur pellentesque. Nulla nec mollis arcu. Maecenas suscipit, nisl a fermentum mattis, velit sapien elementum justo, non hendrerit neque eros vel nunc. Etiam tincidunt, elit sit amet commodo rutrum, enim nunc lobortis tellus, et cursus ex leo quis dui. Integer ultrices arcu in arcu suscipit tristique.
                    </Typography>
                </Box>
            </Fade>
        </Box >

    )
}
