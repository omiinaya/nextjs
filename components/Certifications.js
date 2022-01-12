import { useState } from 'react';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Certificate from './Certificate';

export default function Certifications() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const certs1 = ['FullStack']
    const certs2 = ['React', 'JavaScript']
    const certs3 = ['HTML', 'CSS']
    const certs4 = ['Node', 'Git']

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
                        <Certificate certs={certs1} visible={visible1} mobile={false}/>
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
                        <Certificate certs={certs1} visible={visible1} mobile={true}/>
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible2(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs2} visible={visible2} mobile={false}/>
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
                        <Certificate certs={certs2} visible={visible2} mobile={true}/>
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible3(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs3} visible={visible3} mobile={false} />
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
                        <Certificate certs={certs3} visible={visible3} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setVisible4(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs4} visible={visible4} mobile={false} />
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
                        <Certificate certs={certs4} visible={visible4} mobile={true} />
                    </Box>
                </VisibilitySensor>
            </Box>
        </Box>
    );
}
