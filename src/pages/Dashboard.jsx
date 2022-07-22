import React from "react";
import { Heading } from "@chakra-ui/react";
import { Text, Box, Flex, Divider } from "@chakra-ui/react";
import { Icon, Image, chakra } from "@chakra-ui/react";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import TableProducts from "../components/TableProducts";
import BasicStatistics from "../components/Stats";

const Dashboard = () => {
  return (
    <>
      <Heading as="h2" size="3xl" noOfLines={1} my="1rem">
        Dashboard
      </Heading>

      <BasicStatistics />

      <Divider mt="1rem" />
      <Flex mt="2rem">
        <Box w="" py="1rem" _dark={{ bg: "#3e3e3e" }}>
          <Heading as="h3" size="xl">
            Última película en la DB
          </Heading>
          <Flex pt={10} w="full">
            <Box
              w="sm"
              bg="white"
              _dark={{ bg: "gray.800" }}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <Flex alignItems="center" px={6} py={3} bg="gray.900">
                <Icon as={MdHeadset} h={6} w={6} color="white" />

                <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                  Focusing
                </chakra.h1>
              </Flex>

              <Box py={4} px={6}>
                <chakra.h1
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{ color: "white" }}
                >
                  Patterson johnson
                </chakra.h1>

                <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
                  Full Stack maker & UI / UX Designer , love hip hop music
                  Author of Building UI.
                </chakra.p>

                <Flex
                  alignItems="center"
                  mt={4}
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    Choc UI
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    California
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    patterson@example.com
                  </chakra.h1>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box w="full" p="1rem" bg="white" ml="2rem">
          <Heading as="h3" size="xl">
            Nuestros Productos
          </Heading>

          <Box pt={10}>
            <TableProducts size="sm" />
          </Box>
        </Box>
      </Flex>

      <Box bg="white" py={2} px={1} mt="1rem">
        <Heading as="h3" size="xl">
          Películas según los géneros
        </Heading>
      </Box>

      <Box pb="2rem"></Box>
    </>
  );
};

export default Dashboard;
