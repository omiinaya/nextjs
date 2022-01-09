import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from "./AboutMe.module.scss";

export default function AboutMe() {
    return (
        <Box className={style.root} sx={{
            ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
            mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
            p: '50px'
        }}>
            <div className={style.title}>About Me</div>
            <Typography
                textAlign="center"
                sx={{ mb: '50px' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Morbi facilisis, turpis quis aliquam sodales, est neque egestas arcu, sit amet vulputate enim odio vitae neque. Fusce sit amet erat pellentesque, placerat felis sed, molestie ex. Fusce dui orci, volutpat non ante in, efficitur accumsan erat. Nam mattis arcu vitae sapien tempus scelerisque. Integer accumsan luctus felis a aliquet. Sed consequat ornare maximus. Integer mollis tincidunt dolor. Duis tristique feugiat odio non bibendum.
            </Typography>
            <Typography
                textAlign="center"
                sx={{ mb: '50px' }}
            >
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis blandit tellus et mattis. Ut nulla ipsum, tristique semper risus id, auctor finibus justo. Nulla interdum velit ligula, id condimentum erat dignissim nec. Quisque sodales consectetur pellentesque. Nulla nec mollis arcu. Maecenas suscipit, nisl a fermentum mattis, velit sapien elementum justo, non hendrerit neque eros vel nunc. Etiam tincidunt, elit sit amet commodo rutrum, enim nunc lobortis tellus, et cursus ex leo quis dui. Integer ultrices arcu in arcu suscipit tristique.
            </Typography>
            <Typography
                textAlign="center"
                sx={{ mb: '30px' }}
            >
                Cras euismod in tellus non aliquet. Etiam tincidunt, elit sit amet commodo rutrum, enim nunc lobortis tellus, et cursus ex leo quis dui. Integer aliquet massa vel ligula lobortis, vitae vestibulum dolor dapibus. Integer accumsan luctus felis a aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat tempor nunc non interdum. Fusce sit amet erat pellentesque, placerat felis sed, molestie ex. Integer hendrerit, mauris a suscipit mollis, est mauris egestas sapien, quis pulvinar nibh libero ut tortor. Integer mollis tincidunt dolor. In erat tellus, porta et erat eget, fringilla maximus metus.
            </Typography>
        </Box >
    )
}
