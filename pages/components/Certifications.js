import { useState } from 'react';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Certificate from './Certificate';

export default function SimpleGrow() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const cards1 = ['FullStack']
    const cards2 = ['React', 'JavaScript']
    const cards3 = ['HTML', 'CSS']
    const cards4 = ['Node', 'Git']

    return (
        <Box>
            <Box
                sx={{ height: { xs: '900px', sm: '900px', md: '645px', lg: '645px' } }}>
                <VisibilitySensor
                    //partialVisibility={true}
                    onChange={(e) => {
                        if (e) setVisible1(e)
                    }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={cards1} visible={visible1} mobile={false}/>
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    //partialVisibility={true}
                    offset={{ bottom: -175 }}
                    onChange={(e) => { if (e) setVisible1(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={cards1} visible={visible1} mobile={true}/>
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    //partialVisibility={true}
                    onChange={(e) => { if (e) setVisible2(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={cards2} visible={visible2} mobile={false}/>
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
                        <Certificate certs={cards2} visible={visible2} mobile={true}/>
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    //partialVisibility={true}
                    onChange={(e) => { if (e) setVisible3(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={cards3} visible={visible3} mobile={false} />
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
                        <Certificate certs={cards3} visible={visible3} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    //partialVisibility={true}
                    onChange={(e) => { if (e) setVisible4(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={cards4} visible={visible4} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setVisible4(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={cards4} visible={visible4} mobile={true} />
                    </Box>
                </VisibilitySensor>
            </Box>
        </Box>
    );
}
