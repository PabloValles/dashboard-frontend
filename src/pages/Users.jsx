import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import TableUsers from "../components/TableUsers";

const Users = () => {
  return (
    <>
      <Heading as="h2" size="3xl" noOfLines={1} my="1rem">
        Nuestros Usuarios
      </Heading>

      <Box
        bg={useColorModeValue("white", "gray.600")}
        borderRadius="1rem"
        p="1.5rem"
        mt="3rem"
        border="2px"
        borderColor="gray.200"
        mb="6rem"
      >
        <TableUsers />
      </Box>

      <Box pb="2rem"></Box>
    </>
  );
};

export default Users;
