import Typography from '@mui/material/Typography';
import style from "./Skills.module.scss";
import Box from '@mui/material/Box';
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import CodeIcon from '@mui/icons-material/Code';
import Test from '../Test/Test'

export default function Skills() {

    return (
        <Box>
            <Box sx={{
                ml: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                mr: { xs: 'none', sm: '50px', md: '70px', lg: '70px' }
            }}>
                <Box className={style.breadcrumb}>
                    <Breadcrumb current={'Skills'} />
                </Box>
            </Box>
            <Box sx={{
                ml: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                mr: { xs: 'none', sm: '50px', md: '70px', lg: '70px' }
            }}>
                <Box className={style.root}>
                    <Box
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography textAlign="center" className={style.title}>
                            .Skills
                        </Typography>
                        <CodeIcon sx={{
                            height: '70px',
                            width: '70px',
                            ml: '20px'
                        }}
                        />
                    </Box>
                    test
                </Box>

            </Box>
        </Box>
    )
}
