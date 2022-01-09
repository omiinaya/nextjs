import style from "./Skills.module.scss";
import Box from '@mui/material/Box';
import Breadcrumb from '../Breadcrumb/Breadcrumb'

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
                    test
                </Box>
            </Box>
        </Box>
    )
}
