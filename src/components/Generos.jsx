import React, { useState, useEffect } from "react";
import { Wrap, WrapItem, Box, Flex } from "@chakra-ui/react";
import Alert from "./Alert";

const Generos = () => {
  const [products, setProducts] = useState([]);
  const [contadorProducts, setContadorProducts] = useState([]);
  const url = `http://localhost:3000/api/products`;
  const listaGeneros = [
    "Accion",
    "Comedia",
    "Ciencia Ficción",
    "Drama",
    "Novelas",
    "Terror",
    "Suspenso",
    "Documentales",
  ];

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Wrap spacing="30px">
        {listaGeneros.map((genero, index) => {
          return (
            <WrapItem key={"id" + genero + ":" + index}>
              <Alert gender={genero} />
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
};

export default Generos;
