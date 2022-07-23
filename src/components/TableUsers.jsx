import React, { useState, useEffect } from "react";
import {
  Badge,
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
            <Th>Tipo de usuario</Th>
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
                  <Td>
                    {user.category_id == 1 ? (
                      <Badge colorScheme="green">Admin</Badge>
                    ) : (
                      <Badge colorScheme="yellow">Visitante</Badge>
                    )}
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Título</Th>
            <Th>Autor</Th>
            <Th>Categorias</Th>
            <Th>Tipo de usuario</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableUsers;
