import styles from "./trendingsection.module.scss";
import Carrousel from "../Carrousel/Carrousel";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const TrendingSection = () => {

    return (
        <section className={styles.trendingContainer}>
            <h2 className={styles.title}>Trending</h2>
            <Carrousel />
            <Fragment>
                <Outlet />
            </Fragment>
        </section>
    )
}

export default TrendingSection;