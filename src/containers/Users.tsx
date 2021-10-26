import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import requestsWrapper from "../requestsWrapper";
import { IUser } from "../types";
import { fold } from "fp-ts/lib/Either";
// interface UsersProps {}

export default function Users() {
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    requestsWrapper.users().then(fold(console.error, setUsers));
  }, [setUsers]);
  return (
    <Container id="users" className="page">
      {users ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Patronymic</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, ind) => (
              <tr key={ind}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.name}</td>
                <td>{u.surname}</td>
                <td>{u.patronymic}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        "Loading..."
      )}
    </Container>
  );
}
