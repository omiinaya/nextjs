import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={style.root}>
      <div className={style.NavBar}>
        <NavBar />
      </div>
      <div className={style.Title}>
        .About Me
      </div>
      <div className={style.AboutMe}>
        <AboutMe />
      </div>
    </div>
  )
}
