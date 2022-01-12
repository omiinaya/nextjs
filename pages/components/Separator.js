import Box from '@mui/material/Box';

export default function Cards(props) {

    return (
        <Box
            className='rootSeparatorContainer'
            mt={{ xs: props.mobilemt, sm: props.mobilemt, md: props.mt, lg: props.mt }}
            mb={{ xs: props.mobilemb, sm: props.mobilemb, md: props.mb, lg: props.mb }}
        >
            <div className='rootSeparator'>
                <div>{props.text}</div>
            </div>
        </Box>
    )
}