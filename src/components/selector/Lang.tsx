import { Link } from "react-router-dom";
import classes from "./Lang.module.css";

interface langprop {
  linkto: string;
  isRussian: boolean;
}
const Lang = function (prop: langprop) {

  return (
    (prop.isRussian)
      ?
      <Link className={classes.lang_link} to={prop.linkto}>
        <img className={classes.lang} src="/assets/rulang.svg"></img>
      </Link>
      :
      <Link className={classes.lang_link} to={prop.linkto}>
        <img className={classes.lang} src="/assets/englang.svg"></img>
      </Link>
  )
}

export default Lang;
