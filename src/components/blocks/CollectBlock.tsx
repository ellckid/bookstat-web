import classes from "./css/CollectBlock.module.css";

const CollectBlock = function () {
  return (
    <section className={classes.collect_container}>
      <div className={classes.title_container}>
        <h2 className={classes.h2_title}>Collecting the data</h2>
        <h3 className={classes.h3_title}>Usually, this step can be not so easy. In this case, we take an open dataset from Kaggle. You can find the link for this dataset below.
          So after the dataset is downloaded we could start cleaning the data.</h3>
      </div>
      <img className={classes.collect_icon} src="/assets/download.svg"></img>
    </section>
  )
}

export default CollectBlock;
