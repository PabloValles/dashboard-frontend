import React, { useState, useEffect } from "react";
import {
  Button,
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
import { Link } from "react-router-dom";

const TableProducts = ({ size }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size={size}>
        <TableCaption>Nuestros libros</TableCaption>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Autor</Th>
            <Th>Categorias</Th>
            <Th>Ver libro</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.length > 0 &&
            products.map((p) => {
              const { authors } = p;

              return (
                <Tr key={p.id}>
                  <Td>{p.name}</Td>
                  <Td>{authors.first_name + " " + authors.last_name}</Td>
                  <Td>{p.gender}</Td>
                  <Td>
                    <Link to={"/products/" + p.id}>
                      <Button colorScheme="green" variant="solid" size="sm">
                        Ver libro
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          {products.length < 1 && (
            <Tr>
              <Td colSpan="3">"No hay datos para mostrar"</Td>
            </Tr>
          )}
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

export default TableProducts;
