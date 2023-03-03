import classes from "./css/ScrollBtn.module.css"

const ScrollBtn = function () {
  return (
    <button className={classes.button}>
      <a className={classes.btn_title}>Scroll</a>
      <img className={classes.btn_icon} src="/assets/down_arrow.svg"></img>
    </button>
  )
}

export default ScrollBtn;
