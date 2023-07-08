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
