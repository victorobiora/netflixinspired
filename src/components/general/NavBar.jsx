import Link from "next/link";
import classes from "./NavBar.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { listActions } from "@/store/nStore";

const NavBar = (props) => {
  const searchValue = useRef();
  const Router = useRouter();
  const dispatch = useDispatch();

  const searchHandler = el => {
    el.preventDefault()
    Router.push(`/search/${searchValue.current.value}`)
  }
  return (
    <section className={classes.nav}>
      <div className={classes.mainDeets}>
        <Link href="/" className={classes.home}>
          <h1>NETFLIX</h1>
        </Link>
        <ul className={classes.navBarDeets}>
          <li>
            <Link href="/browse/my-list">My List</Link>
          </li>
          <li>
            <Link href="/browse">Browse</Link>
          </li>
        </ul>
      </div>
      <div className={classes.profileDeets}>
        <form onSubmit={searchHandler}>
          <input className={classes.searchInput} type="text" placeholder="Search" ref={searchValue}/>
        </form>
        <Link href="/">{props.signedInName}</Link>
        <Link href="/login" onClick={(event) => {
          
           event.preventDefault()
           dispatch(listActions.clearList())       
           Router.push('/login')
        }}>Log Out</Link>
      </div>
    </section>
  );
};

export default NavBar;
