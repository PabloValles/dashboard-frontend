import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import TableAuthors from "../components/TableAuthors";

const Authors = () => {
  return (
    <>
      <Heading as="h2" size="3xl" noOfLines={1} my="1rem">
        Nuestros autores
      </Heading>

      <Box
        bg={useColorModeValue("white", "gray.600")}
        borderRadius="1rem"
        p="1.5rem"
        mt="3rem"
        border="2px"
        borderColor="gray.200"
        w="600px"
      >
        <TableAuthors size="sm" />
      </Box>

      <Box pb="2rem"></Box>
    </>
  );
};

export default Authors;
