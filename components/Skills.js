import { useState } from 'react';
import Box from '@mui/material/Box';
import Cards from './Cards';
import VisibilitySensor from 'react-visibility-sensor';

export default function SimpleGrow() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const cards1 = ['JavaScript', 'Node', 'React', 'HTML', 'CSS']
    const cards2 = ['MySQL', 'Sequelize', 'MongoDB', 'MSSQL', 'JSON']
    const cards3 = ['NextJS', 'React-Native', 'JQuery', 'Bootstrap', 'MDB']
    const cards4 = ['Python', 'Java', 'Electron', 'Git', 'Express']

    return (
        <Box sx={{
            height: 'fit-content'
        }}>
            <Box
                display='flex'
                justifyContent='center'
            >
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible(e) }}
                >
                    <Cards cards={cards1} visible={visible} />
                </VisibilitySensor>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
            >
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible2(e) }}
                >
                    <Cards cards={cards2} visible={visible2} />
                </VisibilitySensor>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
            >
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible3(e) }}
                >
                    <Cards cards={cards3} visible={visible3} />
                </VisibilitySensor>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
            >
                <VisibilitySensor
                    onChange={(e) => { if (e === true) setVisible4(e) }}
                >
                    <Cards cards={cards4} visible={visible4} />
                </VisibilitySensor>
            </Box>
        </Box>
    );
}
