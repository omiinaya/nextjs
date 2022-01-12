import { useState } from 'react';
import Box from '@mui/material/Box';
import Cards from './Cards';
import VisibilitySensor from 'react-visibility-sensor';

export default function SimpleGrow() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const cards1 = ['JavaScript', 'React', 'Node', 'Electron', 'Python', 'Java']
    const cards2 = ['MySQL', 'Sequelize', 'MongoDB', 'Express', 'Git', 'JSON']
    const cards3 = ['NextJS', 'React Native', 'Bootstrap', 'JQuery', 'HTML', 'CSS']

    return (
        <Box>
            <Box
                sx={{ height: { xs: '900px', sm: '900px', md: '645px', lg: '645px' } }}>
                <VisibilitySensor
                    onChange={(e) => {
                        if (e) setVisible1(e)
                    }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Cards cards={cards1} visible={visible1} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    offset={{ bottom: -175 }}
                    onChange={(e) => { if (e) setVisible1(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Cards cards={cards1} visible={visible1} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible2(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Cards cards={cards2} visible={visible2} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setVisible2(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Cards cards={cards2} visible={visible2} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible3(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Cards cards={cards3} visible={visible3} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setVisible3(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Cards cards={cards3} visible={visible3} mobile={true} />
                    </Box>
                </VisibilitySensor>
            </Box>
        </Box>
    );
}
