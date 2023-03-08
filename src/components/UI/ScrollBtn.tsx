import classes from "./css/ScrollBtn.module.css"

const ScrollBtn = function () {
  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  };

  return (
    <button className={classes.button} onClick={scrollDown}>
      <a className={classes.btn_title}>Scroll</a>
      <img className={classes.btn_icon} src="/assets/down_arrow.svg"></img>
    </ button >
  )
}

export default ScrollBtn;
