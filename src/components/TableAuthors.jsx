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

const TableAuthors = ({ size }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/authors")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size={size}>
        <TableCaption>Nuestros libros</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
          </Tr>
        </Thead>
        <Tbody>
          {authors.length > 0 &&
            authors.map((autor) => {
              return (
                <Tr key={autor.id}>
                  <Td>{autor.first_name}</Td>
                  <Td>{autor.last_name}</Td>
                </Tr>
              );
            })}
          {authors.length < 1 && (
            <Tr>
              <Td colSpan="2">"No hay datos para mostrar"</Td>
            </Tr>
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableAuthors;
