import React, { useContext, useState } from 'react';
import { context } from "../../index";
import Store from '../../store/store';
import classes from "./css/csvBlock.module.css"

interface csvBlockProps {
  data: Array<any>;

}
const CsvBlock = function (prop: csvBlockProps) {
  const [Data, setData] = useState(Array);
  const { store } = useContext(context);
  async function getData() {
    store.setLoading(true);
    try {
      setData(prop.data)

    } finally { store.setLoading(false) }
  }

  return (

    <table className={classes.csv_table}>
      <thead>
        <tr >
          <th className={classes.table_headrow}>Name</th>
          <th className={classes.table_headrow}>Author</th>
          <th className={classes.table_headrow}>User Rating</th>
          <th className={classes.table_headrow}>Reviews</th>
          <th className={classes.table_headrow}>Price</th>
          <th className={classes.table_headrow}>Year</th>
          <th className={classes.table_headrow}>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          prop.data.map((item, id) => (
            <div key={id}>
              <tr>
                <td className={classes.table_bodyrow}>{item.Name}</td>
                <td className={classes.table_bodyrow}>{item.Author}</td>
                <td className={classes.table_bodyrow}>{item.User_Rating}</td>
                <td className={classes.table_bodyrow}>{item.Reviews}</td>
                <td className={classes.table_bodyrow}>{item.Price}</td>
                <td className={classes.table_bodyrow}>{item.Year}</td>
                <td className={classes.table_bodyrow}>{item.Genre}</td>
              </tr>
            </div>
          ))
        }
      </tbody>
    </table>
  );
}

export default CsvBlock;

