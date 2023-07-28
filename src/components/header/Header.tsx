import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lang from "../selector/Lang";

const Header = function () {

    function openMenu() {
        document.getElementById("burger-menu")?.classList.toggle(classes.menu_open)
        document.getElementById("menu-link")?.classList.toggle(classes.menu_link_open)
        document.getElementById("logo")?.classList.toggle(classes.logo_close)
        document.getElementById("menu_icon_container")?.classList.toggle(classes.menu_icon_container)
        document.getElementById("menu_icon")?.classList.toggle(classes.menu_icon_rotate)
        document.getElementById("menu-lang")?.classList.toggle(classes.lang_open)
    }
    return (
        <header className={classes.header}>
            <a className={classes.link}>Dashboard</a>
            <img id="logo" className={classes.logo} src="/bookstat-web/assets/logo.svg"></img>
            <div className={classes.lang_close}>
                <Lang linkto="/" isRussian={false} />
            </div>

            <button
                id="burger-menu"
                onClick={() => {
                    openMenu()
                }}
                className={classes.menu}>
                <div id="menu_icon_container" >
                    <img id="menu_icon" className={classes.menu_icon} src="/bookstat-web/assets/menu.svg"></img>
                </div>
                <a id="menu-link" className={classes.menu_link}>Dashboard</a>
                <div id="menu-lang" className={classes.lang_close}>
                    <Lang linkto="/" isRussian={false} />
                </div>
            </button >
        </header >
    )
}

export default Header;
