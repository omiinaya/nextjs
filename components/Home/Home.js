import NavBar from '../NavBar/NavBar'
import style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={style.root}>
      <div className={style.NavBar}>
        <NavBar />
      </div>
      <div>
        test
      </div>
    </div>
  )
}
