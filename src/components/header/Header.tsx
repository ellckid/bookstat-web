import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lang from "../selector/Lang";

const Header = function () {
  function openLangInMenu() {
    document.getElementById("lang")?.classList.remove('lang')
    document.getElementById("lang")?.classList.toggle(classes.lang_open)
  }
  return (
    <header className={classes.header}>
      <a className={classes.link}>Dashboard</a>
      <img id="logo" className={classes.logo} src="/assets/logo.svg"></img>
      <Lang linkto="/" isRussian={false} func="" />
      <button id="burger-menu" onClick={() => {
        document.getElementById("burger-menu")?.classList.toggle(classes.menu_open)
        document.getElementById("menu-link")?.classList.toggle(classes.menu_link_open)
        document.getElementById("logo")?.classList.toggle(classes.logo_close)
        openLangInMenu()

      }} className={classes.menu}>
        <img className={classes.menu_icon} src="/assets/menu.svg"></img>
        <a id="menu-link" className={classes.menu_link}>Dashboard</a>
        <Lang linkto="/" isRussian={false} func={openLangInMenu} />
      </button >
    </header >
  )
}

export default Header;
