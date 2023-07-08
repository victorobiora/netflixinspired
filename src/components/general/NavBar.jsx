import Link from "next/link";
import classes from "./NavBar.module.css";
import { useState, useEffect } from "react";

const NavBar = (props) => {

  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      console.log(isScrolled)
      setNavScroll(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const joinedClasses = `${classes.nav} ${classes.scrolled}`
/* <li>
          <Link href='/'>Movies</Link>
          </li>
          <li>
          <Link href='/'>Tv Shows</Link>
          </li>
          <li>
          <Link href='/'>New & Popular</Link>
          </li>*/

  return (
    <section className={navScroll ? joinedClasses : classes.nav}>
      <div className={classes.mainDeets}>
        <Link href="/" className={classes.home}>
          <h1>NETFLIX</h1>
        </Link>
        <ul className={classes.navBarDeets}>
          <li>
          <Link href='/browse/my-list'>My List</Link>
          </li>
          <li>
            <Link href='/browse'>Browse</Link>
          </li>
        </ul>
      </div>
      <div className={classes.profileDeets}>
        <Link href='/search/avatar'>Search</Link>
        <Link href='/'>{props.signedInName}</Link>
        <Link href='/login'>Log Out</Link>
      </div>
    </section>
  );
};

export default NavBar;
