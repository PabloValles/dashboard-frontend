import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";
import bookDefaultImg from "../assets/img/book-default.png";

export default function ProductSimple() {
  const url = "http://localhost:3000/api/products";
  const baseImg = "http://localhost:3000/img/uploads/";
  const [image, setImage] = useState(bookDefaultImg);
  const [lastProduct, setLastProduct] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let lastProduct = data.data.pop();
        let author = lastProduct.authors;
        setLastProduct(lastProduct);
        setAuthor(author);
        setImage(baseImg + "/" + lastProduct.image);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("whiteAlpha.50", "gray.600")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={260}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Ultimo libro
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {lastProduct.name ? lastProduct.name : "No hay libros"}
          </Heading>
          <Heading
            color={"gray.400"}
            fontSize={"xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {lastProduct.name != undefined
              ? `Autor ${author.first_name} ${author.last_name}`
              : null}
          </Heading>
          <Divider />
          {lastProduct.name && (
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                ${lastProduct.price}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.500"}>
                ${lastProduct.price + 1000}
              </Text>
            </Stack>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
