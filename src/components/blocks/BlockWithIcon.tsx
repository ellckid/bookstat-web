import classes from "./css/BlockWithIcon.module.css";
interface Blockprop {
  icon_src: string;
  isIconLeft: boolean;
  title: string;
  subtitle: string;
}
const BlockWithIcon = function (prop: Blockprop) {

  return (
    (prop.isIconLeft)
      ?
      <section className={classes.block_container + " " + classes.right}>
        <div className={classes.title_container}>
          <h2 className={classes.h2_title}>{prop.title}</h2>
          <h3 className={classes.h3_title}>{prop.subtitle}</h3>
        </div>
        <img className={classes.block_icon} src={prop.icon_src}></img>
      </section>
      :
      <section className={classes.block_container + " " + classes.left}>
        <div className={classes.title_container}>
          <h2 className={classes.h2_title}>{prop.title}</h2>
          <h3 className={classes.h3_title}>{prop.subtitle}</h3>
        </div>
        <img className={classes.block_icon} src={prop.icon_src}></img>
      </section>
  )
}

export default BlockWithIcon;
