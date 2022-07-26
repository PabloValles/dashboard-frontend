import React, { useState, useEffect } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import Alert from "./Alert";

const Generos = () => {
  const [products, setProducts] = useState([]);
  const [contadorGeneros, setContadorGeneros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let listaGeneros = [];
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        products.map((e) => {
          listaGeneros.push(e.gender.split(","));
        });
        const newArr = listaGeneros.flat();
        const cantidadRepeticiones = newArr.reduce(
          (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
          {}
        );

        const convertToArray = Object.entries(cantidadRepeticiones);
        setContadorGeneros(convertToArray);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isLoading]);

  return (
    <Wrap spacing="30px">
      {isLoading
        ? "Cargandoooo"
        : contadorGeneros.map((g, index) => {
            return (
              <WrapItem key={index}>
                <Alert gender={g[0]} cant={g[1]} />
              </WrapItem>
            );
          })}
    </Wrap>
  );
};

export default Generos;
