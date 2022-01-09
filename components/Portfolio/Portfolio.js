import Typography from '@mui/material/Typography';
import style from "./Portfolio.module.scss";

export default function Portfolio() {
    return (
        <div className={style.root}>
            <Typography textAlign="center" className={style.title}>Portfolio</Typography>
        </div>
    )
}
