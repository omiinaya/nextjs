import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

export default function test(props) {
    return (
        <Box sx={{ display: 'flex' }}>
            {props.cards.map((card, index) => (
                <Grow
                    in={props.visible}
                    key={card}
                    style={{
                        //transformOrigin: '0 0 0',
                        transform: `translateY(${(index + 0) * 30}px)`
                    }}
                    {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                >
                    <Paper sx={{ m: 1 }} elevation={4}>
                        <Box sx={{ width: 170, height: 200 }}>
                            tests
                        </Box>
                    </Paper>
                </Grow>
            ))}
        </Box>
    )
}