import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = function () {
    return (
        <header className={classes.header}>
            <a className={classes.link}>Dashboard</a>
            <img id="logo" className={classes.logo} src="/assets/logo.svg"></img>
            <img className={classes.lang} src="/assets/lang.svg"></img>
            <div id="burger-menu" onClick={() => {
                document.getElementById("burger-menu")?.classList.toggle(classes.menu_open)
                document.getElementById("menu-link")?.classList.toggle(classes.menu_link_open)
                document.getElementById("logo")?.classList.toggle(classes.logo_close)
                document.getElementById("lang")?.classList.toggle(classes.lang_open)
            }} className={classes.menu}>
                <img className={classes.menu_icon} src="/assets/menu.svg"></img>
                <a id="menu-link" className={classes.menu_link}>Dashboard</a>
                <img id="lang" className={classes.lang} src="/assets/lang.svg"></img>
            </div>
        </header >
    )
}

export default Header;
