import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import classes from './css/MainPage.module.css'
import Header from "../components/Header";
import Loader from "../components/UI/Loader";
import { context } from "../../src/index";

function MainPage() {
  const { store } = useContext(context);
  if (store.isLoading) {
    return <Loader />
  }
  return (
    <section className={classes.main}>
      {/* header */}
      hello world
    </section >
  )
}

export default MainPage;
