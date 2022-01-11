import { useState } from 'react';
import Box from '@mui/material/Box';
import Cards from './Cards';
import VisibilitySensor from 'react-visibility-sensor';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '').replace('.png', '')] = r(item); });
    return images
}

const images = importAll(require.context('../public/static/imgs/icons/', false, /\.(png|jpe?g|svg)$/))

export default function SimpleGrow() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const cards1 = ['JavaScript', 'React', 'Node', 'Electron', 'Python', 'Java']
    const cards2 = ['MySQL', 'Sequelize', 'MongoDB', 'Express', 'Git', 'JSON']
    const cards3 = ['NextJS', 'React Native', 'Bootstrap', 'JQuery', 'HTML', 'CSS']

    return (
        <Box>
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
                    <Cards cards={cards1} visible={visible1} mobile={false} x={images}/>
                </Box>
            </VisibilitySensor>
            <VisibilitySensor
                //partialVisibility={true}
                onChange={(e) => { if (e) setVisible1(e) }}
            >
                <Box
                    display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                    justifyContent='center'
                >
                    <Cards cards={cards1} visible={visible1} mobile={true} x={images}/>
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
                    <Cards cards={cards2} visible={visible2} mobile={false} x={images}/>
                </Box>
            </VisibilitySensor>
            <VisibilitySensor
                //partialVisibility={true}
                onChange={(e) => { if (e) setVisible2(e) }}
            >
                <Box
                    display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                    justifyContent='center'
                >
                    <Cards cards={cards2} visible={visible2} mobile={true} x={images}/>
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
                    <Cards cards={cards3} visible={visible3} mobile={false} x={images}/>
                </Box>
            </VisibilitySensor>
            <VisibilitySensor
                //partialVisibility={true}
                onChange={(e) => { if (e) setVisible3(e) }}
            >
                <Box
                    display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                    justifyContent='center'
                >
                    <Cards cards={cards3} visible={visible3} mobile={true} x={images}/>
                </Box>
            </VisibilitySensor>
        </Box>
    );
}
