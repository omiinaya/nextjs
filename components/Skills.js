import { useState } from 'react';
import Box from '@mui/material/Box';
import Cards from './Cards'
import VisibilitySensor from 'react-visibility-sensor';

export default function SimpleGrow() {
    const [visible, setVisible] = useState(false);

    return (
        <Box 
            display='flex'
            justifyContent='center'
        >
            <VisibilitySensor
                onChange={(e) => { setVisible(e) }}
            >
                <Cards visible={visible} />
            </VisibilitySensor>
        </Box>
    );
}
