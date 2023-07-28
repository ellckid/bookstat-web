import ScrollBtn from "../UI/ScrollBtn";
import classes from "./css/footer.module.css";

const Footer = function () {
    return (
        <footer className={classes.main_footer}>
            <div className={classes.footer_container}>
                <div className={classes.container_info}>
                    <a className={classes.info_logo}>Bookstat</a>
                    <h3 className={classes.info_text}>Opensource analysis project</h3>
                    <h3 className={classes.info_text}>Check out more on <a className={classes.info_link} >Github</a></h3>
                </div>
                <div className={classes.container_profiles}>
                    <div className={classes.profile_container}>
                        <div className={classes.profile_img}></div>
                        <div className={classes.profile_info_container}>
                            <h1 className={classes.profile}>Lobov Artem</h1>
                            <div className={classes.profile_link_container}>
                                <a className={classes.profile_link} href="https://github.com/ellckid">Github</a>
                                <a className={classes.profile_link} href="https://t.me/ellckid">Telegram</a>
                                <a className={classes.profile_link} href="zelyonuy17@gmail.com">Email</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.profile_container}>
                        <div className={classes.profile_img}></div>
                        <div className={classes.profile_info_container}>
                            <h1 className={classes.profile}>Matvei PRO</h1>
                            <div className={classes.profile_link_container}>
                                <a className={classes.profile_link} href="https://github.com/MatProschenkov">Github</a>
                                <a className={classes.profile_link} href="https://t.me/truepiggypop">Telegram</a>
                                <a className={classes.profile_link} href="orc352@gmail.com">Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
