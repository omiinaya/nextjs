import { useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import style from "./Home.module.scss";

export default function Home() {
  useEffect(() => {
    //
  });

  return (
    <div className={style.root}>
      <div className={style.NavBar}>
        <NavBar />
      </div>
      <AboutMe />
      <Skills />
    </div>
  )
}
