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

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>User Rating</th>
          <th>Reviews</th>
          <th>Price</th>
          <th>Year</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          prop.data.map((item, id) => (
            <div key={id}>
              <tr>
                <td>{item.Name}</td>
                <td>{item.Author}</td>
                <td>{item.User_Rating}</td>
                <td>{item.Reviews}</td>
                <td>{item.Price}</td>
                <td>{item.Year}</td>
                <td>{item.Genre}</td>
              </tr>
            </div>
          ))
        }
      </tbody>
    </table>
  );
}

export default CsvBlock;

