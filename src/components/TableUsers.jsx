import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TableUsers = ({ size }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size={size}>
        <TableCaption>Nuestros Usuarios</TableCaption>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Nombre</Th>
            <Th>Email</Th>
            <Th>Imágen</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.first_name + " " + user.last_name}</Td>
                  <Td>{user.email}</Td>
                  <Td>Imágen</Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Título</Th>
            <Th>Autor</Th>
            <Th>Categorias</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableUsers;
