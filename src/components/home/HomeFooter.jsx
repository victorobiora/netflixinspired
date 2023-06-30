import styles from "./HomeFooter.module.css";
import Link from "next/link";

const HomeFooter = (props) => {
  return (
    <div className={styles.footer}>
        <div className={styles.contact}>
              <Link href="/">Questions? Contact Us</Link>    
        </div>
      <ul className={styles.listFooterItems}>
        <li>
          <Link href="/">FAQ </Link>
        </li>
        <li>
          <Link href="/"> Media Center</Link>
        </li>
        <li>
          <Link href="/">Ways to watch </Link>
        </li>
        <li>
          <Link href="/">Cookie Preferences </Link>
        </li>
        <li>
          <Link href="/"> Speed Test</Link>
        </li>
        <li>
          <Link href="/"> Help Center </Link>
        </li>
        <li>
          <Link href="/"> Investor Relations</Link>
        </li>
        <li>
          <Link href="/"> Terms of Use </Link>
        </li>
        <li>
          <Link href="/"> Corporate Information</Link>
        </li>
        <li>
          <Link href="/"> Legal Notices</Link>
        </li>
        <li>
          <Link href="/">Account </Link>
        </li>
        <li>
          <Link href="/"> Jobs </Link>
        </li>
        <li>
          <Link href="/"> Privacy</Link>
        </li>
        <li>
          <Link href="/"> Contact Us</Link>
        </li>
        <li>
          <Link href="/"> Only on Netflix</Link>
        </li>
      </ul>
      <p>Netflix Nigeria</p>
    </div>
  );
};

export default HomeFooter;
