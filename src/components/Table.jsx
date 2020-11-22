import React from "react";
import { Table } from "./styles/style";

export default function NavBar(props) {
  return (
    <Table>
      <caption style={{ fontSize: "26px" }}>{props.title}</caption>
      <tr>
        <th>City</th>
        <th>Country</th>
        <th>Days</th>
        <th>Date</th>
      </tr>
      {props.userInfo.map((info) => {
        return (
          <tr>
            <td>{info.city}</td>
            <td>{info.country}</td>
            <td>{info.days}</td>
            <td>{info.date}</td>
          </tr>
        );
      })}
    </Table>
  );
}
