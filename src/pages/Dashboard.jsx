import React from "react";
import { Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Text, Box, Flex, Divider } from "@chakra-ui/react";
import { Icon, Image, chakra } from "@chakra-ui/react";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import TableProducts from "../components/TableProducts";
import BasicStatistics from "../components/Stats";
import ProductSimple from "../components/ProductSimple";
import ColorModeToggle from "../components/ColorModeToggle";

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
            Última película en la DB
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
            Nuestros Productos
          </Heading>

          <Box pt={10}>
            <TableProducts size="sm" />
          </Box>
        </Box>
      </Flex>

      <Box
        bg={useColorModeValue("white", "gray.700")}
        py={2}
        px="2rem"
        mt="1rem"
      >
        <Heading as="h3" size="xl">
          Películas según los géneros
        </Heading>

        <Flex justifyContent="space-between">
          <ProductSimple />
          <ProductSimple />
          <ProductSimple />
        </Flex>
      </Box>

      <Box pb="2rem"></Box>
    </>
  );
};

export default Dashboard;
