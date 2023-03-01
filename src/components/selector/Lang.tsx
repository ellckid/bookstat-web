import { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Lang.module.css";

interface langprop {
  linkto: string;
  isRussian: boolean;
  func: Function | string;
}
const Lang = function (prop: langprop) {
  useEffect(() => {
    prop.func
  }, [classes.lang])
  return (
    (prop.isRussian)
      ?
      <Link id="lang" className={classes.lang_link} to={prop.linkto}>
        <img id="lang" className={classes.lang} src="/assets/rulang.svg"></img>
      </Link>
      :
      <Link id="lang" className={classes.lang_link} to={prop.linkto}>
        <img id="lang" className={classes.lang} src="/assets/englang.svg"></img>
      </Link>
  )
}

export default Lang;
