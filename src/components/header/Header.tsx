import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = function () {

  return (
    <header className={classes.header}>
      <a className={classes.link}>Dashboard</a>
      <img className={classes.logo} src="/assets/logo.svg"></img>
      <img className={classes.lang} src="/assets/lang.svg"></img>
    </header>
  )
}

export default Header;



