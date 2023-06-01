import Link from "next/link";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <section className={classes.nav}>
      <div className={classes.mainDeets}>
        <Link href="/" className={classes.home}>
          <h1>NETFLIX</h1>
        </Link>
        <ul className={classes.navBarDeets}>
          <li>
          <Link href='/'>Home</Link>
          </li>
          <li>
          <Link href='/'>Movies</Link>
          </li>
          <li>
          <Link href='/'>Tv Shows</Link>
          </li>
          <li>
          <Link href='/'>New & Popular</Link>
          </li>
          <li>
          <Link href='/'>My List</Link>
          </li>
          <li>
            <Link href='/'>Browse By Language</Link>
          </li>
        </ul>
      </div>
      <div className={classes.profileDeets}>
        <Link href='/'>Search</Link>
        <Link href='/'>{props.signedInName}</Link>
        <Link href='/'>Notifs</Link>
        <Link href='/'> Profile</Link>
      </div>
    </section>
  );
};

export default NavBar;
