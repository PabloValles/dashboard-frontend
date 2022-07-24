import React from "react";
import { Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Center, Text, Box, Flex, Divider } from "@chakra-ui/react";
import TableProducts from "../components/TableProducts";
import BasicStatistics from "../components/Stats";
import ProductSimple from "../components/ProductSimple";
import Generos from "../components/Generos";

const Dashboard = () => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Heading as="h2" size="3xl" noOfLines={1} my="1rem">
          Dashboard
        </Heading>
      </Flex>

      <BasicStatistics />

      <Divider mt="1rem" />
      <Flex mt="2rem" px="2rem">
        <Box w="" py="1rem">
          <Heading as="h3" size="xl">
            Último libro en la DB
          </Heading>

          <ProductSimple />
        </Box>
        <Box
          w="full"
          p="1rem"
          bg={useColorModeValue("white", "gray.700")}
          ml="2rem"
        >
          <Heading as="h3" size="xl">
            Nuestros libros
          </Heading>

          <Box pt={10}>
            <TableProducts size="sm" />
          </Box>
        </Box>
      </Flex>

      <Box
        bg={useColorModeValue("whiteAlpha.50", "gray.700")}
        py={2}
        px="2rem"
        mt="1rem"
      >
        <Heading as="h3" mb="1rem" size="xl">
          Libros según géneros
        </Heading>

        <Generos />
      </Box>

      <Box pb="2rem"></Box>
    </>
  );
};

export default Dashboard;
