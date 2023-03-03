import ScrollBtn from "../UI/ScrollBtn";
import classes from "./css/HelloBlock.module.css";

const HelloBlock = function () {
  return (
    <section className={classes.hello_container}>
      <div className={classes.title_container}>
        <h1 className={classes.title_h1}>Hello!</h1>
        <h2 className={classes.title_h2}>Here we show to you our <b>analysis project</b> about bestsellers books on Amazon <br></br> for a one decade (2009-2019)</h2>
        <ScrollBtn></ScrollBtn>
      </div>
      <img className={classes.hello_blob} src="/assets/blob.png"></img>
    </section>
  )
}

export default HelloBlock;
