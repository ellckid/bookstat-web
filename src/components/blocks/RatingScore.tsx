import classes from "./css/RatingScore.module.css";

const RatingScore = function () {

    return (
        <section className={classes.block_container}>
            <div className={classes.title_container}>
                <h3 className={classes.h3_title}>
                    Nathan W. Pyle
                    Bill Martin Jr.
                    Jill Twiss
                    Rush Limbaugh
                    Pete Souza
                    Sarah Young
                    Uni-Manuel Miranda
                    Patrick Thorpe
                    Dav Pilkey
                    Alice Schertle
                </h3>
            </div>
            <img className={classes.block_icon} src="/bookstat-web/assets/score.png"></img>
        </section >
    )
}

export default RatingScore;
