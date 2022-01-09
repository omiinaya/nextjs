import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import style from "./Breadcrumb.module.scss";

export default function Breadcrumb(props) {
    return (
        <Breadcrumbs aria-label="breadcrumb" className={style.root}>
            <Typography color="inherit">
                Home
            </Typography>
            <Typography color="inherit">
                {props.current}
            </Typography>
        </Breadcrumbs>
    )
}