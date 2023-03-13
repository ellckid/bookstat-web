import classes from "./css/DataVisBlock.module.css";


const DataVisBlock = function () {

  return (
    <section className={classes.block_container} >
      <div className={classes.title_container}>
        <h2 className={classes.h2_title}>Data visualasation</h2>
        <h3 className={classes.h3_title}>In this step, we show some information about our values.Firstly we make a pie bar with the percentage of genres. After that, we visualized the most popular authors. Funny that none of them have 5.0 points on the rating score. We have general information and now we splitting our dataset by values. And on bar plots, you can see the most reviewed authors in both genres. And finally distplots with a distribution of prices for books.
        </h3>
      </div>
      <img className={classes.block_icon} src="/assets/pie_chart.png"></img>
    </section >

  )
}

export default DataVisBlock;
