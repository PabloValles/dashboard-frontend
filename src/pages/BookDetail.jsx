import React, { useState, useEffect } from "react";
import {
  Box,
  chakra,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, Routes, Route, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [product, setProduct] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.urlImagen);
        setProduct(data.data.book);
        setAuthor(data.data.book.authors);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="2xl" noOfLines={1} my="1rem">
          {product.name}
        </Heading>
        <Link
          to="/products"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button
            leftIcon={<MdKeyboardBackspace />}
            colorScheme={"green"}
            variant="solid"
          >
            Volver
          </Button>
        </Link>
      </Flex>

      <Flex py={6}>
        <Stack
          borderRadius="lg"
          w={{ sm: "100%", md: "840px" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg={useColorModeValue("gray.200", "gray.700")}>
            <Image objectFit="cover" boxSize="100%" src={image} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {product.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              @{author.first_name + " " + author.last_name}
            </Text>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              {product.description}
            </Text>
            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                # {product.gender}
              </Badge>
            </Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Editar
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                colorScheme={"green"}
              >
                + Añadir
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>

      <Box pb="10rem"></Box>
    </>
  );
};

export default BookDetail;
