import React from "react";
import moment from "moment";
import { Table } from "./styles/style";
import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  height: 200px;
`;

export default function NavBar(props) {
  return (
    <Container>
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
              <td>{moment(info.date).format("DD/MM/YYYY")}</td>
            </tr>
          );
        })}
      </Table>
    </Container>
  );
}
