import React, { useState, useEffect } from "react";
import { Wrap, WrapItem, Box, Flex } from "@chakra-ui/react";
import Alert from "./Alert";

const Generos = () => {
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

  const [products, setProducts] = useState([]);
  const [drama, setDrama] = useState(0);
  const [accion, setAccion] = useState(0);
  const [comedia, setComedia] = useState(0);
  const [cienciaFiccion, setCienciaFiccion] = useState(0);
  const [novelas, setNovelas] = useState(0);
  const [terror, setTerror] = useState(0);
  const [suspenso, setSuspenso] = useState(0);
  const [documentales, setDocumentales] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        console.log(products);
        agregarGenero();
      })
      .catch((err) => console.log(err));
  }, []);

  const agregarGenero = (data) => {
    listaGeneros.map((g) => {
      products.map((product) => {
        product.gender.includes(g)
          ? console.log(product.name, "SI tiene " + g)
          : console.log(product.name, "NO tiene " + g);
      });
    });
  };

  return (
    <>
      <Wrap spacing="30px">
        <WrapItem>
          <Alert gender="Drama" />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default Generos;
