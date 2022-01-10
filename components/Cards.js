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

export default function SimpleGrow(props) {
    return (
        <Box sx={{ height: 180 }}>
            <Box sx={{ display: 'flex' }}>
                <Grow in={props.visible}>{icon}</Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={props.visible}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(props.visible ? { timeout: 1000 } : {})}
                >
                    {icon}
                </Grow>
            </Box>
        </Box>
    );
}
