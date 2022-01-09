import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from "./AboutMe.module.scss";

export default function AboutMe() {
    return (
        <Box>
            <Box sx={{
                ml: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                mr: { xs: 'none', sm: '50px', md: '70px', lg: '70px' }
            }}>
                <Box className={style.breadcrumb}>
                    <Box
                        display="flex"
                        justifyContent="left"
                    >
                        <Typography className={style.title}>
                            .About Me
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                className={style.root}
                sx={{
                    ml: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                    mr: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                    p: '50px',
                    pt: '15px'
                }}>
                <Breadcrumb current={'About Me'} />
                <Box>
                    <Box
                        display="flex"
                        justifyContent="left"
                    >
                        <Avatar
                            sx={{
                                height: '200px',
                                width: '200px'
                            }}
                            variant="rounded"
                        >
                            <img
                                src={'https://avatars.githubusercontent.com/u/21226554?v=4'}
                                height={250}
                                width={250}
                            />
                        </Avatar>
                        <Box display='inline'>
                            <Typography sx={{ ml: '50px', mb: '40px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna nec lacus varius semper et nec urna. Proin accumsan lacinia vulputate. Maecenas quis tristique urna. Duis lobortis sit amet nisl nec convallis. Cras vehicula nisi eget tempus sagittis. Maecenas finibus ligula sit amet ultrices condimentum. Suspendisse semper elementum lectus. Nulla ornare est ante, quis mollis lectus lobortis in. Cras id malesuada velit. Duis viverra quam sapien, sit amet blandit enim pellentesque eget. Ut ac nunc non velit venenatis faucibus ut at libero.
                            </Typography>
                            <Typography sx={{ ml: '50px' }}>
                                <LinkedInIcon sx={{
                                    height: '70px',
                                    width: '70px',
                                    mr: '30px'
                                }}
                                />
                                <GitHubIcon sx={{
                                    height: '70px',
                                    width: '70px',
                                    mr: '30px'
                                }}
                                />
                                <TwitterIcon sx={{
                                    height: '70px',
                                    width: '70px',
                                    mr: '30px'
                                }}
                                />
                                <EmailIcon sx={{
                                    height: '70px',
                                    width: '70px',
                                    mr: '30px'
                                }}
                                />
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box >
    )
}
