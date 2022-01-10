import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Box component="svg" sx={{ width: 100, height: 100 }}>
            <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
            />
        </Box>
    </Paper>
);

const cards = ['JavaScript', 'React', 'HTML', 'CSS']

export default function SimpleGrow(props) {
    return (
        <Box m={'60px'} >
            <Box sx={{ display: 'flex' }}>
                {cards.map((card, index) => (
                    <Grow
                        in={props.visible}
                        key={card}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(props.visible ? { timeout: (index+1) * 500 } : {})}
                    >
                        {icon}
                    </Grow>
                ))}

            </Box>
        </Box>
    );
}
