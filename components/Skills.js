import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Cards from './Cards'
import VisibilitySensor from 'react-visibility-sensor';

export default function SimpleGrow() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(visible)
    }, [visible]);

    return (
        <Box sx={{
            m: '20'
        }}>
            <VisibilitySensor
                onChange={(e) => { setVisible(e) }}
            >
                <Cards visible={visible} />
            </VisibilitySensor>
        </Box>
    );
}
