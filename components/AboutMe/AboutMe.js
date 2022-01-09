import Typography from '@mui/material/Typography';
import style from "./AboutMe.module.scss";

export default function AboutMe() {
    return (
        <div className={style.root}>
            <Typography textAlign="center" className={style.title}>About Me</Typography>
        </div>
    )
}
