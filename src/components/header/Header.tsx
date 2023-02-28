import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = function () {
    return (
        <header className={classes.header}>
            <a className={classes.link}>Dashboard</a>
            <img className={classes.logo} src="/assets/logo.svg"></img>
            <img className={classes.lang} src="/assets/lang.svg"></img>
            <div id="burger-menu" onClick={() => {
                document.getElementById("burger-menu")?.classList.toggle(classes.menu_open)
            }} className={classes.menu}>
                <img className={classes.menu_icon} src="/assets/menu.svg"></img>
                <a className={classes.link}>Dashboard</a>
            </div>
        </header>
    )
}

export default Header;
