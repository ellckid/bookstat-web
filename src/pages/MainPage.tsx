import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { context } from "../../src/index";
import classes from './css/MainPage.module.css';
import Header from "../components/header/Header";
import Loader from "../components/UI/Loader";
import HelloBlock from "../components/blocks/HelloBlock";
import BlockWithIcon from "../components/blocks/BlockWithIcon";
import DataVisBlock from "../components/blocks/DataVisBlock";
import CsvBlock from "../components/blocks/csvBlock";
import csvData from "../data/data.json"

function MainPage() {
  const { store } = useContext(context);
  if (store.isLoading) {
    return <Loader />
  }
  return (
    <section className={classes.content_container}>

      {/* header */}
      <Header></Header>

      {/* hello block  */}
      <HelloBlock></HelloBlock>

      {/* collect block */}
      <BlockWithIcon
        icon_src="/assets/download.svg"
        isIconLeft={false}
        title="Collecting the data"
        subtitle="Usually, this step can be not so easy. In this case, we take an open dataset from Kaggle. You can find the link for this dataset below. 
        So after the dataset is downloaded we could start cleaning the data."
      ></BlockWithIcon>

      {/* data visualisation block with pie chart */}
      <DataVisBlock></DataVisBlock>

      {/* cleaning data block */}
      <BlockWithIcon
        icon_src="/assets/bin.svg"
        isIconLeft={true}
        title="Cleaning the data"
        subtitle="Usually, this step can be not so easy.
        In this case, we take an open dataset from Kaggle. 
        You can find the link for this dataset below. 
        So after the dataset is downloaded we could start cleaning the data."
      ></BlockWithIcon>

      {/* conclusion block */}
      <BlockWithIcon
        icon_src="/assets/final.svg"
        isIconLeft={false}
        title="Conclusion"
        subtitle="Finally, we can see some generic and more specific information from this data. By this, we can understand that fiction books are more popular than non-fiction. But from this data, we cannot understand what can make a regular book a bestseller book. "
      ></BlockWithIcon>
      <CsvBlock data={csvData}></CsvBlock>


    </section >
  )
}

export default MainPage;
