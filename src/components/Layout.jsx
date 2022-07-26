import React from "react";
import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import {
  HiCode,
  HiUserGroup,
  HiOutlineHome,
  HiArrowSmRight,
} from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Authors from "../pages/Authors";
import NotFound404 from "../pages/NotFound404";
import ColorModeToggle from "../components/ColorModeToggle";
import BookDetail from "../pages/BookDetail";

export const Layout = () => {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{ color: "white" }}
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{ bg: "gray.800" }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Link to="/" exact="true">
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{ color: "white" }}
            fontWeight="semibold"
          >
            Booksarmy
          </Text>
        </Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link to="/" exact="true">
          <NavItem icon={HiOutlineHome}>Dashboard</NavItem>
        </Link>
        <Link to="/products">
          <NavItem icon={ImBooks}>Libros</NavItem>
        </Link>
        <Link to="/users">
          <NavItem icon={HiUserGroup}>Usuarios</NavItem>
        </Link>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Tablas secundarias
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <Link to="/authors">
            <NavItem pl="12" py="2" icon={HiArrowSmRight}>
              Autores
            </NavItem>
          </Link>
        </Collapse>
      </Flex>
    </Box>
  );

  const Navbar = () => {
    return (
      <>
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{ bg: "gray.800" }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: "none", md: "flex" }}>
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Buscar..." />
          </InputGroup>

          <Flex align="center" mx="3px">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
            <Box ml="1rem">
              <ColorModeToggle />
            </Box>
          </Flex>
        </Flex>
      </>
    );
  };

  return (
    <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Navbar />

        {/* CONTENEDOR PRINCIPAL */}
        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/products/:id" element={<BookDetail />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
