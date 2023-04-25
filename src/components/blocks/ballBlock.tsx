import classes from "./css/BallBlock.module.css";

const BallBlock = function () {

  return (
    <section className={classes.block_container}>
      <div className={classes.title_container}>
        <h2 className={classes.h2_title}>Statistics analysis</h2>
        <h3 className={classes.h3_title}>In this step, we have some hypotheses.
          Zero hypothesis - Author and rating have a high correlation. The alternative hypothesis –
          Author and rating doesn’t have a high correlation.
          So as you can see on the correlation matrix we reject the zero hypotheses. And we don’t have any high correlation in this data. </h3>
      </div>
      <img className={classes.block_icon} src="/assets/small_balls.png"></img>
    </section >
  )
}

export default BallBlock;
