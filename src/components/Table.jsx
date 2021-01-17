import React from "react";
import moment from "moment";
import { Table } from "./styles/style";
import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  height: 200px;
`;

export default function NavBar(props) {
  const { userInfo } = props;

  return (
    <Container>
      <Table>
        <caption style={{ fontSize: "26px" }}>{props.title}</caption>
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((info, index) => {
            return (
              <tr key={index}>
                <td>{info.city}</td>
                <td>{info.country}</td>
                <td>{moment(info.date).format("DD/MM/YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
