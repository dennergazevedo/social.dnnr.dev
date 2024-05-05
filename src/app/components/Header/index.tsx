"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { PiMoonStarsLight, PiSunThin } from "react-icons/pi";

type Themes = 'dark' | 'light'

const Header: React.FC = () => {
  const [theme, setTheme] = useState<Themes>('dark');

  const toggleTheme = useCallback(() => {
    const body = document.getElementsByTagName("body");
    if (body) {
      body?.[0]?.classList?.toggle("light");
      sessionStorage.setItem("dnr@theme", theme === 'dark' ? 'light' : 'dark');
      if(theme === 'dark'){
        setTheme('light');
      }else{
        setTheme('dark');
      }
    }
  }, [theme]);

  useEffect(() => {
    const sessionTheme = sessionStorage.getItem("dnr@theme")
    if(sessionTheme){
      setTheme(sessionTheme as Themes);
      console.log("sessionTheme", sessionTheme)
      const body = document.getElementsByTagName("body");
      if (body && sessionTheme === 'light') {
        body?.[0]?.classList?.add("light");
      }
    }
  }, [])

  return (
    <header className={styles.pageHeader}>
      <Link href="/" className={styles.pageHeaderLogo}>
        <strong>d</strong>
        <span>nr</span>
        <p>.dev</p>
      </Link>
      <div onClick={toggleTheme} className={styles.pageHeaderThemeButton}>
        {theme === 'dark' ? <PiSunThin size={20} /> : <PiMoonStarsLight size={20} />}
      </div>
    </header>
  );
};

export default Header;
