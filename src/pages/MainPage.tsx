import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import classes from './css/MainPage.module.css';
import Header from "../components/header/Header";
import Loader from "../components/UI/Loader";
import { context } from "../../src/index";
import HelloBlock from "../components/blocks/HelloBlock";
import CollectBlock from "../components/blocks/CollectBlock";

function MainPage() {
  const { store } = useContext(context);
  if (store.isLoading) {
    return <Loader />
  }
  return (
    <section className={classes.content_container}>
      {/* header */}
      <Header></Header>
      <HelloBlock></HelloBlock>
      <CollectBlock></CollectBlock>
    </section >
  )
}

export default MainPage;
