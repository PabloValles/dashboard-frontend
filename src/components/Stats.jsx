import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";


function StatsCard({ title, icon, table, background, text }) {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/api/${table}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setCounter(data.total);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      w="full"
      shadow={"xl"}
      border={"2px solid"}
      borderColor={`${background}`}
      rounded={"lg"}
      bg={background}
      color={text}
    >
      <Flex justifyContent={"space-between"}>
        <Box>
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {counter}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={text} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="full" pt={5}>
      <Flex justifyContent="space-around" gap="5rem">
        <StatsCard
          title="Users"
          table="users"
          background="cyan.600"
          text="white"
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Libros"}
          table="products"
          background="green.500"
          text="white"
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Autores"}
          table="authors"
          background="purple.500"
          text="white"
          icon={<GoLocation size={"3em"} />}
        />
      </Flex>
    </Box>
  );
}
